import { useMutation, useQuery } from "@tanstack/react-query";
import { CreateBabyProfileRequest, CreateBabyProfileResponse, RemoveBabyProfileResponse } from "../_models/profile.interface";
import { createProfile, getProfile, removeProfile, updateProfile, uploadProfileImage } from "../api/profile";

//PROFILE-001
export const useCreateProfile = () => {
    const mutate = useMutation<CreateBabyProfileResponse, Error,any,any>({
        mutationFn: (request: CreateBabyProfileRequest)=>createProfile(request),
    });
    return mutate;
}

//PROFILE-002
export const useRemoveProfile = () => {
        const mutate = useMutation<RemoveBabyProfileResponse, Error,any,any>({
        mutationFn: (data:string)=>removeProfile(data),
    });
    return mutate;
}

//PROFILE-003
export const useUpdateProfile = () => {
    const mutate = useMutation<CreateBabyProfileRequest, Error,any,any>({
        mutationFn: (request: CreateBabyProfileRequest) => updateProfile(request),
    });
    return mutate;
}

//PROFILE-004
export const useGetProfile = (child_seq: string) => {
    const query = useQuery({
        queryKey: ['profile'],
        queryFn: () => getProfile(child_seq),
    });
    return query;
}

//PROFILE-005
export const useUploadProfileImage = () => {
    const mutate = useMutation<string, Error,any,any>({
        mutationFn: (formData: FormData) => uploadProfileImage(formData),
    });
    return mutate;
}