import { IResponseUploadPhoto } from "app/models/photo";
import requests from "./agent";

const photoAPI = {
  insert: (data: File, name: string): Promise<IResponseUploadPhoto> =>
    requests.postPhoto("/photos", data, name),
};

export default photoAPI;
