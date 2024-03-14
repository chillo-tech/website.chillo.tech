// Import objects and functions from axios-instance and axios-interceptors
import * as axiosInstance from './axios-instance';
import * as axiosInterceptors from './axios-interceptors';

// Re-export the imported objects and functions
export * from './axios-instance';
export * from './axios-interceptors';

// Export the imported objects and functions as a single object
export const axios = {
    ...axiosInstance,
    ...axiosInterceptors,
};