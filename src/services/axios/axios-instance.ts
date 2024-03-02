import axios from 'axios';
import {setupInterceptorsTo} from "./axios-interceptors";
const instance = axios.create({ baseURL: `${process.env.API_URL}`});
instance.defaults.headers.common['Authorization'] = `Bearer ${process.env.ACCES_TOKEN}`;
instance.defaults.headers.common['Accept'] = 'application/json';
const axiosInstance = setupInterceptorsTo(instance);

export {axiosInstance};
