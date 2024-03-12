//MYPAGE-001

import { MyInfoByDateRequest, MyInfoByMonthRequest } from "../_models/mypage.interface";
import useProfile from "../_store/useProfile";
import { localAxios } from "./http-commons";

const {profile} = useProfile();

export const getMyInfoByMonth = async () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;

    if(profile.child_seq === ''){
        throw new Error('child_seq is empty');
    }

    try{        
        const request:MyInfoByMonthRequest  = {
            child_seq: profile.child_seq,
            year: year,
            month: month,
        }
        if(year && month){
            const reponse = await localAxios.post(`/mypage/${profile.child_seq}/month`,request);
            return reponse.data;
        }
    }
    catch (error){
        throw error;
    }
}
//MYPAGE-002

export const getMyInfoByDate = async (year: number, month: number, day: number) => {
    try{
        const request:MyInfoByDateRequest = {
            child_seq: profile.child_seq,
            year: year,
            month: month,
            day: day,
        }
        const response = await localAxios.get(`/mypage/${profile.child_seq}/day`,);
        return response.data;
    }
    catch (error){
        throw error;
    }
}