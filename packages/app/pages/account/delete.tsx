import Progress from '@/components/atom/Progress';
import TemplateWithHeader from '@/components/templates/TemplateWIthHeader';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { ResponseError, userApi } from '@/services/InitOas';
import paths from '@/services/Navigaion';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import type { DefaultUser } from 'next-auth/core/types';
import { getServerSession } from 'next-auth/next';
import { signOut } from 'next-auth/react';
import type { GetServerSidePropsContext, GetServerSidePropsResult } from 'next/types';
import useSWR from 'swr';

interface P {
  user: DefaultUser;
}

export default function AccountDelete(props: P): JSX.Element {
  const { data: user, error, isLoading } = useSWR(props.user.id, async (userId) => userApi.getUser({ userId }));

  if (error) throw new Error(error);
  if (!user || isLoading) return <Progress fullScreen />;

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const input = confirm('This operation cannot be undone. Do you want to delete it?');
    if (input) {
      try {
        await userApi.deleteUser({ userId: props.user.id });
        alert('Your account has been deleted. You will be redirected to the login page.');
        signOut({ callbackUrl: paths.auth.signout.href });
      } catch (err) {
        if (err instanceof ResponseError && err.response.status === 401) {
          alert('Please login. You will be redirected to the login page.');
          signOut({ callbackUrl: paths.auth.signin.href });
        } else if (err instanceof ResponseError && err.response.status === 404) {
          alert('Your account has already been deleted. You will be redirected to the login page.');
          signOut({ callbackUrl: paths.auth.signin.href });
        } else {
          alert('Failed. Please redo.');
        }
      }
    }
  };

  return (
    <TemplateWithHeader user={user} title='Delete account'>
      <Container maxWidth='md'>
        <Typography
          color='textPrimary'
          component='h1'
          textAlign='left'
          gutterBottom
          sx={{ typography: { xs: 'h5', sm: 'h4' } }}
        >
          Account Delete
        </Typography>
        <Typography color='textSecondary' component='p' textAlign='left' variant='body1'>
          We will delete your account. Are you sure? Contract history and other information inscribed in the blockchain
          will not be deleted. Only login information will be deleted.
        </Typography>
        <Typography
          color='textPrimary'
          component='p'
          textAlign='center'
          whiteSpace='break-spaces'
          sx={{ typography: { xs: 'h6', sm: 'h5' }, marginTop: '20svh' }}
        >
          Do you want to delete your account?
        </Typography>
        <Button
          color='error'
          fullWidth
          onClick={handleSubmit}
          style={{ margin: 'auto', maxWidth: '300px', marginTop: '2rem' }}
        >
          Delete
        </Button>
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
