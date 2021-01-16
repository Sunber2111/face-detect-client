import { configureStore, combineReducers, Action } from "@reduxjs/toolkit";
import { ThunkAction } from "redux-thunk";
import loginReducer from "feature/login/loginSlice";
import navigationReducer from "feature/sidenavigation/navigationSlice";
import homeReducer from "feature/home/homeSlice";
import modalReducer from "feature/modal/modalSlice";
import productReducer from "feature/product/productSlice";
import chatReducer from "feature/chat/chatSlice";
import accountReducer from "feature/account/accountSlice";

const rootReducer = combineReducers({
  login: loginReducer,
  navigation: navigationReducer,
  home: homeReducer,
  modal: modalReducer,
  products: productReducer,
  chat: chatReducer,
  account:accountReducer
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

export const appDispatch = store.dispatch;

export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export default store;
