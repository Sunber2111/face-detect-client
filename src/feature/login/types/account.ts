export interface IAccount {
  namelogin: String;
  password: String;
}

export class Account implements IAccount {
  namelogin: String = "";
  password: String = "";
}

export interface ILoginResponse {
  isNext: Boolean;
  acc_id: string;
}

export interface IVerifyLoginResponse {
  token: string;
  name: string;
  image: string;
}
