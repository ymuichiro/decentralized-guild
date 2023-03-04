import Progress from '@/components/atom/Progress';
import TemplateWithHeader from '@/components/templates/TemplateWIthHeader';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { userApi } from '@/services/InitOas';
import paths from '@/services/Navigaion';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import type { DefaultUser } from 'next-auth/core/types';
import { getServerSession } from 'next-auth/next';
import { useRouter } from 'next/router';
import type { GetServerSidePropsContext, GetServerSidePropsResult } from 'next/types';
import { FormEvent } from 'react';
import useSWR from 'swr';

interface P {
  user: DefaultUser;
}

export default function AccountInfo(props: P): JSX.Element {
  const { data: user, error, isLoading } = useSWR(props.user.id, async (userId) => userApi.getUser({ userId }));
  const router = useRouter();

  if (error) throw new Error(error);
  if (!user || isLoading) return <Progress fullScreen />;

  const onSubmitForm = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const elements = (e.target as any).elements;
    const name = elements['name'].value;
    try {
      await userApi.putUser({
        userId: props.user.id,
        putUserRequestBody: { name },
      });
      alert('Account name is updated.');
      router.reload();
    } catch {
      alert('Error: account name is not updated.');
    }
  };

  return (
    <TemplateWithHeader user={user} title='Account Info'>
      <Container maxWidth='md'>
        <Typography
          color='textPrimary'
          component='h1'
          textAlign='left'
          gutterBottom
          sx={{ typography: { xs: 'h5', sm: 'h4' } }}
        >
          Account Info
        </Typography>
        <Typography color='textSecondary' component='p' textAlign='left' variant='body1'>
          update your account information
        </Typography>
        <form
          onSubmit={onSubmitForm}
          style={{
            marginTop: '1rem',
            marginBottom: '5rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch',
            gap: '15px',
          }}
        >
          <TextField
            required
            name={'name'}
            label={'name'}
            defaultValue={user.name}
            inputProps={{ pattern: '^[a-zA-Z0-9\u3040-\u30FF]+$' }}
            onChange={({ currentTarget }) => {
              currentTarget.setCustomValidity(
                currentTarget.validity.patternMismatch ? 'Symbols are not available' : ''
              );
            }}
          />
          <TextField
            required
            type='email'
            disabled
            name={'email'}
            label={'email'}
            defaultValue={user.email}
            onInvalid={(e) => (e.target as any).setCustomValidity('Please enter a valid email')}
            onChange={({ currentTarget }) => {
              currentTarget.setCustomValidity(
                currentTarget.validity.patternMismatch ? 'Symbols are not available' : ''
              );
            }}
          />
          <Button type='submit'>SUBMIT</Button>
        </form>
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
