import { ICapacity, IResponseUpdate } from "app/models/capacity";
import requests from "./agent";

const capacityAPI = {
  update: (capacity: ICapacity): Promise<IResponseUpdate> =>
    requests.put(`/capacities/${capacity._id}`, capacity),
  create: (capacity: ICapacity, productId: string): Promise<IResponseUpdate> =>
    requests.post("/capacities", { ...capacity, productId }),
  delete: (capId: string, proId: string): Promise<IResponseUpdate> =>
    requests.delete(`/capacities/${capId}/${proId}`),
};

export default capacityAPI;
