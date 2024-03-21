import { AxiosResponse } from 'axios';
import { axiosInstance } from './axios';

interface Params {
  path: string;
  fields?: string;
  sort?: string;
  search?: string;
  limit?: number;
  filter?: any;
}

const fetchData = (params: Params): Promise<AxiosResponse> => {
  console.info(`[fetchData] Loading... ${params.path}`);

  return axiosInstance.get(params.path, {
    params: {
      ...(params.fields ? { fields: params.fields } : {}),
      ...(params.limit ? { limit: params.limit } : {}),
      ...(params.filter ? { filter: params.filter } : {}),
      ...(params.search ? { search: params.search } : {}),
      ...(params.sort ? { sort: params.sort } : {}),
    },
  });
};

export { fetchData };
