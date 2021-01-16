import {
  IProduct,
  IProductDetail,
  IProductFast,
  IResponseProductById,
  IResposeProductFast,
} from "app/models/product";
import requests from "./agent";

const productAPI = {
  getById: (id: string): Promise<IResponseProductById> =>
    requests.get(`/products/${id}`),
  updateStateExists: (productId: string) =>
    requests.get(`/products/updatestate/${productId}`),
  updateProduct: (data: IProductDetail) => requests.put("/products", data),
  insertNewColor: (productId: string, idColor: string, idPhoto: string) =>
    requests.get(
      `/products/insert_new_color/${productId}/${idColor}/${idPhoto}`
    ),
  insert: (data: IProductDetail) => requests.post("/products", data),
  getAll: (): Promise<IResposeProductFast> => requests.get("/products/getFast"),
};

export default productAPI;
