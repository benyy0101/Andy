import { CreateBabyProfileRequest, CreateBabyProfileResponse, RemoveBabyProfileResponse } from "../_models/profile.interface";
import { imageAxios, localAxios } from "./http-commons";

//PROFILE-001
export const createProfile = async (request: CreateBabyProfileRequest): Promise<CreateBabyProfileResponse> => {
    try{
        const response = await localAxios.post('/profile',request);
        return response.data;
    }
    catch (error){
        throw error;
    }
}

//PROFILE-002
export const removeProfile = async(child_seq: string): Promise<RemoveBabyProfileResponse>=>{
    const response = await localAxios.delete(`/profile/${child_seq}`);
    return response.data;
}

//PROFILE-003
export const updateProfile = async(request:CreateBabyProfileRequest)=>{
    try{
        const response = await localAxios.patch('/profile',request);
        return response.data;
    }
    catch (error){
        throw error;
    }
}

//PROFILE-004
export const getProfile = async(child_seq: string)=>{
    try{
        const response = await localAxios.get(`/profile/${child_seq}`);
        return response.data;
    }
    catch (error){
        throw error;
    }
}

//PROFILE-005
export const uploadProfileImage = async(formData:FormData) =>{
    try{
        const response = await imageAxios.post('/profile/image',formData);
        return response.data;
    }
    catch (error){
        throw error;
    }
}
