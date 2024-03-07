'use client';

import { authCodetoServer } from '@/app/api/kakaoLogin';
import { useQuery } from '@tanstack/react-query';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { Suspense, use, useCallback, useEffect } from 'react';
import { AxiosResponse } from 'axios';
import { KakaoAuth, KakaoLoginResponse } from '@/app/_models/login.interface';

function page() {
    const router = useRouter();
    const params = useSearchParams();
    const AuthCode = params.get('code');
    const loginHandler = useCallback(async(code: string)=>{
        try{
            let response: Promise<KakaoLoginResponse> | null = null;
            if(AuthCode){
                response = authCodetoServer({code});
            }
            if(response){
                router.push('/');
            }
        }
        catch(error){
            console.error(error);
        } 
    },[])

    useEffect(()=>{
        if(AuthCode){
            loginHandler(AuthCode);
        }
        else{
            router.push('/error');
        }
    },[]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
        <div>히히 카카오 로그인 리다이렉트</div>
    </Suspense>
  )
}

export default page