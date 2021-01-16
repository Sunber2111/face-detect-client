import {
  ICommentsProduct,
  IRequestInsertResponseComment,
} from "app/models/comment";
import axios, { AxiosResponse } from "axios";

const req = axios.create({
  baseURL: process.env.REACT_APP_CMT_URL,
});

req.interceptors.request.use((config) => {
  const token = window.localStorage.getItem("jwt");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

const responseBody = (response: AxiosResponse) => response.data;

const commentAPI = {
  getAllCommentsByProductId: (id: string): Promise<ICommentsProduct> =>
    req.get(`comments/${id}`).then(responseBody),
  addNewResponse: (
    productId: string,
    indexRes: number,
    data: IRequestInsertResponseComment
  ) => req.post(`comments/response/${productId}/${indexRes}`, data),
};

export default commentAPI;
