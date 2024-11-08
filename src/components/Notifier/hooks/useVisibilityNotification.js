import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { enqueueSnackbar } from "../../../store/snackbar";

import * as typeNotifier from "../../../constants/typeNotifications";

export const useVisibilityNotification = ({
  isVisibleSuccess,
  isVisibleInfo,
  isVisibleWarning,
  isVisibleError,
}) => {
  const dispatch = useDispatch();

  return useCallback(
    ({ type, message }) => {
      switch (type) {
        case typeNotifier.SUCCESS:
          isVisibleSuccess &&
            dispatch(enqueueSnackbar({ type: typeNotifier.SUCCESS, message }));
          break;
        case typeNotifier.INFO:
          isVisibleInfo &&
            dispatch(enqueueSnackbar({ type: typeNotifier.INFO, message }));
          break;
        case typeNotifier.WARNING:
          isVisibleWarning &&
            dispatch(enqueueSnackbar({ type: typeNotifier.WARNING, message }));
          break;
        case typeNotifier.ERROR:
          console.error(message);
          break;

        default:
          break;
      }
    },
    [
      dispatch,
      isVisibleError,
      isVisibleInfo,
      isVisibleSuccess,
      isVisibleWarning,
    ]
  );
};
