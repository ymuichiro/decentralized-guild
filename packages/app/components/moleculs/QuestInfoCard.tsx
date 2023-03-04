import { CloseIcon } from '@/components/atom/AppIconButton';
import MarkdownParser from '@/components/atom/MarkdownParser';
import UserProfile from '@/components/moleculs/UserProfile';
import { questApi } from '@/services/InitOas';
import Button from '@mui/material/Button';
import ButtonBase from '@mui/material/ButtonBase';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import CircularProgress from '@mui/material/CircularProgress';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { QuestWorkerStatusEnum, type Quest, type QuestStatusEnum, type QuestWorker, type User } from 'oas/types';
import { Dispatch, ReactNode, SetStateAction, useState } from 'react';

const DEFAULT_IMAGE =
  'data:image/webp;base64,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';

interface Props {
  quest: Quest;
  hasPublicKey: boolean;
  isOwner: boolean;
  isJoined: boolean;
  onClose: () => void;
  onClickProfile: (user: User) => void;
  /** worker による参加申請 */
  onClickRequest?: (quest: Quest) => void;
  /** worker による納品後の検収要求 */
  onClickDeliverApply?: (quest: Quest) => void;
  /**  owner による参加申請の承認 */
  onClickWorkerApproval?: (worker: QuestWorker) => Promise<void>;
}

