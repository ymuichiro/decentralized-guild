import AppLogo from '@/assets/logos/app-logo-dark.webp';
import Template from '@/components/templates/Template';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import paths from '@/services/Navigaion';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { getServerSession } from 'next-auth/next';
import { signOut } from 'next-auth/react';
import Image from 'next/image';
import type { GetServerSidePropsContext } from 'next/types';

export default function SignOut() {
  const handleSignOut = () => {
    signOut({ callbackUrl: '/' });
  };

  return (
    <Template title='SignOut'>
      <div className='center' style={{ marginTop: '10vh', flexDirection: 'column' }}>
        <Fade in={true} timeout={{ enter: 3000 }}>
          <Image src={AppLogo} alt='Decentralized Guild Application Logo' width={200} height={200} />
        </Fade>
        {
          <Card elevation={1} style={{ width: '90%', maxWidth: '250px' }}>
            <CardContent style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <Typography variant='h6' align='center'>
                SignOut
              </Typography>
              <Divider style={{ width: '100%' }} />
              <Typography variant='caption' color='textSecondary' align='center'>
                Are you sure you want to sign out?
              </Typography>
              <Button color='error' onClick={handleSignOut}>
                Sign Out
              </Button>
            </CardContent>
          </Card>
        }
      </div>
    </Template>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions);
  if (!session) {
    return { redirect: { destination: paths.auth.signin.href } };
  }

  return {
    props: {},
  };
}
