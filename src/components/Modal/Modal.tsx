import { Box, Modal, Typography, useTheme } from '@suid/material';

import { Button } from '../Button';

type ModalProps = {
  open: boolean;
  title: string;
  handleClose?: () => void;
};

export default function BasicModal({ open, title, handleClose }: ModalProps) {
  const theme = useTheme();
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
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
          Left aligned contextual description for modal.
        </Typography>
        <Box sx={{ justifyContent: 'flex-end', display: 'flex', mt: 2 }}>
          <Button sx={{ mr: 2 }} variant="outlined" label="CLOSE" />
          <Button variant="contained" label="SUBMIT" />
        </Box>
      </Box>
    </Modal>
  );
}
