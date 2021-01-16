import React from "react";
import "./styles.scss";
import { BiUserCircle } from "react-icons/bi";
import { BsBell } from "react-icons/bs";
import Menu from "./components/menu/Menu";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <div className="content-left">
        <Menu />
      </div>
      <div className="content-right">
        <div className="bell">
          <BsBell />
        </div>
        <div className="content-info">
          <p className="name">Hoàng Phúc</p>
          <p className="role">Điều Hành</p>
        </div>
        <BiUserCircle />
      </div>
    </div>
  );
};

export default NavBar;
