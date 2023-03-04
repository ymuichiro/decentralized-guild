import Progress from '@/components/atom/Progress';
import QuestCreateField from '@/components/organisms/QuestCreateField';
import TemplateWithHeader from '@/components/templates/TemplateWIthHeader';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { userApi } from '@/services/InitOas';
import paths from '@/services/Navigaion';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { getServerSession, type DefaultUser } from 'next-auth';
import Link from 'next/link';
import type { GetServerSidePropsContext, GetServerSidePropsResult } from 'next/types';
import useSWR from 'swr';

interface P {
  user: DefaultUser;
}

export default function QuestCreate(props: P): JSX.Element {
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
          Create a Quest
        </Typography>
        <Collapse in={!user.publicKey}>
          <Typography color='textSecondary' component='p' textAlign='left' variant='body1'>
            To register a quest, you must register a public key. Please go to My Page to set it up.
          </Typography>
          <div style={{ margin: '20px 0 100px' }}>
            <Button LinkComponent={Link} href={paths.account.publicKey.href} style={{ maxWidth: '300px' }}>
              My Page
            </Button>
          </div>
        </Collapse>
        <Collapse in={!!user.publicKey}>
          <Typography color='textSecondary' component='p' textAlign='left' variant='body1'>
            Register a task that you want to ask someone to do. To create a task, you need to register a PublicKey from
            My Page.
          </Typography>
          <div style={{ margin: '20px 0 100px' }}>
            <QuestCreateField edit={false} quest={undefined} />
          </div>
        </Collapse>
      </Container>
    </TemplateWithHeader>
  );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<P>> {
  const session = await getServerSession(ctx.req, ctx.res, authOptions);

  if (!session) {
    return {
      redirect: {
        destination: paths.auth.signin.href,
        permanent: false,
      },
    };
  }

  return {
    props: {
      user: session.user,
    },
  };
}
