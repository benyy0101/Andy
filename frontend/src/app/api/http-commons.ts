import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL || "";
const loginUrl = process.env.NEXT_PUBLIC_LOGIN_URL || "";
const imageBaseUrl = process.env.NEXT_PUBLIC_IMG_URL || "";
const localDev = process.env.LOCAL_DEV || false;
const quizUrl = process.env.NEXT_PUBLIC_QUIZ_URL || "";
const mypageUrl = process.env.NEXT_PUBLIC_MYPAGE_URL || "";
const saveToken = (response: AxiosResponse) => {
  if (response.data.jwtToken !== null) {
    // eslint-disable-next-line no-console
    // console.log(response.data.jwtToken.accessToken);
    localStorage.setItem("jwtToken", response.data.jwtToken.accessToken);
  }
};

const loadToken = (config: AxiosRequestConfig) => {
  let token = null;
  if (typeof window !== "undefined") {
    token = localStorage.getItem("jwtToken");
  }

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
export const mypageAxios = axios.create({
  baseURL: mypageUrl,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export const gameAxios = axios.create({
  baseURL: quizUrl,
  withCredentials: true,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

export const quizAxios = axios.create({
  baseURL: quizUrl,
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

imageAxios.interceptors.request.use((config) => {
  loadToken(config);
  return config;
});

gameAxios.interceptors.request.use((config) => {
  loadToken(config);
  return config;
});

quizAxios.interceptors.request.use((config) => {
  loadToken(config);
  return config;
});
mypageAxios.interceptors.request.use((config) => {
  loadToken(config);
  return config;
});
