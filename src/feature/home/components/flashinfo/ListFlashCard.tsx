import React from "react";
import FlashCard from "./FlashCard";
import "./styles.scss";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { MdAttachMoney } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import { BsBag } from "react-icons/bs";

const ListFlashCard = () => {
  return (
    <div className="list-flash-card">
      <FlashCard
        data={[1, 23, 4, 40, 5, 30]}
        color="#7367F0"
        number="79.2 k"
        Icon={AiOutlineUsergroupAdd}
        title="Người dùng"
      />
      <FlashCard
        data={[1, 22, 51, 1,48]}
        color="#28C76F"
        Icon={MdAttachMoney}
        bgColor="#DFF7EA"
        number="114 k"
        title="doanh thu mỗi giờ"
      />
      <FlashCard
        data={[23, 14, 12, 9, 1, 23, 4]}
        color="#EA5455"
        bgColor="#FFF1E3"
        number="39.2 k"
        Icon={FiShoppingCart}
        title="Giờ dùng của mỗi người"
      />
      <FlashCard
        data={[1, 20, 1, 30, 5, 1]}
        color="#FF9F43"
        bgColor="#FCE6E6"
        Icon={BsBag}
        number="98 k"
        title="Lượng $"
      />
    </div>
  );
};

export default ListFlashCard;
