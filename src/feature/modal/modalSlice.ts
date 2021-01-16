import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { IModal } from "./types/modal";

type modalState = {
  body: any;
  open: boolean;
  size?: "small" | "mini" | "tiny" | "large" | "fullscreen" | undefined;
};

const initialState: modalState = {
  body: null,
  open: false,
  size: undefined,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal(state, { payload }: PayloadAction<IModal>) {
      state.body = payload.body;
      state.open = true;
      state.size = payload.size ? payload.size : "small";
    },
    closeModal: (state) => initialState,
  },
});

const { reducer, actions } = modalSlice;

export const { openModal, closeModal } = actions;

export default reducer;
