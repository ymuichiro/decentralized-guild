import Progress from '@/components/atom/Progress';
import QuestCreateField from '@/components/organisms/QuestCreateField';
import TemplateWithHeader from '@/components/templates/TemplateWIthHeader';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { userApi } from '@/services/InitOas';
import prisma from '@/services/InitPrisma';
import paths from '@/services/Navigaion';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { getServerSession, type DefaultUser } from 'next-auth';
import type { GetServerSidePropsContext, GetServerSidePropsResult } from 'next/types';
import { ChainTypeEnum, Quest, QuestStatusEnum } from 'oas/types/models';
import useSWR from 'swr';

interface P {
  user: DefaultUser;
  quest: Quest;
}

export default function QuestEditById(props: P): JSX.Element {
  const { data: user, error, isLoading } = useSWR(props.user.id, async (userId) => userApi.getUser({ userId }));

  if (error) throw new Error(error);
  if (!user || isLoading) return <Progress fullScreen />;

  return (
    <TemplateWithHeader user={user} title='Create a Quest'>
      <Container maxWidth='md' style={{ minWidth: '300px' }}>
        <Typography
          color='textPrimary'
          variant='h1'
          textAlign='left'
          gutterBottom
          sx={{ typography: { xs: 'h5', sm: 'h4' } }}
        >
          Edit a Quest
        </Typography>

        <Typography color='textSecondary' component='p' textAlign='left' variant='body1'>
          Register a task that you want to ask someone to do. To create a task, you need to register a PublicKey from My
          Page.
        </Typography>
        <div style={{ margin: '20px 0 100px' }}>
          <QuestCreateField
            edit={true}
            quest={{
              id: props.quest.id,
              title: props.quest.title,
              description: props.quest.description,
              deadline: props.quest.deadline,
              reward: props.quest.reward ? [props.quest.reward] : [],
            }}
          />
        </div>
      </Container>
    </TemplateWithHeader>
  );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<P>> {
  const session = await getServerSession(ctx.req, ctx.res, authOptions);
  const questId = ctx.params?.questId as string;

  if (!session || !questId || typeof questId !== 'string') {
    return {
      redirect: {
        destination: paths.auth.signin.href,
        permanent: false,
      },
    };
  }

  const quest = await prisma.questField.findUnique({
    where: { id: questId },
    include: {
      reward: true,
    },
  });

  if (!quest) {
    return {
      redirect: {
        destination: paths.quest.dashboard.href,
        permanent: false,
      },
    };
  }

  return {
    props: {
      user: session.user,
      quest: {
        id: quest.id,
        createdAt: quest.createdAt,
        updatedAt: quest.updatedAt,
        title: quest.title,
        description: quest.description,
        deadline: quest.deadline,
        ownerPublicKey: quest.ownerPublicKey,
        status: quest.status as QuestStatusEnum,
        workers: [],
        reward: quest.reward
          ? {
              amount: quest.reward.amount,
              chain: quest.reward.chain as ChainTypeEnum,
              currencyId: quest.reward.currencyId,
            }
          : undefined,
      },
    },
  };
}
