import { IAccount, ILoginResponse } from "feature/login/types/account";
import { ICurrentUser, IAccountInfo } from "app/models/user";
import axios, { AxiosResponse } from "axios";

const req = axios.create({
  baseURL: process.env.REACT_APP_AUTH_URL,
});

req.interceptors.request.use((config) => {
  const token = window.localStorage.getItem("jwt");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

const responseBody = (response: AxiosResponse) => response.data;

const userAPI = {
  login: (account: IAccount): Promise<ILoginResponse> =>
    req.post("login", account).then(responseBody),
  getCurrent: (): Promise<ICurrentUser> =>
    req.get("/user/current").then(responseBody),
  getallaccount: ():Promise<IAccountInfo[]> =>req.get('getallaccount').then(responseBody)
};

export default userAPI;