interface QuestWorkerProps {
  quest: Quest;
  worker?: QuestWorker;
  isLoading: boolean;
  isOwner: boolean;
  onClickWorkerApproval?: (worker: QuestWorker) => Promise<void>;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

function isQuestActionButtonDisabled(status: QuestStatusEnum, hasPublicKey: boolean, isJoined: boolean): boolean {
  if (!hasPublicKey) return true;
  if (status === 'CANCELLED') return true;
  if (status === 'COMPLETED') return true;
  if (status === 'WANTED' && isJoined) return true;
  if (status === 'WORKING' && !isJoined) return true;
  return false;
}

function getQuestActionButtonText(status: QuestStatusEnum, hasPublicKey: boolean, isJoined: boolean): string {
  if (!hasPublicKey) return 'Your public key is not registered';
  if (status === 'CANCELLED') return 'CANCELLED';
  if (status === 'COMPLETED') return 'COMPLETED';
  if (status === 'WANTED' && isJoined) return 'Already participated';
  if (status === 'WANTED') return 'REQUEST';
  if (status === 'WORKING' && isJoined) return 'Submit the deliverables';
  if (status === 'WORKING') return 'REQUESTING';
  return 'NOT AVAILABLE';
}

/**
 * Quest info
 */
export default function QuestInfoCard(props: Props): JSX.Element {
  const [isLoadingApproval, setIsLoadingApproval] = useState<boolean>(false);

  const handleClickRequest = () => {
    if (props.quest.status === 'WANTED') {
      props.onClickRequest && props.onClickRequest(props.quest);
    } else if (props.quest.status === 'WORKING') {
      props.onClickDeliverApply && props.onClickDeliverApply(props.quest);
    }
  };

  const handleClickProfile = () => {
    if (props.quest.owner && props.onClickProfile) {
      props.onClickProfile(props.quest.owner);
    }
  };

  return (
    <div>
      <Card
        className='scroll-bar-off'
        style={{
          width: '90vw',
          maxWidth: '800px',
          overflowY: 'auto',
          height: '80svh',
          position: 'relative',
        }}
      >
        <div style={{ position: 'absolute', top: '10px', right: '10px', zIndex: 9999 }}>
          <CloseIcon onClick={props.onClose} />
        </div>
        <div style={{ height: '20svh', width: '100%', position: 'relative' }}>
          <Image alt='quest image' src={DEFAULT_IMAGE} fill style={{ objectFit: 'cover' }} />
        </div>
        <CardContent>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <ButtonBase onClick={handleClickProfile}>
              <UserProfile
                isEditable={false}
                isNameHidden={true}
                profile={{ name: props.quest.owner?.name, image: props.quest.owner?.image }}
              />
            </ButtonBase>
            <Stack style={{ width: '100%' }}>
              <Stack direction={'row'} alignItems={'center'}>
                <Typography variant='body1' style={{ flexGrow: 1 }}>
                  {props.quest.createdAt.toLocaleDateString()}
                </Typography>
                <Chip
                  label={props.quest.status}
                  variant='outlined'
                  color={
                    props.quest.status === 'WANTED'
                      ? 'success'
                      : props.quest.status === 'WORKING'
                      ? 'secondary'
                      : 'default'
                  }
                />
              </Stack>
              <Typography variant='h6' style={{ overflowWrap: 'break-word' }}>
                {props.quest.title}
              </Typography>
            </Stack>
          </div>
          {props.quest.reward && (
            <div style={{ marginTop: '1rem' }}>
              <Typography variant='h6'>Rewards</Typography>
              <List>
                <ListItem>
                  <ListItemText
                    primary={`${props.quest.reward.chain} ( ${props.quest.reward.currencyId} )`}
                    secondary={props.quest.reward.amount}
                  />
                </ListItem>
              </List>
            </div>
          )}

          {props.isOwner && (
            <div style={{ marginTop: '1rem' }}>
              <Typography variant='h6'>Workers</Typography>
              <List>
                {props.quest.status === 'WANTED' &&
                  props.quest.workers.map((worker, index) => (
                    <QuestWorkers
                      quest={props.quest}
                      key={index}
                      worker={worker}
                      isLoading={isLoadingApproval}
                      setIsLoading={setIsLoadingApproval}
                      isOwner={props.isOwner}
                      onClickWorkerApproval={props.onClickWorkerApproval}
                    />
                  ))}
                {props.quest.status !== 'WANTED' && (
                  <QuestWorkers
                    quest={props.quest}
                    worker={props.quest.workers.find((w) => w.status === QuestWorkerStatusEnum.Accepted)}
                    isLoading={isLoadingApproval}
                    isOwner={props.isOwner}
                    setIsLoading={setIsLoadingApproval}
                    onClickWorkerApproval={props.onClickWorkerApproval}
                  />
                )}
              </List>
            </div>
          )}
          <MarkdownParser markdownText={props.quest.description} containerStyle={{ marginTop: '1rem' }} />
        </CardContent>
      </Card>
      {props.isOwner || (
        <div style={{ backgroundColor: 'black' }}>
          <Button
            color='primary'
            fullWidth
            disabled={isQuestActionButtonDisabled(props.quest.status, props.hasPublicKey, props.isJoined)}
            onClick={handleClickRequest}
            style={{ marginTop: '15px' }}
          >
            {getQuestActionButtonText(props.quest.status, props.hasPublicKey, props.isJoined)}
          </Button>
        </div>
      )}
    </div>
  );
}

function QuestWorkers(props: QuestWorkerProps): JSX.Element {
  const worker = props.worker;
  if (worker === undefined) {
    return <Typography>Error</Typography>;
  }

  const handleClickApprov = () => {
    if (props.onClickWorkerApproval && !props.isLoading) {
      props.setIsLoading(true);
      props
        .onClickWorkerApproval(worker)
        .then(() => alert('Approved worker'))
        .catch(() => alert("Couldn't approve worker"))
        .finally(() => props.setIsLoading(false));
    }
  };

  const handleClickPayFee = () => {
    props.setIsLoading(true);
    const isConfirmed = window.confirm('Are you sure to pay the fee?');
    if (!isConfirmed) return;
    questApi
      .postQuestWorkerReward({
        questId: props.quest.id,
        workerId: worker.id,
      })
      .then(() => alert('Paid the fee'))
      .catch(() => alert("System Error: Couldn't pay the fee. Please try again later."))
      .finally(() => props.setIsLoading(false));
  };

  const ListContainer = (p: { children: ReactNode }): JSX.Element => (
    <ListItem divider>
      <ListItemText primary={worker.worker?.name || 'unknown'} secondary={worker.status} />
      {p.children}
    </ListItem>
  );

  if (props.isLoading) {
    return (
      <ListContainer>
        <Button variant='outlined' style={{ minWidth: '8rem', minHeight: '2.2rem' }}>
          <CircularProgress size={15} />
        </Button>
      </ListContainer>
    );
  }
  if (worker.status === QuestWorkerStatusEnum.Applying) {
    return (
      <ListContainer>
        <Button variant='outlined' onClick={handleClickApprov} style={{ minWidth: '8rem', minHeight: '2.2rem' }}>
          Approval
        </Button>
      </ListContainer>
    );
  }
  if (worker.status === QuestWorkerStatusEnum.Accepted) {
    return (
      <ListContainer>
        <Button variant='outlined' onClick={handleClickPayFee} style={{ minWidth: '8rem', minHeight: '2.2rem' }}>
          Pay a fee
        </Button>
      </ListContainer>
    );
  }
  if (worker.status === QuestWorkerStatusEnum.Completed) {
    return (
      <ListContainer>
        <Button disabled variant='outlined' style={{ minWidth: '8rem', minHeight: '2.2rem' }}>
          Completed
        </Button>
      </ListContainer>
    );
  }
  return (
    <ListContainer>
      <Button disabled variant='outlined' style={{ minWidth: '8rem', minHeight: '2.2rem' }}>
        Rejected
      </Button>
    </ListContainer>
  );
}
