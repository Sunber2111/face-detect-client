import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import userAPI from "app/api/user";
import { IAccountInfo } from "app/models/user";
import { AppDispatch } from "app/store";

type accountState = {
  accounts: IAccountInfo[];
};

const initialState: accountState = {
  accounts: [],
};

export const getAllAccount = () => async (dispatch: AppDispatch) => {
  try {
    const data = await userAPI.getallaccount();
    dispatch(setListAccount(data));
  } catch (error) {
    console.log(error);
  }
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setListAccount(state, { payload }: PayloadAction<IAccountInfo[]>) {
      state.accounts = payload;
    },
  },
});

const { reducer, actions } = accountSlice;

export const { setListAccount } = actions;

export default reducer;
