import spaces from '@/assets/backgrounds/blockchain.json';
import Template from '@/components/templates/Template';
import paths from '@/services/Navigaion';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Lottie from 'lottie-react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

/**
 * Application Home
 */
export default function Home(): JSX.Element {
  const { data: session } = useSession();
  const router = useRouter();

  const handleStart = () => {
    if (session) {
      return router.push(paths.quest.dashboard.href);
    }
    router.push(paths.auth.signin.href);
  };

  return (
    <Template>
      <div className='center' style={{ position: 'absolute', zIndex: 1, height: '100svh', width: '100vw' }}>
        <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
          <Typography
            component='h1'
            sx={{ whiteSpace: 'pre-wrap', textAlign: 'center', typography: { xs: 'h3', sm: 'h1', md: 'h1' } }}
          >
            Decentralized Guild
          </Typography>
          <Button color='primary' size='large' style={{ maxWidth: '90vw', minWidth: '250px' }} onClick={handleStart}>
            Start Application
          </Button>
        </Container>
      </div>
      <div
        style={{
          position: 'absolute',
          overflow: 'hidden',
          height: '100svh',
          width: '100vw',
          zIndex: 0,
        }}
      >
        <Lottie
          style={{
            position: 'relative',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '50%',
            minWidth: '600px',
            opacity: 0.5,
          }}
          animationData={spaces}
        />
      </div>
    </Template>
  );
}
