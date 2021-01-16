export interface IResponseUploadPhoto {
  success: boolean;
  message: string;
  data: {
    photo: string;
    _id: string;
  };
}

