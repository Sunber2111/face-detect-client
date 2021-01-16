export interface IColor {
  _id: string;
  indexColor: string;
  nameColor: string;
  plusCost: number;
}

export interface IResponseChangeImage {
  success: boolean;
  image: string;
}

export interface IResponseInsertColor {
  success: boolean;
  message: string;
  id: string;
}
