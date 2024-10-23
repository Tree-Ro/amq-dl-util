import { Alert, Snackbar } from '@mui/material'
import { useState } from 'react';
import ReactDOM from 'react-dom'

export const useAlertSnackbar = ({ text, severity, autoHideDuration }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') return;
    setOpen(false);
  };


  const AlertSnackbar = () =>
    ReactDOM.createPortal(
      <Snackbar
        open={open}
        autoHideDuration={autoHideDuration}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert
          onClose={handleClose}
          severity={severity}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {text}
        </Alert>
      </Snackbar>,
      document.body // Portal target
    );


  return { AlertSnackbar, handleClick, handleClose }
}
