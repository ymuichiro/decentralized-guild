import Box from '@mui/material/Box';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function PageTransition(props: Props): JSX.Element {
  return (
    <Box
      component={motion.div}
      initial='hidden'
      animate='enter'
      exit='exit'
      variants={{
        hidden: { opacity: 0, x: 0, y: 0 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: 0 },
      }}
      transition={{ type: 'just' }}
    >
      <main>{props.children}</main>
    </Box>
  );
}
