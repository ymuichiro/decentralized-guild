import Progress from '@/components/atom/Progress';
import TemplateWithHeader from '@/components/templates/TemplateWIthHeader';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { userApi } from '@/services/InitOas';
import paths from '@/services/Navigaion';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { DefaultUser, getServerSession } from 'next-auth';
import Link from 'next/link';
import type { GetServerSidePropsContext, GetServerSidePropsResult } from 'next/types';
import useSWR from 'swr';

interface P {
  user: DefaultUser;
}

export default function AccountConfigPage(props: P): JSX.Element {
  const { data: user, error, isLoading } = useSWR(props.user.id, async (userId) => userApi.getUser({ userId }));

  if (error) throw new Error(error);
  if (!user || isLoading) return <Progress fullScreen />;

  return (
    <TemplateWithHeader user={user} title='Account Settings'>
      <Container maxWidth='md' style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
        {[
          { title: 'Account', description: 'update account info', href: paths.account.info.href },
          { title: 'Public Key', description: 'update public key', href: paths.account.publicKey.href },
          { title: 'Sign Out', description: 'sign out your account', href: paths.auth.signout.href },
          { title: 'Account Delete', description: 'delete your account', href: paths.account.delete.href },
        ].map((item, index) => {
          return (
            <Button
              variant='outlined'
              key={index}
              LinkComponent={Link}
              href={item.href}
              style={{
                display: 'flex',
                justifyContent: 'flex-start',
                flexWrap: 'wrap',
                paddingTop: '1rem',
                paddingBottom: '1rem',
                width: '300px',
                flexGrow: 1,
              }}
            >
              <Typography variant='h6' style={{ flexGrow: 1, minWidth: '250px' }}>
                {item.title}
              </Typography>
              <Typography style={{ minWidth: '200px' }}>{item.description}</Typography>
            </Button>
          );
        })}
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
