import { axiosInstance } from '@/services/axios';

const sendData = (endpoint: string, data: any) => {
  return axiosInstance.post(endpoint, data, {
  });
};

export { sendData };
