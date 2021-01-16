export interface ICapacity {
  _id: string;
  capacity: number;
  plusCost: number;
}

export interface IResponseUpdate {
  success: boolean;
  message: string;
  id?: string;
}
