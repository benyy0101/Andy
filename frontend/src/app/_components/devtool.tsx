'use client'

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react'

function Devtool() {
    const params = useSearchParams();
    const isDevOn: boolean = params.get('queryDev') === 'true';
    useEffect(() => {
        console.log(isDevOn);
    },[]);
    
  return (
    <>
    {isDevOn ? (<ReactQueryDevtools initialIsOpen={isDevOn}/>) : <></>}
    </>
  )
}

export default Devtool