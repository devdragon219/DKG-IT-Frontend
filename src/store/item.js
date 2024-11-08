import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import diagrams from "../pages/CreateDiagramPageV2/dataCallbacks.js";
import API from "../API";
import { csvToJson } from "../pages/CreateDiagramPageV2/utils.jsx";

export const getItemBySlug = createAsyncThunk(
  "item/getItem",
  async (arg, { getState, rejectWithValue }) => {
    try {

      const response = await API.fetchItemBySlug(arg);
      let docData = null;

      // data.diagram_type
      const configs = response?.data?.source?.configs;

      if (configs?.isDOCConnected && configs?.docURL) {
        const callback = diagrams?.[response?.data?.diagram_type]?.callback;

        docData = await API.fetchDocItem(configs?.docURL);

        if (callback && docData.data) {
          const json = csvToJson(docData.data);
          const newData = callback(
            json,
            configs.dataSettings,
            configs.customizeSettings
          );
          if (response?.data?.source?.originalData && newData?.originalData) {
            response.data.source.originalData = newData.originalData;
          }
        }
      }

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

export const getItemBySlugExample = createAsyncThunk(
  "item/getItemExampleFile",
  async (arg, { getState, rejectWithValue }) => {
    try {
      const response = await API.fetchFileBySlug(arg);
      return { data: response.data, type: arg };
    } catch (e) {
      return rejectWithValue({
        error: {
          message: `error ${e}`,
        },
      });
    }
  }
);

export const setDataFromJsonFile = createAsyncThunk(
  "item/setDataFromJsonFile",
  async (arg, { getState, rejectWithValue }) => {
    try {
      const response = JSON.parse(arg);
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

export const setMockData = createAsyncThunk(
  "item/setMockData",
  async (arg, { getState, rejectWithValue }) => {
    try {
      const response = JSON.parse(arg);
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

export const setDataFromComponent = createAsyncThunk(
  "item/setDataFromComponent",
  async (arg, { getState, rejectWithValue }) => {
    try {
      const response = arg;
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
  statusUpload: "",
  title: "",
  url: "",
  data: null,
  isLoadingData: false,
  isLoadedData: false,
  accessible_by: "",
  is_protected: false,
  has_password: false,
  slug: "",
  password_required: false,
  restricted_access: false,
};

const slice = createSlice({
  name: "item",
  initialState: {
    ...initialStateMetadata,
  },
  reducers: {
    cleanUpActions(state) {
      state.status = initialStateMetadata.status;
      state.title = initialStateMetadata.title;
      state.url = initialStateMetadata.url;
      state.data = initialStateMetadata.data;
      state.isLoadingData = initialStateMetadata.isLoadingData;
      state.isLoadedData = initialStateMetadata.isLoadedData;
    },

    setField(state, action) {
      const { field, value } = action.payload;
      state[field] = value;
    },
    addNewDataField(state, action) {
      const { field, value } = action.payload;
      state[field] = value;
      state.data.originalData[field] = value;
    },

    setXY: (state, action) => {
      const { title, x, y } = action.payload;

      const newData = state.data.originalData.data.map((item) => {
        if (Array.isArray(item.data)) {
          const newNestedArray = item.data.map((nestedItem) => {
            if (nestedItem.title === title) {
              return {
                ...nestedItem,
                correctionX: x,
                correctionY: y,
              };
            }
            return nestedItem;
          });
          return {
            ...item,
            data: [...newNestedArray],
          };
        }
        return item;
      });

      state.data = {
        ...state.data,
        originalData: {
          ...state.data.originalData,
          data: [...newData],
        },
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setDataFromJsonFile.pending, (state) => {
        state.data = {};
        state.isLoadingData = true;
        state.isLoadedData = false;
      })
      .addCase(setDataFromJsonFile.fulfilled, (state, action) => {
        const data = action.payload;
        state.data = data;
        state.isLoadingData = false;
        state.isLoadedData = true;
        state.statusUpload = "succeeded";
      })
      .addCase(setDataFromJsonFile.rejected, (state) => {
        state.statusUpload = "failed";
      })

      .addCase(setMockData.pending, (state) => {
        // state.data = {};
        // state.isLoadingData = true;
        // state.isLoadedData = false;
      })
      .addCase(setMockData.fulfilled, (state, action) => {
        const data = action.payload;
        state.data = data;
        state.isLoadingData = false;
        state.isLoadedData = true;
      })
      .addCase(setMockData.rejected, (state) => {
        state.statusUpload = "failed";
      })

      .addCase(setDataFromComponent.pending, (state) => {
        state.data = {};
      })
      .addCase(setDataFromComponent.fulfilled, (state, action) => {
        const data = action.payload;
        state.data = data;
      })
      .addCase(setDataFromComponent.rejected, (state) => {
        state.statusUpload = "failed";
      })
      .addCase(getItemBySlugExample.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getItemBySlugExample.fulfilled, (state, action) => {
        const { data, type } = action.payload;

        const originalData = data?.originalData || {};
        state.data = {
          originalData: originalData,
          type: type,
        };
        state.isLoadedData = true;
        state.isLoadingData = false;
        state.status = "succeeded";
      })
      .addCase(getItemBySlugExample.rejected, (state, action) => {
        state.status = "failed";
      })
      .addCase(getItemBySlug.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getItemBySlug.fulfilled, (state, action) => {
        const data = action.payload;
        const originalData = data?.source?.originalData || {};
        const configs = data?.source?.configs || {};

        state.data = {
          originalData: originalData,
          configs,
          type: data?.diagram_type,
        };
        state.accessible_by = data?.accessible_users || "";
        state.is_protected = data?.is_protected || false;
        state.has_password = data?.has_password || false;
        state.slug = data?.slug || "";
        state.isLoadedData = true;
        state.isLoadingData = false;
        state.restricted_access = data?.restricted_access || false;
        state.password_required = data?.password_required || false;
        state.status = "succeeded";
      })
      .addCase(getItemBySlug.rejected, (state, action) => {
        state.status = "failed";
      });
  },
});

export const {
  changeOnLoaded,
  cleanUpActions,
  addNewDataField,
  setXY,
  setField,
} = slice.actions;

export default slice.reducer;
