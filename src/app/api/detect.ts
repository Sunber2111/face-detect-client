import { IVerifyLoginResponse } from "feature/login/types/account";
import axios, { AxiosResponse } from "axios";

const END_POINT = "/facedetect";

const req = axios.create({
  baseURL: process.env.REACT_APP_AUTH_URL,
});

req.interceptors.request.use((config) => {
  const token = window.localStorage.getItem("jwt");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

const responseBody = (response: AxiosResponse) => response.data;

const postForm = (url: string, file: Blob) => {
  let formData = new FormData();
  formData.append("File", file);
  return req
    .post(url, formData, {
      headers: { "Content-type": "multipart/form-data" },
    })
    .then(responseBody);
};

const DetectAPI = {
  detectFace: (data: any, accId: string): Promise<IVerifyLoginResponse> =>
    postForm(`${END_POINT}?a_id=${accId}`, data),
};

export default DetectAPI;
