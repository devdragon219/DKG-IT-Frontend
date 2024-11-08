import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useSnackbar } from 'notistack';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { removeSnackbar } from '../../store/snackbar';


let displayed = [];

const Notifier = () => {
  const dispatch = useDispatch();
  const { notifications } = useSelector((store) => store.snackbar || []);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const storeDisplayed = (id) => {
    displayed = [...displayed, id];
  };

  const removeDisplayed = (id) => {
    displayed = displayed.filter((key) => id !== key);
  };

  const baseOptions = useMemo(() => ({
    anchorOrigin: {
      horizontal: 'right',
      vertical: 'top',
    },
    action: (key) => (
      <IconButton onClick={() => closeSnackbar(key)} aria-label="close" size="small">
        <CloseIcon className="snackbarIconsClose" fontSize="inherit" />
      </IconButton>
    ),
  }), [closeSnackbar]);

  useEffect(() => {
    notifications.forEach(({ key, message, options = {} }) => {
      if (displayed.includes(key)) return;

      enqueueSnackbar(<span className="snackbarMessage">{message}</span>, {
        key,
        ...baseOptions,
        ...options,
        onClose: (...arg) => {
          const [, , myKey] = arg;
          dispatch(removeSnackbar(myKey));
          removeDisplayed(myKey);
        },
      });
      storeDisplayed(key);
    });
  }, [notifications, closeSnackbar, enqueueSnackbar, dispatch, baseOptions]);

  return null;
};

export default Notifier;
