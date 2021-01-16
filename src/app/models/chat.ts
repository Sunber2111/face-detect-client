export interface ISendMessageFromEmployee {
  roomUserId: string;
  content: string;
}

export interface ICreateEmployeeChatRoom {
  employeeId: string;
}

export interface IReciveMessageFromUser{
  customerId: string;
  content: string;
}