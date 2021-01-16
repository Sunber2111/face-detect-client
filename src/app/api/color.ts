import {
  IColor,
  IResponseChangeImage,
  IResponseInsertColor,
} from "app/models/color";
import requests from "./agent";

const colorAPI = {
  update: (data: IColor) => requests.put(`/colors/${data._id}`, data),
  changePhoto: (
    oldphotoId: string,
    data: any,
    name: string
  ): Promise<IResponseChangeImage> =>
    requests.putPhoto(`/photos/${oldphotoId}`, data, name),
  insert: (data: IColor): Promise<IResponseInsertColor> =>
    requests.post("/colors", data),
  delete: (id: string,productId:string) => requests.delete(`/colors/${id}/${productId}`),
};

export default colorAPI;
