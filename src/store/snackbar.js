import { createSlice } from "@reduxjs/toolkit";

const initialState = { notifications: [] };
const slice = createSlice({
  name: "snackbar",
  initialState,
  reducers: {
    enqueueSnackbar(state, { payload: { type, message } }) {
      state.notifications.push({
        message,
        options: {
          variant: type,
        },
        key: new Date().getTime() + Math.random(),
      });
    },

    removeSnackbar(state, { payload }) {
      state.notifications = state.notifications.filter(
        (notification) => notification.key !== payload
      );
    },

    removeAllSnackbar(state, { payload }) {
      return initialState;
    },
  },

});

export const { enqueueSnackbar, removeSnackbar, removeAllSnackbar } =
  slice.actions;

export default slice.reducer;
