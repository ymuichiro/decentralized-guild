import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { ReactNode } from 'react';

interface Props {
  isOpen: boolean;
  handleDrawerToggle: () => void;
  maxWidth?: string;
  children?: ReactNode;
}
export default function DrawerSwipeable(props: Props): JSX.Element {
  return (
    <SwipeableDrawer
      anchor={'left'}
      open={props.isOpen}
      onOpen={props.handleDrawerToggle}
      onClose={props.handleDrawerToggle}
      sx={{
        width: '90vw',
        maxWidth: props.maxWidth || '250px',
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: '90vw',
          maxWidth: props.maxWidth || '250px',
          boxSizing: 'border-box',
        },
      }}
    >
      <div style={{ height: '100svh' }}>{props.children}</div>
    </SwipeableDrawer>
  );
}
