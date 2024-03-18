'use client'

import { Suspense} from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryStreamedHydration } from '@tanstack/react-query-next-experimental';

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        // With SSR, we usually want to set some default staleTime
        // above 0 to avoid refetching immediately on the client
        staleTime: 60 * 1000,
      },
    },
  })
}
let browserQueryClient: QueryClient | undefined;
function getQueryClient() {
  if (typeof window === 'undefined') {
    // Server: always make a new query client
    return makeQueryClient();
  } 
  if (!browserQueryClient) browserQueryClient = makeQueryClient();    
  return browserQueryClient;
}

export default function ReactQueryProviders({ children }: React.PropsWithChildren) {
  const queryClient = getQueryClient();
  return (
    <Suspense>
        <QueryClientProvider client={queryClient}>
          <ReactQueryStreamedHydration>
            {children}
          </ReactQueryStreamedHydration>
        </QueryClientProvider>
    </Suspense>
  )
}