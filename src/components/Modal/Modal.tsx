import { Box, Modal, Typography, useTheme } from '@suid/material';
import { JSX } from 'solid-js';

import { Button } from '../Button';

export interface ModalProps {
  open: boolean;
  title: string;
  description?: string;
  handleClose?: () => void;
  additionalModalProps?: Record<string, unknown>;
  children: JSX.Element;
}

export default function BasicModal({
  open,
  title,
  description,
  handleClose,
  additionalModalProps = {},
  children,
}: Readonly<ModalProps>) {
  const theme = useTheme();
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      {...additionalModalProps}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: theme.palette.background.paper,
          boxShadow: '24px',
          p: 4,
        }}
      >
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {title}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {description}
        </Typography>
        <Box>{children}</Box>
        <Box sx={{ justifyContent: 'flex-end', display: 'flex', mt: 2 }}>
          <Button
            sx={{ mr: 2 }}
            variant="outlined"
            label="CLOSE"
            onClick={handleClose}
          />
          <Button variant="contained" label="SUBMIT" />
        </Box>
      </Box>
    </Modal>
  );
}
