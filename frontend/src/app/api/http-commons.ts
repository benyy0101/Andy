import axios, { AxiosInstance } from 'axios';
import nookies from "nookies";
const serverUrl = process.env.SERVER_URL || "http://localhost:8080";
const imageBaseUrl = process.env.IMAGE_BASE_URL || "http://localhost:8080";
const kakaoURl = "https://kapi.kakao.com";

export const localAxios = axios.create({
    baseURL: serverUrl,
    headers: {
        "Content-type": "application/json",
        withCredentials: true,
    }
});

export const kakaoAxios = axios.create({
    baseURL: "https://kapi.kakao.com",
    headers: {
        "Content-type": "application/json",
        withCredentials: true,
    }
});

export const imageAxios: AxiosInstance = axios.create({
    baseURL: imageBaseUrl,
    headers: {
      "Content-Type": "multipart/form-data",
    },
    withCredentials: true,
  });
