export interface ISubResponse {
  time: string;
  _id: string;
  username: string;
  content: string;
}

interface IResponse {
  _id: string;
  contents: ISubResponse[];
}

export interface IComment {
  time: string;
  _id: string;
  username: string;
  content: string;
  rating: number;
  labels?:string[];
  response?: IResponse;
}

export interface ICommentsProduct {
  _id: string;
  comments: IComment[];
}

export interface IRequestInsertResponseComment {
  username: string;
  content: string;
}
