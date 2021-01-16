import { ICapacity } from "app/models/capacity";
import { IColor } from "app/models/color";
import { IColorPhoto } from "app/models/product";

export interface IUpdateCapacity {
  data: ICapacity;
  index: number;
}

export interface IUpdateColor {
  data: IColor;
  index: number;
}

export interface IUpdateImage {
  image: string;
  index: number;
}

export interface IInsertNewColor {
  data: IColorPhoto;
  index: number;
}
