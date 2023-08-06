import DiscordIcon from '@/assets/icons/discord.svg';
import GithubIcon from '@/assets/icons/github.svg';
import GoogleIcon from '@/assets/icons/google.svg';
import TwitterIcon from '@/assets/icons/twitter.svg';
import AppLogo from '@/assets/logos/app-logo-dark.webp';
import Link from '@/components/atom/Link';
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
        return GoogleIcon;
      case 'GitHub':
        return GithubIcon;
      case 'Twitter':
        return TwitterIcon;
      case 'Discord':
        return DiscordIcon;
      default:
        return GithubIcon;
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
                console.log(provider);
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
              <div>
                <Link href={paths.terms.privacy.href} style={{ display: 'block' }}>
                  Privacy Policy
                </Link>
                <Link href={paths.terms.terms.href} style={{ display: 'block' }}>
                  Terms of Service
                </Link>
              </div>
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
