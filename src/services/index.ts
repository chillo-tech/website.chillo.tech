import { QueryClient } from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
    },
    mutations: {},
  },
});

export { queryClient };
export * from './send-data';
