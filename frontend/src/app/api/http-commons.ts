import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

const serverUrl = process.env.SERVER_URL || "";
const imageBaseUrl = process.env.IMAGE_BASE_URL || "";
const localDev = process.env.LOCAL_DEV || false;

const saveToken = (response: AxiosResponse) => {
    if(response.data.jwtToken !== null){
        localStorage.setItem('jwtToken',response.data.jwtToken);
    }
}

const loadToken = (config: AxiosRequestConfig) => {
    const token = localStorage.getItem('jwtToken');
    if(token && config.headers){
        return Object.assign(config.headers, {Authorization: `Bearer ${token}`});
    }
    return null;    
}

export const localAxios = axios.create({
    baseURL: serverUrl,
    headers: {
        "Content-type": "application/json",
        withCredentials: true,
    }
});

export const kakaoAxios = axios.create({
    baseURL: serverUrl,
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
    // eslint-disable-next-line no-console
    if(localDev) console.error(error);
    return error;
});

localAxios.interceptors.request.use((config) => {
    loadToken(config);
    return config;
})

    
    