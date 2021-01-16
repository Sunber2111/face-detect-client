import React from "react";
import { NavLink } from "react-router-dom";

interface IProps {
  path: string;
}

const MenuItem: React.FC<IProps> = ({ path, children }) => {
  return (
    <NavLink className="menu-item" to={path}>
      {children}
    </NavLink>
  );
};

export default MenuItem;
