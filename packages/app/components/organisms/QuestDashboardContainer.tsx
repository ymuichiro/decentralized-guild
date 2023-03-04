import Progress from '@/components/atom/Progress';
import QuestSearch from '@/components/moleculs/QuestSearch';
import QuestCardContiner from '@/components/organisms/QuestCardContiner';
import { questApi } from '@/services/InitOas';
import paths from '@/services/Navigaion';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import type { GetQuestsResponseInner, User } from 'oas/types';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import useSWRInfinite from 'swr/infinite';

interface P {
  user?: User | null;
}

interface FetchArgs {
  offset: number;
  cacheKey: string;
}

/**
 * クエストをクリックすると詳細表示画面を描画する。
 * 案件を受ける際の画面はモーダル内で画面切り替えを実装
 * ユーザーアイコンをクリックすると相手の情報を表示する
 */
export default function QuestDashboardContainer(props: P): JSX.Element {
  const { ref, inView } = useInView();
  const [keyword, setKeyword] = useState<string>('');
  const [isRequest, setIsRequest] = useState<boolean>(false);
  const [isWorking, setIsWorking] = useState<boolean>(false);

  const getKeys = (index: number, prev: GetQuestsResponseInner): FetchArgs | null => {
    if (prev && prev.pageNation.current >= prev.pageNation.last) return null;
    return { offset: index, cacheKey: paths.quest.dashboard.href };
  };

  const fetcher = (args: FetchArgs) => {
    return questApi.getQuests({
      offset: args.offset,
      keyword,
      requesterPublicKey: isRequest ? props.user?.publicKey : undefined,
      workerPublicKey: isWorking ? props.user?.publicKey : undefined,
    });
  };
  const { data, setSize, isLoading, isValidating, error, mutate } = useSWRInfinite(getKeys, fetcher);

  useEffect(() => {
    mutate();
  }, [isRequest, isWorking]);

  useEffect(() => {
    if (data && data.length !== 0 && inView && !isValidating) {
      const lastIndex: number = data.length - 1;
      if (data && data[lastIndex].pageNation.current <= data[lastIndex].pageNation.last) {
        setSize((current) => current + 1);
      }
    }
  }, [inView]);

  const handleSubmitSearch = () => mutate();

  const handleSubmitProposal = async (data: { proposal: string; questId: string }) => {
    await questApi.postQuestWorker({
      questId: data.questId,
      postQuestWorkerRequestBody: { proposal: data.proposal },
    });
    mutate();
  };

  const handleMutateOnly = () => mutate();
  const handleChangeIsRequesting = () => {
    if (!isRequest && !isWorking) {
      setIsRequest(true), setIsWorking(false);
    } else if (isRequest) {
      setIsRequest(false), setIsWorking(false);
    } else {
      setIsRequest(true), setIsWorking(false);
    }
  };
  const handleChangeIsWorking = () => {
    if (!isRequest && !isWorking) {
      setIsRequest(false), setIsWorking(true);
    } else if (isWorking) {
      setIsRequest(false), setIsWorking(false);
    } else {
      setIsRequest(false), setIsWorking(true);
    }
  };

  if (error) throw new Error(error);
  if (!data || isLoading) return <Progress />;

  return (
    <>
      <div style={{ height: '1rem' }} />
      <QuestSearch
        name='keyword'
        label='Keyword Search'
        placeholder='Search by title or text'
        value={keyword}
        onChange={setKeyword}
        onSubmit={handleSubmitSearch}
      />
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <FormControlLabel
          control={<Checkbox checked={isRequest} onChange={handleChangeIsRequesting} />}
          label={'requesting'}
        />
        <FormControlLabel
          control={<Checkbox checked={isWorking} onChange={handleChangeIsWorking} />}
          label={'working'}
        />
      </div>
      <Grid container spacing={2} style={{ marginTop: '0.5rem', marginBottom: '3rem' }}>
        {data
          .flatMap((d) => d.data)
          .map((quest, i) => {
            return (
              <Grid item key={i} xs={12} sm={6} md={4} lg={3} xl={3}>
                <QuestCardContiner
                  quest={quest}
                  user={props.user}
                  onSubmitProposal={handleSubmitProposal}
                  onSubmitWorkerApproval={handleMutateOnly}
                  onSubmitWorkerDeliverApply={handleMutateOnly}
                />
              </Grid>
            );
          })}
      </Grid>
      <div ref={ref} aria-hidden='true' />
    </>
  );
}
