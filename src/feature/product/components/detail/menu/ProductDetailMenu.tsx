import { setOpenAnalysis } from "feature/product/productSlice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Menu, MenuItemProps } from "semantic-ui-react";

const ProductDetailMenu = () => {
  const [state, setstate] = useState({ activeItem: "Chi tiết sản phẩm" });

  const dispatch = useDispatch();

  const handleItemClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    { name }: MenuItemProps
  ) => {
    dispatch(setOpenAnalysis());
    setstate({ activeItem: name ? name : "" });
  };

  const { activeItem } = state;
  return (
    <Menu pointing secondary color="violet">
      <Menu.Item
        name="Chi tiết sản phẩm"
        active={activeItem === "Chi tiết sản phẩm"}
        onClick={handleItemClick}
      />
      <Menu.Item
        name="dgnd"
        active={activeItem === "dgnd"}
        onClick={handleItemClick}
      >
        Đánh giá người dùng
      </Menu.Item>
    </Menu>
  );
};

export default ProductDetailMenu;
