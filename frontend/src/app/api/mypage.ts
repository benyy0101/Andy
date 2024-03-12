//MYPAGE-001

import { MyInfoByDateRequest, MyInfoByMonthRequest } from "../_models/mypage.interface";
import useProfile from "../_store/useProfile";
import { localAxios } from "./http-commons";

const {profile} = useProfile();

export const getMyInfoByMonth = async (request: MyInfoByMonthRequest | null) => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;

    if(profile.child_seq === ''){
        throw new Error('child_seq is empty');
    }
    if(!request)(
        request = {
            year: year,
            month: month,
        }
    )

    try{        
        if(year && month){
            const reponse = await localAxios.post(`/mypage/${profile.child_seq}/month`,request);
            return reponse.data;
        }
        else{
            throw new Error('year or month is empty');
        }
    }
    catch (error){
        throw error;
    }
}
//MYPAGE-002

export const getMyInfoByDate = async (request: MyInfoByDateRequest) => {
    try{
        const response = await localAxios.post(`/mypage/${profile.child_seq}/day`,request);
        return response.data;
    }
    catch (error){
        throw error;
    }
}