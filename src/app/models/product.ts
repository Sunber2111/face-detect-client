import { IColor } from "./color";

interface ICapacity {
  _id: string;
  capacity: number;
  plusCost: number;
}

export interface IPhoto {
  _id: string;
  photo: string;
}

export interface IColorPhoto {
  color: IColor;
  image?: IPhoto;
}

export interface IProduct {
  _id: string;
  name: string;
  priceOnSales: number;
  priceOnPurchase: number;
  description: string;
  installment: boolean;
  oldPrice: number;
  bonusTitle: string;
  bonusContent: string;
  isExists: boolean;
  screen: string;
  operatingSystem: string;
  frontCamera: string;
  backCamera: string;
  CPU: string;
  RAM: string;
  batteryCapacity: string;
  SIM: string;
}

export interface IProductFast {
  _id: string;
  name: string;
  isExists: boolean;
  photo?: string;
  priceOnSales: number;
  rating?: number;
}

export interface IProductDetail extends IProduct {
  capacities: ICapacity[];
  colors: IColorPhoto[];
}

export interface IResponseProductById {
  success: boolean;
  product: IProductDetail;
}

export class ProductDetail implements IProductDetail {
  capacities: ICapacity[] = [];
  colors: IColorPhoto[] = [];
  _id: string = "";
  name: string = "";
  priceOnSales: number = 0;
  priceOnPurchase: number = 0;
  description: string = "";
  installment: boolean = false;
  oldPrice: number = 0;
  bonusTitle: string = "";
  bonusContent: string = "";
  isExists: boolean = false;
  screen: string = "";
  operatingSystem: string = "";
  frontCamera: string = "";
  backCamera: string = "";
  CPU: string = "";
  RAM: string = "";
  batteryCapacity: string = "";
  SIM: string = "";

  constructor() {}
}

export interface IResposeProductFast {
  data: IProductFast[];
  success: boolean;
}
