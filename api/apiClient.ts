import axios, {
  AxiosError,
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosResponse,
} from 'axios';

import { printLog } from '../src/utils/utils';

const UNAUTHENTICATED_PATHS = ['/login', '/signup'];

const apiClient: AxiosInstance = axios.create({
  baseURL: 'https://your-api-endpoint.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

const isAxiosDebugActive = process.env.AXIOS_DEBUG === 'true';

export function authorizationInterceptor(config: InternalAxiosRequestConfig) {
  if (isAxiosDebugActive) {
    printLog('Request:', config);
  }

  const token = localStorage.getItem('token') != null;

  // Check if the request URL is not part of the unauthenticated paths
  if (!UNAUTHENTICATED_PATHS.includes(config.url!)) {
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      const noTokenError = new Error('No authentication token found');
      printLog(noTokenError);
      throw noTokenError; // this will interrupt the request
    }
  }

  return config;
}

// Request Interceptor
apiClient.interceptors.request.use(
  authorizationInterceptor,
  (error: AxiosError) => {
    if (isAxiosDebugActive) {
      printLog(error);
    }
    return Promise.reject(error);
  },
);

// Response Interceptor
apiClient.interceptors.response.use(
  (response: AxiosResponse) => {
    if (isAxiosDebugActive) {
      // console.log('Response:', response);
    }
    return response;
  },
  (error: AxiosError) => {
    if (isAxiosDebugActive) {
      // console.error('Response Error:', error);
    }

    if (error.response?.status === 401) {
      window.location.href = '/login';
    }
    return Promise.reject(error);
  },
);

export default apiClient;
