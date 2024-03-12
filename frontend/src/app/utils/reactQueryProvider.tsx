'use client'

import { use, useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useSearchParams } from 'next/navigation';

export default function ReactQueryProviders({ children }: React.PropsWithChildren) {
  const params = useSearchParams();
  const isDevOn: boolean = params.get('queryDev') === 'false';
  
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
          },
        },
      }),
  )

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={isDevOn} />
    </QueryClientProvider>
  )
}