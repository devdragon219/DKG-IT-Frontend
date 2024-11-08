import axios from "axios";
import { getIMGAPIurl, pathAPIurl } from "../constants/routes";

const baseURL = pathAPIurl();
const fileURL = getIMGAPIurl();
const axiosApiInstance = axios.create({
  baseURL: baseURL,
  withCredentials: true, // always send cookies, browser will take care of security
  headers: {
    Accept: "application/json;charset=UTF-8",
  },
});

const axiosApiFileInstance = axios.create({
  baseURL: fileURL,
  headers: {
    Accept: "application/json;charset=UTF-8",
  },
});

export { axiosApiFileInstance, axiosApiInstance };
