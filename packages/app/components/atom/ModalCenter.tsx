import Grow from '@mui/material/Grow';
import Modal from '@mui/material/Modal';
import React from 'react';

interface Props {
  children: React.ReactNode;
  isOpen: boolean;
  onClose?: () => void;
}

export default function ModalCenter(props: Props): JSX.Element {
  return (
    <Modal
      open={props.isOpen}
      onClose={props.onClose}
      disableAutoFocus={true}
      closeAfterTransition
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backdropFilter: 'blur(2px)',
      }}
    >
      <Grow in={props.isOpen}>
        <div>{props.children}</div>
      </Grow>
    </Modal>
  );
}
