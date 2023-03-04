import { CloseIcon } from '@/components/atom/AppIconButton';
import Link from '@/components/atom/Link';
import ModalCenter from '@/components/atom/ModalCenter';
import Progress from '@/components/atom/Progress';
import SubscribeServiceWorker from '@/components/moleculs/SubscribeServiceWorker';
import QuestDashboardContainer from '@/components/organisms/QuestDashboardContainer';
import TemplateWithHeader from '@/components/templates/TemplateWIthHeader';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { userApi } from '@/services/InitOas';
import paths from '@/services/Navigaion';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { getServerSession, type DefaultUser } from 'next-auth';
import type { GetServerSidePropsContext, GetServerSidePropsResult } from 'next/types';
import { useEffect, useState } from 'react';
import useSWR from 'swr';

interface P {
  user: DefaultUser;
}

export default function QuestDashboard(props: P): JSX.Element {
  const { data: user, error, isLoading } = useSWR(props.user.id, async (userId) => userApi.getUser({ userId }));
  const [isOpenAnnounceModal, setIsOpenAnnounceModal] = useState<boolean>(false);

  useEffect(() => {
    if (user && !user.publicKey) {
      setIsOpenAnnounceModal(true);
    }
  }, [user]);

  const handleCloseModal = () => {
    setIsOpenAnnounceModal(false);
  };

  if (error) throw new Error(error);
  if (!user || isLoading) return <Progress fullScreen />;

  return (
    <TemplateWithHeader title='Dashboard' user={user}>
      <SubscribeServiceWorker user={user} />
      <Container maxWidth='lg'>
        <QuestDashboardContainer user={user} />
      </Container>
      <ModalCenter isOpen={isOpenAnnounceModal} onClose={handleCloseModal}>
        <Card
          className='scroll-bar-off'
          style={{ maxWidth: '800px', width: '90vw', minHeight: '30svh', maxHeight: '80svh', overflowY: 'auto' }}
        >
          <div style={{ position: 'relative' }}>
            <CloseIcon style={{ position: 'absolute', top: 10, right: 10 }} onClick={handleCloseModal} />
          </div>
          <CardContent>
            <Typography gutterBottom variant='h2' style={{ fontSize: '1.2rem', lineHeight: '3rem' }}>
              Announce
            </Typography>
            <Typography gutterBottom>
              Welcome to the Decentralized Guild. In order to participate in the quest, you must first link your
              blockchain account to your account.
            </Typography>
            <Link href={paths.account.publicKey.href} style={{ textAlign: 'right', display: 'block' }}>
              &gt;&gt;&nbsp;Setup
            </Link>
            <Typography gutterBottom variant='h3' style={{ fontSize: '1.0rem', lineHeight: '3rem' }}>
              Notes
            </Typography>
            <List>
              {[
                "This application is currently in test release. It may contain bugs. If you find a bug, please report it to the developer's.",
                'This application is published as OSS. Anyone can set up their own space except me.',
                'Your actions on this application are recorded in the blockchain. Under no circumstances can the record be deleted even if you delete your account.',
                'You must keep the private key of your blockchain account yourself. Lost private keys cannot be recovered or reissued under any circumstances.',
              ].map((text, index) => (
                <ListItem key={index} disableGutters>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
            <Button onClick={handleCloseModal} variant='outlined' fullWidth style={{ marginTop: '1rem' }}>
              CLOSE
            </Button>
          </CardContent>
        </Card>
      </ModalCenter>
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
