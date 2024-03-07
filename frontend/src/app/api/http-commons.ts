import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
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
    timeout: 10000,
    headers: {
      "Content-Type": "multipart/form-data",
    },
    withCredentials: true,
  });

localAxios.interceptors.response.use((response)=>{
    if(response.data.jwtToken ! =null){
        localStorage.setItem('jwtToken',response.data.jwtToken);
    }
    return response;
});

localAxios.interceptors.request.use((config)=>{
    const token = localStorage.getItem('jwtToken');
    if(token){
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
})
    
    