import { axiosApiInstance, axiosApiFileInstance } from "./axiosSettings";
import * as typeNotifier from "../constants/typeNotifications";
import { enqueueSnackbar } from "notistack";
import axios from "axios";

const API = {
  fetchItemsBySlug: (slug) => {
    let param = "";
    if (slug) param = `?diagram_type=${slug}`;
    return axiosApiInstance.get(`api/diagrams${param}`);
  },

  fetchItemBySlug: (slug) => axiosApiInstance.get(`/api/diagrams/${slug}`),
  fetchDocItem: (docURL) => axios.get(docURL),

  fetchFileBySlug: (slug) =>
    axiosApiFileInstance.get(`/diagrams/${slug}/data.json`),

  fetchDeleteItemBySlug: (slug) => {
    const param = {
      is_staff: true,
    };

    const options = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      data: JSON.stringify(param),
      url: `api/diagrams/${slug}`,
    };

    return axiosApiInstance(options).then(({ data }) => data);
  },

  fetchGetUserInfo: () => axiosApiInstance.get(`api/user/`),
  logout: () => axiosApiInstance.post(`/logout/`),
  verifyDiagramPasskey: (data, slug) => axiosApiInstance.post(`/api/diagrams/verify-passkey/${slug}`, data),

  fetchGeSymboltHistoricInfo: (symbol) =>
    axiosApiInstance.get(`api/stock-history/${symbol}`),

  uploadFile: async function (props) {
    try {
      const { data } = props;

      const options = {
        method: "POST",
        headers: { "Content-Type": "multipart/form-data" },
        data: data,
        url: "/api/files",
      };

      return axiosApiInstance(options).then(({ data }) => data);
    } catch (e) {
      console.error(e);
    }
  },

  fetchCreateItem: async function (props) {
    try {
      const { title, slug, diagram_type, source, is_protected, passkey, accessible_by } = props;

      const param = {
        title,
        slug,
        diagram_type,
        source,
        is_protected,
        passkey,
        accessible_by
      };

      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: JSON.stringify(param),
        url: "/api/diagrams",
      };

      return axiosApiInstance(options).then(({ data }) => data);
    } catch (error) {
      enqueueSnackbar({ type: typeNotifier.SUCCESS, message: error });
    }
  },

  fetchImgItem: async function (props) {
    try {
      const { data } = props;

      const formData = new FormData();
      formData.append("file", data);

      const options = {
        method: "POST",
        headers: { "Content-Type": "multipart/form-data" },
        data: data,
        url: `/api/diagrams-file/documentCreatorV2`,
      };

      return axiosApiInstance(options).then(({ data }) => data);
    } catch (error) {
      console.log(error);
    }
  },

  fetchEditItem: async function (props) {
    try {
      const { title, slug:urlSlug, diagram_type, source, newSlug, is_protected, accessible_by, passkey } = props;

      const param = {
        title,
        diagram_type,
        source,
        slug:newSlug,
        is_protected
      };
      if (passkey) {
        param.passkey = passkey
      }
      if (accessible_by !== "") { 
        param.accessible_by = accessible_by
      }

      const options = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        data: JSON.stringify(param),
        url: `/api/diagrams/${urlSlug}`,
      };

      return axiosApiInstance(options).then(({ data }) => data);
    } catch (error) {
      enqueueSnackbar({ type: typeNotifier.SUCCESS, message: error });
    }
  },

  fetchGetPlatformAccess: async function () {
    "returns user has platform access or not";
    try {
      const options = {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        url: `/api/platform-access/`,
      };
      return axiosApiInstance(options).then(({ data }) => data);
    } catch (error) {
      enqueueSnackbar({ type: typeNotifier.SUCCESS, message: error });
    }
  },
  requestPlatformAccess: async function () {
    "Request user platform access";
    try {
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        url: `/api/platform-access/`,
      };
      return axiosApiInstance(options).then(({ data }) => data);
    } catch (error) {
      enqueueSnackbar({ type: typeNotifier.SUCCESS, message: error });
    }
  },
  getPlatformAccessStatus: async function () {
    "Request user platform access";
    try {
      const options = {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        url: `/api/platform-access/`,
      };
      return axiosApiInstance(options).then(({ data }) => data);
    } catch (error) {
      enqueueSnackbar({ type: typeNotifier.SUCCESS, message: error });
    }
  },
  deployAdminDashboard: async function (data) {
    "Deploy admin dashboard";
    try {
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        url: `/api/deploy-admin-dashboard/`,
        data: JSON.stringify(data),
      };
      return axiosApiInstance(options).then(({ data }) => data);
    } catch (error) {
      enqueueSnackbar({ type: typeNotifier.SUCCESS, message: error });
    }
  },
  fetchITToolProducts: async () => {
    try {
      const {data} = await axiosApiInstance.get(`/api/it-tools/`)
      return data;
    } catch (error) {
      console.error(error);
      enqueueSnackbar({ type: typeNotifier.ERROR, message: error.message });
    }
  },
  fetchITToolProductById: (id) => {
    return axiosApiInstance.get(`/api/it-tools/${id}/`)
      .then(({ data }) => data)
      .catch((error) => {
        console.error(error);
        enqueueSnackbar({ type: typeNotifier.ERROR, message: error.message });
      });
  },
  createITToolProduct: (props) => {
    const { title, description, category, demo_link } = props;
  
    const param = {
      title,
      image,
      description,
      demo_link,
      category,
      create_link,
      file_example
    };
  
    return axiosApiInstance.post(`/api/it-tools/`, param)
      .then(({ data }) => data)
      .catch((error) => {
        console.error(error);
        enqueueSnackbar({ type: typeNotifier.ERROR, message: error.message });
      });
  },
  updateITToolProductById: (id, props) => {
    const { title, description, category, demo_link } = props;
  
    const param = {
      title,
      image,
      description,
      demo_link,
      category,
      create_link,
      file_example
    };
  
    return axiosApiInstance.put(`/api/it-tools/${id}/`, param)
      .then(({ data }) => data)
      .catch((error) => {
        console.error(error);
        enqueueSnackbar({ type: typeNotifier.ERROR, message: error.message });
      });
  },
  deleteITToolProductById: (id) => {
    return axiosApiInstance.delete(`/api/it-tools/${id}/`)
      .then(({ data }) => data)
      .catch((error) => {
        console.error(error);
        enqueueSnackbar({ type: typeNotifier.ERROR, message: error.message });
      });
  }
};

export default API;
