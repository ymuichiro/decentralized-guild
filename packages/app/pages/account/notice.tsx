import Progress from '@/components/atom/Progress';
import NoticeField from '@/components/organisms/NoticeField';
import TemplateWithHeader from '@/components/templates/TemplateWIthHeader';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { userApi } from '@/services/InitOas';
import paths from '@/services/Navigaion';
import Container from '@mui/material/Container';
import type { DefaultUser } from 'next-auth';
import { getServerSession } from 'next-auth/next';
import type { GetServerSidePropsContext, GetServerSidePropsResult } from 'next/types';
import useSWR from 'swr';

interface P {
  user: DefaultUser;
}

export default function AccountNotice(props: P): JSX.Element {
  const { data: user, error, isLoading } = useSWR(props.user.id, async (userId) => userApi.getUser({ userId }));

  if (error) throw new Error(error);
  if (!user || isLoading) return <Progress fullScreen />;

  return (
    <TemplateWithHeader title='Notice' user={user}>
      <Container maxWidth='lg'>
        <NoticeField />
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
