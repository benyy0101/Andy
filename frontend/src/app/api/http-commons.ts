import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

const serverUrl = process.env.SERVER_URL || "http://localhost:8080";
const imageBaseUrl = process.env.IMAGE_BASE_URL || "http://localhost:8080";
const kakaoURl = "https://kapi.kakao.com";
const localDev = process.env.LOCAL_DEV || false;

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
    saveToken(response);
    
    return response;
},
(error)=>{
    if(localDev) console.error(error);
    return error;
});

localAxios.interceptors.request.use((config)=>{
    loadToken(config);
    return config;
})

const saveToken = (response: AxiosResponse)=>{
    if(response.data.jwtToken ! =null){
        localStorage.setItem('jwtToken',response.data.jwtToken);
    }
}

const loadToken = (config: AxiosRequestConfig): null =>{
    const token = localStorage.getItem('jwtToken');
    if(token && config.headers){
        config.headers.Authorization = `Bearer ${token}`;
    }
    return null;
}
    
    