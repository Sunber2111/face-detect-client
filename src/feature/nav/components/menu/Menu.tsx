import React from "react";
import MenuItem from "./MenuItem";
import { AiOutlineHome, AiOutlineUser,AiOutlineStar } from "react-icons/ai";
import { VscListUnordered } from "react-icons/vsc";
import { MdBorderColor, MdDriveEta } from "react-icons/md";
import { CgProductHunt } from "react-icons/cg";

const Menu = () => {
  return (
    <div className="menu">
      <MenuItem path="/trangchu">
        <AiOutlineHome />
      </MenuItem>
      <MenuItem path="/nhanvien">
        <AiOutlineUser />
      </MenuItem>
      <MenuItem path="/hoadonxuat">
        <VscListUnordered />
      </MenuItem>
      <MenuItem path="/taohoadonxuat">
        <MdBorderColor />
      </MenuItem>
      <MenuItem path="/vanchuyen">
        <MdDriveEta />
      </MenuItem>
      <MenuItem path="/sanpham">
        <CgProductHunt />
      </MenuItem>
      <MenuItem path="/star">
        <AiOutlineStar color='#FF9F43' />
      </MenuItem>
    </div>
  );
};

export default Menu;
