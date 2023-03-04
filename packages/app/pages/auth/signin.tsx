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
import { getProviders, signIn } from 'next-auth/react';
import Image from 'next/image';
import type { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next/types';

export default function SignIn({ providers }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const logoSwitch = (providerName: string) => {
    switch (providerName) {
      case 'Google':
        return 'https://authjs.dev/img/providers/google.svg';
      case 'GitHub':
        return 'https://authjs.dev/img/providers/github.svg';
      default:
        return 'https://authjs.dev/img/providers/github.svg';
    }
  };

  return (
    <Template title='SignIn'>
      <div className='center' style={{ marginTop: '10vh', flexDirection: 'column' }}>
        <Fade in={true} timeout={{ enter: 3000 }}>
          <Image src={AppLogo} alt='Decentralized Guild Application Logo' width={200} height={200} />
        </Fade>
        {
          <Card elevation={1} style={{ width: '90%', maxWidth: '250px' }}>
            <CardContent style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <Typography variant='h6' align='center'>
                SignIn
              </Typography>
              <Divider style={{ width: '100%' }} />
              {Object.values(providers).map((provider) => {
                if (provider.name === 'Credentials')
                  // --- for test ---
                  return (
                    <div key={provider.name} style={{ display: 'flex', justifyContent: 'space-around' }}>
                      <Button
                        color='primary'
                        onClick={() => signIn(provider.id, { callbackUrl: paths.quest.dashboard.href, token: 'aaa' })}
                      >
                        Test AAA
                      </Button>
                      <Button
                        color='primary'
                        onClick={() => signIn(provider.id, { callbackUrl: paths.quest.dashboard.href, token: 'bbb' })}
                      >
                        Test BBB
                      </Button>
                    </div>
                  );
                return (
                  <Button
                    key={provider.name + 'bbb'}
                    style={{ justifyContent: 'flex-start' }}
                    color='primary'
                    onClick={() => signIn(provider.id, { callbackUrl: paths.quest.dashboard.href })}
                  >
                    <Image src={logoSwitch(provider.name)} alt={provider.name} width={20} height={20} />
                    Sign in with {provider.name}
                  </Button>
                );
              })}
            </CardContent>
          </Card>
        }
      </div>
    </Template>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions);
  if (session) {
    return { redirect: { destination: paths.quest.dashboard.href } };
  }

  const providers = await getProviders();

  return {
    props: { providers: providers ?? [] },
  };
}
