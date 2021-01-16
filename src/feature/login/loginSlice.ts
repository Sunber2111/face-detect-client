import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import {
  IAccount,
  ILoginResponse,
  IVerifyLoginResponse,
} from "./types/account";
import { IErrorFromServer } from "app/models/error";
import userAPI from "app/api/user";
import { showError } from "app/notification/notify";
import { ICurrentUser } from "app/models/user";

type LoginState = {
  isNext: Boolean;
  isLoggedIn: Boolean;
  appLoaded: Boolean;
  userId: string;
};

const initialState: LoginState = {
  isNext: false,
  isLoggedIn: false,
  appLoaded: false,
  userId: "",
};

export const login = createAsyncThunk(
  "login/",
  async (account: IAccount, { rejectWithValue }) => {
    try {
      const data = await userAPI.login(account);
      return data;
    } catch (error) {
      let err = error as IErrorFromServer;
      showError(err.description);
      return rejectWithValue(err);
    }
  }
);

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    checkCurrentSuccess(state, { payload }: PayloadAction<ICurrentUser>) {
      window.localStorage.setItem("jwt", payload.token);
      state.userId = payload.userId;
      state.appLoaded = true;
      state.isLoggedIn = true;
    },
    checkCurrentFail(state) {
      window.localStorage.removeItem("jwt");
      state.appLoaded = true;
      state.isLoggedIn = false;
    },
    verifyLoginSuccess(
      state,
      { payload }: PayloadAction<IVerifyLoginResponse>
    ) {
      window.localStorage.setItem("jwt", payload.token);
      state.appLoaded = true;
      state.isLoggedIn = true;
    },
    logoutResetState(state) {
      window.localStorage.removeItem("jwt");
      state.isNext = false;
      state.isLoggedIn = false;
      state.appLoaded = true;
      state.userId = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      login.fulfilled,
      (state, { payload }: PayloadAction<ILoginResponse>) => {
        state.userId = payload.acc_id;
        state.isNext = payload.isNext;
      }
    );
  },
});

const { reducer, actions } = loginSlice;

export const {
  checkCurrentSuccess,
  checkCurrentFail,
  verifyLoginSuccess,
  logoutResetState
} = actions;

export default reducer;
