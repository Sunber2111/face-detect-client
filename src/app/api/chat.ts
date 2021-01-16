import { appDispatch } from "../store";
import io from "socket.io-client";
import {
  IReciveMessageFromUser,
  ISendMessageFromEmployee,
} from "app/models/chat";
import { reciveMessageFromUser } from "feature/chat/chatSlice";
import { sendMessageToUserState } from "feature/chat/chatSlice";
const CHAT_URL = process.env.REACT_APP_CHAT_URL as string;

let socket: SocketIOClient.Socket;

export const createMyRoom = (employeeId: string) => {
  console.log("create chat room");

  socket = io.connect(CHAT_URL);

  socket.emit("create_employee_room", { employeeId: employeeId });

  socket.on("recive_from_user", (data: IReciveMessageFromUser) => {});

  socket.on(
    "recive_from_user",
    (data: { customerId: string; content: string }) => {
      console.log(data);
      appDispatch(reciveMessageFromUser(data));
    }
  );
};

export const disconnectToServer = (employeeId: string) => {
  socket.close();
};

export const sendMessageToUser = (data: ISendMessageFromEmployee) => {
  socket.emit("send_message_to_user", data);
  appDispatch(
    sendMessageToUserState({
      content: data.content,
      roomUserId: data.roomUserId,
    })
  );
};
