import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import API from "../API";

export const getItemsBySlug = createAsyncThunk(
  "list/getItems",
  async (arg, { getState, rejectWithValue }) => {
    try {
      const response = await API.fetchItemsBySlug(arg);
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

export const deleteItemBySlug = createAsyncThunk(
  "list/deleteItem",
  async (arg, { _, rejectWithValue }) => {
    try {
      await API.fetchDeleteItemBySlug(arg);
      return { slug: arg };
    } catch (e) {
      return rejectWithValue({
        error: {
          message: `error ${e}`,
        },
      });
    }
  }
);

export const createItem = createAsyncThunk(
  "list/createItem",
  async (arg, { _, rejectWithValue }) => {
    try {
      const response = await API.fetchCreateItem(arg);
      return response;
    } catch (e) {
      if (e.response.status === 400) {
        return rejectWithValue({
          error: {
            message: e.response.data.message,
          },
        });
      }
      return rejectWithValue({
        error: {
          message: `error ${e}`,
        },
      });
    }
  }
);

export const publishItem = createAsyncThunk(
  "list/publishItem",
  async (arg, { _, rejectWithValue }) => {
    try {
      const response = await API.fetchCreateItem(arg);
      return response;
    } catch (e) {
      if (e.response.status === 400) {
        return rejectWithValue({
          error: {
            message: e.response.data.message,
          },
        });
      }
      return rejectWithValue({
        error: {
          message: `error ${e}`,
        },
      });
    }
  }
);

export const editItem = createAsyncThunk(
  "list/editItem",
  async (arg, { _, rejectWithValue }) => {
    try {
      const response = await API.fetchEditItem(arg);
      return response;
    } catch (e) {
      return rejectWithValue({
        error: {
          message: `error ${e}`,
        },
      });
    }
  }
);

const initialStateMetadata = {
  status: "idle",
  statusAddItem: "idle",
  items: [],
  error: "",
  published: false,
};

const slice = createSlice({
  name: "list",
  initialState: {
    ...initialStateMetadata,
  },
  reducers: {
    cleanUpItems(state) {
      state = { ...state, ...initialStateMetadata };
    },
    cleanUpStatusedActions(state) {
      state.status = initialStateMetadata.status;
      state.statusAddItem = initialStateMetadata.statusAddItem;
      state.error = initialStateMetadata.error;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getItemsBySlug.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getItemsBySlug.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(getItemsBySlug.rejected, (state, action) => {
        state.status = "failed";
        state.error = action;
      })

      .addCase(deleteItemBySlug.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (item) => item.slug !== action.payload.slug
        );
      })

      .addCase(createItem.fulfilled, (state, action) => {
        const item = action.payload;
        state.items.push(item);
        state.statusAddItem = "succeeded";
      })
      .addCase(createItem.rejected, (state, action) => {
        state.status = "failed";
        state.error = action;
      })

      .addCase(publishItem.fulfilled, (state, action) => {
        const item = action.payload;
        state.items.push(item);
        state.published = true;
        state.statusAddItem = "succeeded";
      })
      .addCase(publishItem.rejected, (state, action) => {
        state.status = "failed";
        state.error = action;
      })

      .addCase(editItem.fulfilled, (state, action) => {
        const item = action.payload;
        state.items.push(item);
        state.statusAddItem = "succeeded";
      })
      .addCase(editItem.rejected, (state, action) => {
        state.status = "failed";
        state.error = action;
      });
  },
});

export const { cleanUpItems } = slice.actions;

export default slice.reducer;
