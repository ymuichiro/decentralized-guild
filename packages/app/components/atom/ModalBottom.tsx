import Drawer from '@mui/material/Drawer';
import { useTheme } from '@mui/material/styles';
import { CSSProperties } from 'react';

interface Props {
  children?: JSX.Element | null;
  isOpen: boolean;
  onClose?: () => void;
  elevation?: number;
  style?: CSSProperties;
}

export default function ModalBottom(props: Props): JSX.Element {
  const theme = useTheme();

  return (
    <Drawer
      open={props.isOpen}
      anchor='bottom'
      style={{ zIndex: theme.zIndex.modal + 1, ...props.style }}
      onClose={props.onClose}
      elevation={props.elevation}
      PaperProps={{
        style: {
          borderTopLeftRadius: theme.shape.borderRadius,
          borderTopRightRadius: theme.shape.borderRadius,
          marginLeft: '2vw',
          marginRight: '2vw',
        },
      }}
    >
      {props.children}
    </Drawer>
  );
}
