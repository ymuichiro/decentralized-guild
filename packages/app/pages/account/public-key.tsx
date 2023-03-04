import Check from '@/assets/backgrounds/check.json';
import { CopyIcon } from '@/components/atom/AppIconButton';
import Progress from '@/components/atom/Progress';
import TemplateWithHeader from '@/components/templates/TemplateWIthHeader';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { AccountSystem } from '@/services/AccountSystem';
import { AccountUser } from '@/services/AccountUser';
import { userApi } from '@/services/InitOas';
import paths from '@/services/Navigaion';
import { NetworkSymbol } from '@/services/NetworkSymbol';
import { TextService } from '@/services/TextUtil';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Icon from '@mui/material/Icon';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Lottie from 'lottie-react';
import type { DefaultUser } from 'next-auth/core/types';
import { getServerSession } from 'next-auth/next';
import { useRouter } from 'next/router';
import type { GetServerSidePropsContext, GetServerSidePropsResult } from 'next/types';
import { FormEvent, useState } from 'react';
import useSWR from 'swr';
import { EncryptedMessage } from 'symbol-sdk/dist/src/model/message';

interface P {
  user: DefaultUser;
}

interface InitPublicKeyFieldProps {
  onGenerateNew: () => void;
  onImport: (publicKe: string) => void;
}

function ViewPublicKeyField(props: { publicKey: string }): JSX.Element {
  const [isCopied, setCopied] = useState<boolean>(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      global.navigator.clipboard
        .writeText(props.publicKey)
        .then(() => setCopied(false))
        .catch(() => alert('Copy failed.'));
    }, 2000);
  };

  return (
    <div style={{ marginTop: '3rem' }}>
      <Typography variant='h6' gutterBottom>
        Current PublicKey
      </Typography>
      <Typography color='textSecondary' component='p' textAlign='left' variant='body1'>
        Registered Public Keys
      </Typography>
      <TextField
        name='publicKey'
        label='PublicKey'
        defaultValue={props.publicKey}
        disabled
        fullWidth
        style={{ marginTop: '1rem' }}
        InputProps={{
          endAdornment: (
            <InputAdornment position='end' style={{ display: 'flex', justifyContent: 'center', width: '2rem' }}>
              {isCopied ? (
                <Icon fontSize='medium'>
                  <Lottie animationData={Check} loop={false} />
                </Icon>
              ) : (
                <CopyIcon onClick={handleCopy} />
              )}
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
}

function InitPublicKeyField(props: InitPublicKeyFieldProps): JSX.Element {
  const onSubmitAccountPublicKey = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const publicKey: string = (e.target as any).elements['publicKey'].value;
    props.onImport(publicKey);
  };

  return (
    <>
      <div style={{ marginTop: '3rem' }}>
        <Typography variant='h6' gutterBottom>
          Generate New
        </Typography>
        <Typography color='textSecondary' component='p' textAlign='left' variant='body1'>
          To register a new blockchain account.
        </Typography>
        <Button onClick={props.onGenerateNew} style={{ marginTop: '1rem', width: '100%', maxWidth: '300px' }}>
          Generate
        </Button>
      </div>
      <div style={{ marginTop: '3rem' }}>
        <Typography variant='h6' gutterBottom>
          Import Account
        </Typography>
        <Typography color='textSecondary' component='p' textAlign='left' variant='body1'>
          To register an existing blockchain account.
        </Typography>
        <form onSubmit={onSubmitAccountPublicKey}>
          <TextField
            required
            name='publicKey'
            label='Enter the public key to register'
            defaultValue={''}
            fullWidth
            style={{ marginTop: '1rem' }}
          />
          <Button type='submit' style={{ marginTop: '1rem', width: '100%', maxWidth: '300px' }}>
            Import
          </Button>
        </form>
      </div>
    </>
  );
}

export default function AccountPublicKey(props: P): JSX.Element {
  const { data: user, error, isLoading } = useSWR(props.user.id, async (userId) => userApi.getUser({ userId }));
  const router = useRouter();

  if (error) throw new Error(error);
  if (!user || isLoading) return <Progress fullScreen />;

  const handleGenerateNew = async () => {
    const network = new NetworkSymbol();
    const newAccount = AccountUser.generateNewAccount(network.networkType);
    const userAccount = new AccountUser(newAccount.publicKey, network.networkType);
    const systemAccount: AccountSystem = new AccountSystem(network.networkType);
    const textData: string[] = [
      'Symbol Account',
      'This data cannot be restored. Please keep it in a safe place.',
      'Do not share your private key with anyone.\n',
      `Address: ${newAccount.address.plain()}`,
      `PublicKey: ${newAccount.publicKey}`,
      `PrivateKey: ${newAccount.privateKey}`,
    ];
    TextService.download(`symbol-account-${newAccount.address.plain()}.txt`, textData.join('\n'));
    const encryptedMessage = userAccount.createEncryptedMessage(newAccount, systemAccount);
    userApi
      .postUserPublicKey({
        userId: props.user.id,
        postUserVerifyRequestBody: {
          publicKey: newAccount.publicKey,
          encryptedMessage: encryptedMessage.payload,
        },
      })
      .then(() => router.reload())
      .catch(() => alert('Error: public key is not updated.'));
  };

  const handleImport = async (publicKey: string) => {
    const network = new NetworkSymbol();
    const userAccount: AccountUser = new AccountUser(publicKey, network.networkType);
    const systemAccount: AccountSystem = new AccountSystem(network.networkType);
    const encryptedMessage: EncryptedMessage = await userAccount.createEncryptedMessageBySSS(systemAccount);
    userApi
      .postUserPublicKey({
        userId: props.user.id,
        postUserVerifyRequestBody: {
          publicKey: publicKey,
          encryptedMessage: encryptedMessage.payload,
        },
      })
      .then(() => router.reload())
      .catch(() => alert('Error: public key is not updated.'));
  };

  return (
    <TemplateWithHeader user={user} title='Account PublicKey'>
      <Container maxWidth='md'>
        <Typography
          color='textPrimary'
          component='h1'
          textAlign='left'
          gutterBottom
          sx={{ typography: { xs: 'h5', sm: 'h4' } }}
        >
          Account PublicKey
        </Typography>
        <Typography color='textSecondary' component='p' textAlign='left' variant='body1'>
          The public key verifies the identity of your account. It must be a valid public key on the distributed ledger
          of the blockchain &apos;Symbol&apos;. Once a public key is registered, it cannot be unlinked.
        </Typography>
        {user.publicKey ? (
          <ViewPublicKeyField publicKey={user.publicKey} />
        ) : (
          <InitPublicKeyField onImport={handleImport} onGenerateNew={handleGenerateNew} />
        )}
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
