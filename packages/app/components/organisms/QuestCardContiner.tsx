import CardMedia from '@/components/atom/CardMedia';
import LottieDone from '@/components/atom/Done';
import ModalBottom from '@/components/atom/ModalBottom';
import ModalCenter from '@/components/atom/ModalCenter';
import QuestInfoCard from '@/components/moleculs/QuestInfoCard';
import QuestProposalCard from '@/components/moleculs/QuestProposalCard';
import UserInfoCard from '@/components/moleculs/UserInfoCard';
import { AccountUser } from '@/services/AccountUser';
import { questApi } from '@/services/InitOas';
import { NetworkSymbol } from '@/services/NetworkSymbol';

import type { Quest, QuestWorker, User } from 'oas/types';
import { useState } from 'react';
import { getActivePublicKey } from 'sss-module';

interface P {
  quest: Quest;
  user?: User | null;
  onSubmitProposal: (data: { proposal: string; questId: string }) => void;
  onSubmitWorkerApproval: () => void;
  onSubmitWorkerDeliverApply: () => void;
}

export default function QuestCardContiner(props: P): JSX.Element {
  const [isOpenQuestModal, setIsOpenQuestModal] = useState<boolean>(false);
  const [isOpenDone, setIsOpenDone] = useState<boolean>(false);
  const [modalElement, setModalElement] = useState<JSX.Element | null>(null);

  const handleClickQuestCard = () => setIsOpenQuestModal(true);
  const handleCloseQuestModal = () => setIsOpenQuestModal(false);
  const handleCloseModal = () => setModalElement(null);
  const handleClickUserIcon = () => {
    setModalElement(<UserInfoCard user={props.quest.owner} onClose={handleCloseModal} />);
  };
  const handleClickProposal = () => {
    setModalElement(
      <QuestProposalCard questId={props.quest.id} onSubmit={handleSubmitProposal} onClose={handleCloseModal} />
    );
  };

  const handleCloseDoneModal = () => {
    setModalElement(null);
    [setIsOpenDone, setIsOpenQuestModal].forEach((f) => f(false));
  };

  const handleSubmitProposal = (data: { proposal: string; questId: string }) => {
    props.onSubmitProposal(data);
    setIsOpenDone(true);
    setModalElement(null);
    setTimeout(() => {
      setIsOpenDone(false);
      setIsOpenQuestModal(false);
    }, 3000);
  };

  const handleApprovalWorker = async (worker: QuestWorker): Promise<void> => {
    try {
      const contractTransaction = await questApi.postQuestApproval({
        questId: props.quest.id,
        workerId: worker.id,
      });

      const publicKey = getActivePublicKey();
      if (props.user?.publicKey === undefined) throw new Error('publicKey is not found');
      if (props.user.publicKey !== publicKey) throw new Error('publicKey is not match');
      const symbolAccount = new AccountUser(publicKey, new NetworkSymbol().networkType);
      const signedTransaction = await symbolAccount.signToTransactionBySSS(contractTransaction.transaction);

      await questApi.putQuestApproval({
        questId: props.quest.id,
        workerId: worker.id,
        putQuestApprovalRequest: {
          transactionHash: signedTransaction.hash,
        },
      });

      [setIsOpenDone, setIsOpenQuestModal].map((fc) => fc(false));
      props.onSubmitWorkerApproval();
    } catch (err) {
      if (err instanceof Error) {
        alert(err.message);
      } else {
        alert('System Error');
      }
      throw new Error();
    }
  };

  const handleDeliverApply = async (quest: Quest): Promise<void> => {
    const worker = quest.workers.find((e) => e.userId === props.user?.id);
    if (!worker) throw new Error('worker is not found');
    await questApi
      .postQuestWorkerCompletion({
        questId: props.quest.id,
        workerId: worker.id,
      })
      .then(() => {
        [setIsOpenDone, setIsOpenQuestModal].map((fc) => fc(false));
        alert('Deliver applied');
        props.onSubmitWorkerDeliverApply();
      })
      .catch(() => {
        alert('System Error. Please try again later. An error will also occur if the delivery date has passed.');
      });
  };

  return (
    <>
      <CardMedia quest={props.quest} onClick={handleClickQuestCard} />
      <ModalCenter isOpen={isOpenQuestModal} onClose={handleCloseQuestModal}>
        <QuestInfoCard
          quest={props.quest}
          hasPublicKey={!!props.user?.publicKey}
          isJoined={!!props.quest?.workers.find((e) => e.userId === props.user?.id)}
          isOwner={props.quest.owner?.id === props.user?.id}
          onClickProfile={handleClickUserIcon}
          onClickRequest={handleClickProposal}
          onClose={handleCloseQuestModal}
          onClickWorkerApproval={handleApprovalWorker}
          onClickDeliverApply={handleDeliverApply}
        />
      </ModalCenter>
      <ModalBottom isOpen={Boolean(modalElement)} onClose={handleCloseModal}>
        {modalElement}
      </ModalBottom>
      <ModalCenter isOpen={isOpenDone} onClose={handleCloseDoneModal}>
        <LottieDone message='Proposal submitted!!' />
      </ModalCenter>
    </>
  );
}
