import LottieDone from '@/components/atom/Done';
import ModalCenter from '@/components/atom/ModalCenter';
import DynamicForm from '@/components/moleculs/DynamicForm';
import { questApi } from '@/services/InitOas';
import paths from '@/services/Navigaion';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs, { type Dayjs } from 'dayjs';
import { useRouter } from 'next/router';
import { ChainTypeEnum, type ErrorContext, type Reward } from 'oas/types';
import { useEffect, useState, type FormEvent } from 'react';

interface QuestCreateFieldProps {
  edit: boolean;
  quest?: {
    id: string;
    title: string;
    description: string;
    deadline: Date;
    reward: Reward[];
  };
}

const DEFAULT_REWARD: Reward = {
  amount: 0,
  chain: 'XYM',
  currencyId: process.env.NEXT_PUBLIC_SYMBOL_CURRENCY_MOSAIC_ID,
};

export default function QuestCreateField(props: QuestCreateFieldProps): JSX.Element {
  const [title, setTitle] = useState<string>(props.quest?.title ?? '');
  const [description, setDescription] = useState<string>(props.quest?.description ?? '');
  const [deadline, setDeadline] = useState<Date>(props.quest?.deadline ?? dayjs().add(1, 'weeks').toDate());
  const [rewards, setRewards] = useState<Reward[]>(props.quest?.reward ?? [DEFAULT_REWARD]);
  const [isOpenDoneModal, setIsOpenDoneModal] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    let mounted = true;
    if (isOpenDoneModal) {
      setTimeout(() => {
        if (mounted) setIsOpenDoneModal(false);
        if (mounted) router.push(paths.quest.dashboard.href);
      }, 3000);
    }
    return () => {
      mounted = false;
    };
  }, [isOpenDoneModal]);

  const handleCloseDoneModal = () => {
    setIsOpenDoneModal(false);
    router.push(paths.quest.dashboard.href);
  };

  const handleOnChangeChainType = (index: number, value: ChainTypeEnum) => {
    const newRewards = [...rewards];
    newRewards[index].chain = value;
    setRewards(newRewards);
  };

  const handleOnChangeTokenId = (index: number, value: string) => {
    const newRewards = [...rewards];
    newRewards[index].currencyId = value;
    setRewards(newRewards);
  };

  const handleOnChangeAmount = (index: number, value: number) => {
    const newRewards = [...rewards];
    newRewards[index].amount = value;
    setRewards(newRewards);
  };

  const handleOnChangeDeadline = (date: Dayjs | null) => {
    if (date !== null) {
      setDeadline(date?.toDate());
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (props.edit && props.quest) {
      questApi
        .putQuest({
          questId: props.quest.id,
          questUpdateRequest: {
            title: title,
            description: description,
            deadline: deadline,
            reward: rewards[0],
          },
        })
        .then(() => setIsOpenDoneModal(true))
        .catch((err: ErrorContext) => alert(err.response?.status === 400 ? 'invalid input' : 'failed'));
    } else {
      questApi
        .postQuest({
          questUpdateRequest: {
            title: title,
            description: description,
            deadline: deadline,
            reward: rewards[0],
          },
        })
        .then(() => setIsOpenDoneModal(true))
        .catch((err: ErrorContext) => alert(err.response?.status === 400 ? 'invalid input' : 'failed'));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
        <TextField
          value={title}
          onChange={(e) => setTitle(e.currentTarget.value)}
          placeholder='input a overview'
          label='title'
          required={true}
          InputLabelProps={{
            shrink: true,
          }}
        />

        <TextField
          value={description}
          onChange={(e) => setDescription(e.currentTarget.value)}
          placeholder='Please describe in as much detail as possible what you would like to request. It is recommended that you clearly state the conditions of accomplishment, the nature of the reward, and the deadline.'
          label='description'
          multiline
          minRows={10}
          maxRows={15}
          required={true}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <DynamicForm
          items={rewards}
          chainTypes={[ChainTypeEnum.Xym]}
          tokenIdList={[{ title: 'XYM', value: process.env.NEXT_PUBLIC_SYMBOL_CURRENCY_MOSAIC_ID }]}
          onChangeAmount={handleOnChangeAmount}
          onChangeChainType={handleOnChangeChainType}
          onChangeTokenId={handleOnChangeTokenId}
        />
        <DateTimePicker
          label='deadline'
          ampm={false}
          value={dayjs(deadline)}
          disablePast
          views={['year', 'month', 'day', 'hours', 'hours', 'minutes']}
          format='YYYY/MM/DD HH:mm'
          onChange={handleOnChangeDeadline}
        />
        <Button color='primary' type='submit' fullWidth style={{ marginTop: '1rem', maxWidth: '600px' }}>
          Submit
        </Button>
        <ModalCenter isOpen={isOpenDoneModal} onClose={handleCloseDoneModal}>
          <LottieDone message='quest created!!' />
        </ModalCenter>
      </div>
    </form>
  );
}
