import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { ISendMessageFromEmployee } from "app/models/chat";
import { IMessage, IReciveMessage } from "./type/message";

type chatState = {
  dataChat: {
    [key: string]: IMessage[];
  };
  contentChat: IMessage[];
  indexSelect: number;
  userSelect: string;
};

const initialState: chatState = {
  dataChat: {},
  contentChat: [],
  indexSelect: 0,
  userSelect: "",
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    reciveMessageFromUser(state, { payload }: PayloadAction<IReciveMessage>) {
      if (state.dataChat[payload.customerId]) {
        state.dataChat[payload.customerId].push({
          isSend: false,
          content: payload.content,
        });
      } else {
        state.dataChat[payload.customerId] = [];
        state.dataChat[payload.customerId].push({
          isSend: false,
          content: payload.content,
        });
      }
      if (payload.customerId === state.userSelect) {
        state.contentChat.push({
          content: payload.content,
          isSend: false,
        });
      }
    },

    sendMessageToUserState(
      state,
      { payload }: PayloadAction<ISendMessageFromEmployee>
    ) {
      if (state.dataChat[payload.roomUserId]) {
        state.dataChat[payload.roomUserId].push({
          isSend: true,
          content: payload.content,
        });
      }
      if (payload.roomUserId === state.userSelect) {
        state.contentChat.push({
          content: payload.content,
          isSend: true,
        });
      }
    },

    setContentChat(
      state,
      {
        payload,
      }: PayloadAction<{ data: string; index: number; userId: string }>
    ) {
      const data = state.dataChat[payload.data];
      if (data) {
        state.contentChat = data;
        state.indexSelect = payload.index;
        state.userSelect = payload.userId;
      }
    },
  },
});

const { reducer, actions } = chatSlice;

export const {
  reciveMessageFromUser,
  sendMessageToUserState,
  setContentChat,
} = actions;

export default reducer;
