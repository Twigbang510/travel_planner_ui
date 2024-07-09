import axios, { AxiosInstance } from "axios";
import { appConfig } from "config";

const request: AxiosInstance = axios.create({
  baseURL: appConfig.api.url,
  timeout: appConfig.api.timeout,
});

request.interceptors.request.use(
  (axiosConfig) => axiosConfig,
  (error) => Promise.reject(error)
);

request.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error?.response?.status === 401) {
      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);

export function setTokenRequestHeader(accessToken?: string) {
  request.defaults.headers.authorization = `Bearer ${accessToken}`;
}

export function removeTokenRequestHeader() {
  request.defaults.headers.authorization = "";
}

export default request;
