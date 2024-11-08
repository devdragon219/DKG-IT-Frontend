import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import API from "../API";
import {hasLocalBackend, isLocalhost} from "../libs/auth";

export const getUserInfo = createAsyncThunk(
  "user/getUserInfo",
  async (arg, {getState, rejectWithValue}) => {
    try {
      const response = await API.fetchGetUserInfo(arg);
      return response.data;
    } catch (e) {
      return rejectWithValue({
        error: {
          message: `error ${e}`,
        },
      });
    }
  }
);

export const logout = createAsyncThunk(
  "user/logout",
  async (arg, {getState, rejectWithValue}) => {
    try {
      const response = await API.logout(arg);
      return response.data;
    } catch (e) {
      return rejectWithValue({
        error: {
          message: `error ${e}`,
        },
      });
    }
  }
)


const initialStateMetadata = {
  status: "idle",
  userName: "",
  isStaff: false,
  groups: [],
  isAuthenticated: false,
  requestStatus: "pending",
  permissions: [],
  profile: {isEditor: isLocalhost() && !hasLocalBackend()},
};

const slice = createSlice({
  name: "item",
  initialState: {
    ...initialStateMetadata,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserInfo.fulfilled, (state, action) => {
        state.userName = action.payload ? action.payload.username : action.payload;
        state.groups = action.payload?.groups || [];
        state.permissions = action.payload?.permissions || [];
        state.isStaff = action.payload?.is_staff || false;
        state.profile = action.payload?.profile || {isEditor: isLocalhost() && !hasLocalBackend()};
        state.isAuthenticated = !!action.payload;
        state.requestStatus = "success";
      })
      .addCase(getUserInfo.rejected, (state, action) => {
        state.requestStatus = "failed";
      })
      .addCase(logout.fulfilled, (state, action) => {
        state = {...initialStateMetadata};
      })
  },
});

export const {changeOnLoaded, cleanUpActions, addNewDataField, setField} = slice.actions;
export default slice.reducer;
