import { CloseIcon } from '@/components/atom/AppIconButton';
import UserProfile from '@/components/moleculs/UserProfile';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import type { User } from 'oas/types';

interface Props {
  user?: User;
  onClose: () => void;
}

/**
 * Requester Info
 */
export default function UserInfoCard(props: Props): JSX.Element {
  return (
    <Card style={{ height: '90svh' }}>
      <CardContent className='scroll-bar-off' style={{ overflowY: 'auto' }}>
        <div style={{ position: 'absolute', right: '10px', top: '10px' }}>
          <CloseIcon onClick={props.onClose} />
        </div>
        <Container maxWidth={'sm'} style={{ display: 'flex', gap: '15px', flexDirection: 'column' }}>
          <UserProfile
            avatarSize={160}
            isEditable={false}
            profile={{ name: props.user?.name, image: props.user?.image }}
          />
          <Typography marginTop={'1rem'} variant='h5'>
            Created
          </Typography>
          <Typography>{props.user?.createdAt?.toLocaleDateString() ?? 'unknown'}</Typography>
          <Typography marginTop={'1rem'} variant='h5'>
            PublicKey
          </Typography>
          <Typography textOverflow={'clip'} style={{ overflowWrap: 'break-word' }}>
            {props.user?.publicKey}
          </Typography>
          {/* <Typography marginTop={'1rem'} variant='h5'>
            RPT
          </Typography>
          <Typography>under construction</Typography>
          <Typography marginTop={'1rem'} variant='h5'>
            Guild
          </Typography>
          <Typography>under construction</Typography> */}
        </Container>
      </CardContent>
    </Card>
  );
}
