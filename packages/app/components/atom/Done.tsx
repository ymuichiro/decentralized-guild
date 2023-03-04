import done from '@/assets/backgrounds/done.json';
import Typography from '@mui/material/Typography';
import Lottie from 'lottie-react';
import { CSSProperties } from 'react';

interface Props {
  message?: string;
  containerStyle?: CSSProperties;
}

export default function LottieDone(props: Props): JSX.Element {
  return (
    <div
      className='center'
      style={{
        flexDirection: 'column',
        height: '60svh',
        width: '80vw',
        maxWidth: '600px',
        maxHeight: '600px',
        ...props.containerStyle,
      }}
    >
      <Lottie animationData={done} />
      <Typography textAlign={'center'} variant='h5'>
        {props.message}
      </Typography>
    </div>
  );
}
