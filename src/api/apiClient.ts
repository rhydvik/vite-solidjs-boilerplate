import axios, {
  AxiosError,
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosResponse,
  AxiosRequestConfig,
} from 'axios';

// import { printLog } from '../utils/utils';
/*eslint-disable*/

const UNAUTHENTICATED_PATHS = ["/login", "/signup"];

const apiClient: AxiosInstance = axios.create({
  baseURL: "https://wft-geo-db.p.rapidapi.com/",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// const isAxiosDebugActive = process.env.AXIOS_DEBUG === 'true';
const isAxiosDebugActive = true;
export function authorizationInterceptor(config: InternalAxiosRequestConfig) {
  if (isAxiosDebugActive) {
    // printLog('Request:', config);
  }

  const token = localStorage.getItem("token") != null;

  // Check if the request URL is not part of the unauthenticated paths
  // if (!UNAUTHENTICATED_PATHS.includes(config.url!)) {
  //   if (token) {
  //     config.headers.Authorization = `Bearer ${token}`;
  //   } else {
  //     const noTokenError = new Error('No authentication token found');
  //     // printLog(noTokenError);
  //     throw noTokenError; // this will interrupt the request
  //   }
  // }

  return config;
}

// Request Interceptor
apiClient.interceptors.request.use(
  authorizationInterceptor,
  (error: AxiosError) => {
    if (isAxiosDebugActive) {
      // printLog(error);
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
    if (error.response) {
      const { status } = error.response;
      if (status >= 300 && status < 400) {
        console.error("Redirection Error:", error.response.data);
      } else if (status >= 400 && status < 500) {
        window.location.href = "/login";

        console.error("Client Error:", error.response.data);
      } else if (status >= 500) {
        console.error("Server Error:", error.response.data);
      }
    } else if (error.request) {
      console.error("Request Error:", error.request);
    } else {
      console.error("Error:", error.message);
    }
    return Promise.reject(error);
  },
);

export const get = async <R = any>(
  path: string,
  params?: AxiosRequestConfig,
): Promise<R> => {
  return apiClient.get<R>(path, params).then((response) => response.data);
};

export const post = async <R = any>(
  path: string,
  data?: any,
  params?: AxiosRequestConfig,
): Promise<R> => {
  return apiClient
    .post<R>(path, data, params)
    .then((response) => response.data);
};

export const put = async <R = any>(
  path: string,
  data?: any,
  params?: AxiosRequestConfig,
): Promise<R> => {
  return apiClient.put<R>(path, data, params).then((response) => response.data);
};

export const del = async <R = any>(
  path: string,
  params?: AxiosRequestConfig,
): Promise<R> => {
  return apiClient.delete<R>(path, params).then((response) => response.data);
};

export default apiClient;
