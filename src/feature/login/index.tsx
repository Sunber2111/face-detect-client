import { Grid } from "@material-ui/core";
import React from "react";
import CapVideo from "./capvideo";
import FormLogin from "./form";
import { RootState } from "app/store";
import { useSelector } from "react-redux";
import "./styles.scss";
import srcimg from "app/assets/bgg.png";
import { history } from "index";

const Login = () => {
  const isNext = useSelector((s: RootState) => s.login.isNext);

  const isLoggedIn = useSelector((s: RootState) => s.login.isLoggedIn);

  if (isLoggedIn) history.push("/trangchu");

  return (
    <Grid container className="login-page">
      <Grid item xs={8} className="wrap-cont">
        <div className="block">
          <img src={srcimg} />
          <div className="content"></div>
          <p className="title-cont">Tenet</p>
          <p className="title-cont-sub">Đăng nhập để vào trang chủ 🎉</p>
        </div>
      </Grid>
      <Grid item xs={4} className="main">
        {!isNext ? <FormLogin /> : <CapVideo />}
      </Grid>
    </Grid>
  );
};

export default Login;
