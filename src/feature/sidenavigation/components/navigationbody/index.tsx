import React from "react";
import DropDownItem from "../dropdownitem";
import ItemMenu from "../itemmenu";
import "./styles.scss";
import { VscListUnordered } from "react-icons/vsc";
import { GiHumanPyramid } from "react-icons/gi";
import { CgLogOut } from "react-icons/cg";
import { logoutResetState } from "feature/login/loginSlice";
import { useDispatch } from "react-redux";

const NavigationBody = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutResetState());
  };

  return (
    <div className="nav-body">
      <p className="title">Apps</p>
      <div className="list-item">
        <ItemMenu
          path="/trangchu"
          iconProps={{ name: "chart bar outline" }}
          name="Trang Chủ"
        />

        <DropDownItem name="Nhân Viên" Icon={GiHumanPyramid}>
          <ItemMenu
            path="/dsnhanvien"
            iconProps={{ name: "user circle outline" }}
            name="Danh SáchNhân Viên"
          />
          <ItemMenu
            path="/nhanvien/chinhsua"
            iconProps={{ name: "edit outline" }}
            name="Chỉnh sửa thông tin"
          />
        </DropDownItem>
        <DropDownItem name="Hóa Đơn" Icon={VscListUnordered}>
          <ItemMenu
            path="/hoadon"
            iconProps={{ name: "ordered list" }}
            name="Hóa Đơn"
          />
          <ItemMenu
            path="/taohoadonxuat"
            iconProps={{ name: "edit outline" }}
            name="Tạo Hóa Đơn Xuất"
          />
        </DropDownItem>

        <ItemMenu
          path="/trochuyen"
          iconProps={{ name: "paper plane outline" }}
          name="Trò chuyện khách hàng"
        />
        <ItemMenu
          path="/vanchuyen"
          iconProps={{ name: "cart" }}
          name="Vận Chuyển"
        />
        <DropDownItem name="Sản phẩm" Icon={VscListUnordered}>
          <ItemMenu
            path="/sanpham"
            iconProps={{ name: "product hunt" }}
            name="Danh Sách Sản Phẩm"
          />
          <ItemMenu
            path="/sanpham/tao-san-pham"
            iconProps={{ name: "edit outline" }}
            name="Tạo Sản Phẩm"
          />
        </DropDownItem>
        <ItemMenu
            path="/dstaikhoan"
            iconProps={{ name: "audio description" }}
            name="Danh Sách Tài Khoản"
          />
        <div className="item-menu" onClick={(e) => handleLogout()}>
          <CgLogOut />
          <p>Đăng xuất</p>
        </div>
      </div>
    </div>
  );
};

export default NavigationBody;
