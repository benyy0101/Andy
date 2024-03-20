import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

const serverUrl = process.env.SERVER_URL || "";
const loginUrl = process.env.NEXT_PUBLIC_LOGIN_URL || "";
const imageBaseUrl = process.env.IMAGE_BASE_URL || "";
const localDev = process.env.LOCAL_DEV || false;

const saveToken = (response: AxiosResponse) => {
  if (response.data.jwtToken !== null) {
    // eslint-disable-next-line no-console
    console.log(response.data.jwtToken.accessToken);
    localStorage.setItem("jwtToken", response.data.jwtToken.accessToken);
  }
};

const loadToken = (config: AxiosRequestConfig) => {
  const token = localStorage.getItem("jwtToken");
  if (token && config.headers) {
    return Object.assign(config.headers, { Authorization: `Bearer ${token}` });
  }
  return null;
};

export const localAxios = axios.create({
  baseURL: serverUrl,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export const kakaoAxios = axios.create({
  baseURL: loginUrl,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export const imageAxios: AxiosInstance = axios.create({
  baseURL: imageBaseUrl,
  timeout: 10000,
  headers: {
    "Content-Type": "multipart/form-data",
  },
  withCredentials: true,
});

kakaoAxios.interceptors.response.use(
  (response) => {
    // eslint-disable-next-line no-console
    saveToken(response);
    return response;
  },
  (error) => {
    // eslint-disable-next-line no-console
    if (localDev) console.error(error);
    return error;
  },
);

localAxios.interceptors.request.use((config) => {
  loadToken(config);
  return config;
});
