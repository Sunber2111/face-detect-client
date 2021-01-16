import React from "react";
import BoxNumItem from "./BoxNumItem";
import "./styles.scss";

const ListBoxNum = () => {
  return (
    <div className="list-bn">
      <BoxNumItem />
      <BoxNumItem />
      <BoxNumItem />
    </div>
  );
};

export default ListBoxNum;
