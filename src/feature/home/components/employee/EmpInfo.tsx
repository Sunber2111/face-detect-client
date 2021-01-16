import React from "react";
import avatar from "app/assets/avatar-26.png";

const EmpInfo = () => {
  return (
    <div className="emp-item">
      <img src={avatar} />
      <div className="content d-flex f-col pl-1">
        <div className="title">Trưởng Phòng Logistics</div>
        <div className="name">Hà Lan</div>
      </div>
    </div>
  );
};

export default EmpInfo;
