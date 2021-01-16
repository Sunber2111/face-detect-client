import React, { useState } from "react";
import "./styles.scss";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IconType } from "react-icons/lib";

interface IProps {
  name: string;
  Icon: IconType
}

const DropDownItem: React.FC<IProps> = ({ children, name,Icon }) => {
  const [isOpen, setisOpen] = useState(false);

  return (
    <div className={!isOpen ? "dropdown" : "dropdown dropdown-select"}>
      <div onClick={(e) => setisOpen(!isOpen)} className="dropdown-link">
        <div>
          <Icon />
        </div>
        <div className="title-link">{name}</div>
        <div className="isDrop">{isOpen ? <IoIosArrowDown /> : <IoIosArrowUp />}</div>
      </div>
      <div className="dropdown-content">{isOpen && children}</div>
    </div>
  );
};

export default DropDownItem;
