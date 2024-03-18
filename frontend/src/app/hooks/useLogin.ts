import { useQuery } from "@tanstack/react-query";
import { KakaoAuth, LoginResponse } from "../_models/login.interface";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { kakaoLogin } from "../api/kakao";

export const useLogin = (data: KakaoAuth) => {
    const router = useRouter();
    const query = useQuery<LoginResponse>({
        queryKey:["user"],
        queryFn:()=>kakaoLogin(data),
    });
    useEffect(()=>{
        if(query.data){
            router.push("/");
        }

    },[data]);

    useEffect(()=>{
        if(query.error){
            router.push("/login/error");
        }
    },[query.error]);
    
    return query;
}