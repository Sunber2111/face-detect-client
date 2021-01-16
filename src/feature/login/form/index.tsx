import { Button } from "@material-ui/core";
import React, { useState } from "react";
import "./styles.scss";
import TextField from "@material-ui/core/TextField";
import { GoogleLogin } from "react-google-login";
import { Account } from "../types/account";
import { useDispatch } from "react-redux";
import { login } from "../loginSlice";

const FormLogin: React.FC = () => {
  const [account, setAccount] = useState(new Account());

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(login(account));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setAccount({ ...account, [e.target.name]: e.target.value });
  };

  return (
    <div className="form-login">
      <p className="title-form">Đăng nhập với tài khoản</p>
      <div>
        <p className="title-input">Tên Đăng Nhập</p>
        <TextField
          value={account.namelogin}
          onChange={(e) => handleChange(e)}
          fullWidth
          name="namelogin"
          variant="outlined"
        />
      </div>
      <div>
        <p className="title-input">Mật Khẩu</p>
        <TextField
          autoComplete="new-password"
          type="password"
          fullWidth
          value={account.password}
          onChange={(e) => handleChange(e)}
          name="password"
          variant="outlined"
        />
      </div>
      <div className="fg-p">
        <p>Quên Mật khẩu ?</p>
      </div>
      <Button
        onClick={(e) => handleClick()}
        variant="contained"
        fullWidth
        color="primary"
        className="login-btn"
      >
        Đăng Nhập
      </Button>
      <hr />
      <div className="btn-log-gg"></div>
    </div>
  );
};

export default FormLogin;
