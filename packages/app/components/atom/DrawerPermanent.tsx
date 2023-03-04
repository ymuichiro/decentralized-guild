import Drawer from '@mui/material/Drawer';
import { ReactNode } from 'react';

interface Props {
  maxWidth?: string;
  children?: ReactNode;
}
export default function DrawerPermanent(props: Props): JSX.Element {
  return (
    <Drawer
      open={true}
      anchor={'left'}
      variant={'permanent'}
      sx={{
        width: '90vw',
        maxWidth: props.maxWidth || '200px',
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: '90vw',
          maxWidth: props.maxWidth || '200px',
          boxSizing: 'border-box',
        },
      }}
    >
      <div style={{ height: '100svh' }}>{props.children}</div>
    </Drawer>
  );
}
