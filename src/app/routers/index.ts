import React from "react";
import { RouteComponentProps } from "react-router-dom";
import Home from "feature/home";
import Product from "feature/product";
import ChatPage from "feature/chat";
import OrderPage from "feature/order";
import Account from 'feature/account'

interface IValueRouter {
  path: string;
  component: React.ComponentType<RouteComponentProps<any>>;
}

const routers: IValueRouter[] = [
  {
    path: "/trangchu",
    component: Home,
  },
  {
    path: "/sanpham",
    component: Product,
  },
  {
    path: "/trochuyen",
    component: ChatPage,
  },
  {
    path: "/hoadon",
    component: OrderPage,
  },
  {
    path: "/dstaikhoan",
    component: Account,
  },
];

export default routers;
