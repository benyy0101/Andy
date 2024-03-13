'use client';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { Suspense, use, useCallback, useEffect } from 'react';
import { KakaoAuth, KakaoLoginResponse } from '@/app/_models/login.interface';
import { useLogin } from '@/app/hooks/useLogin';

function page() {
    // const router = useRouter();
    // const params = useSearchParams();
    // const AuthCode = params.get('code');
    // useLogin({code: AuthCode ?? ""});
  return (
    <Suspense fallback={<div>Loading...</div>}>
        <div>히히 카카오 로그인 리다이렉트</div>
    </Suspense>
  )
}

export default page