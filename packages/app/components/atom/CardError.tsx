import Card from '@mui/material/Card';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}
export default function CardError(props: Props): JSX.Element {
  return (
    <Card
      style={{
        border: 'solid 2px',
        borderColor: '#D32F2F',
        borderWidth: '3px',
        background: 'rgba(255,0,0,0.1)',
      }}
    >
      {props.children}
    </Card>
  );
}
