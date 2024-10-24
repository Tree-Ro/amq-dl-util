import { useState } from 'react';

const useAlertSnackbar = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState('');
  const [severity, setSeverity] = useState('info');
  const [progress, setProgress] = useState(null);

  const openSnackbar = (message, severity = 'info') => {
    setText(message);
    setSeverity(severity);
    setOpen(true);
  };

  const closeSnackbar = () => {
    setOpen(false);
  };

  const updateProgress = (newProgress) => {
    setProgress(newProgress);
  };

  return {
    snackbar: { open, text, severity, progress },
    openSnackbar,
    closeSnackbar,
    updateProgress,
  };
};

export default useAlertSnackbar;
