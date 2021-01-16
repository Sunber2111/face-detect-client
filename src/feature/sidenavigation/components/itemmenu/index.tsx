import React from "react";
import { NavLink } from "react-router-dom";
import { Icon, IconProps } from "semantic-ui-react";
import "./styles.scss";

interface IProps {
  path: string;
  name: string;
  isSelect?: boolean;
  iconProps: IconProps;
  changeColor?: string;
}

const ItemMenu: React.FC<IProps> = ({
  isSelect,
  name,
  path,
  iconProps,
  changeColor,
}) => {
  
  const genClasses = () => {
    let baseClass: string = "item-menu";
    if (isSelect) baseClass += " item-menu-select";
    if (changeColor) baseClass += ` ${changeColor}`;
    return baseClass;
  };

  return (
    <NavLink exact to={path} className={genClasses()}>
      <div>
        <Icon name={iconProps.name} />
      </div>
      <p>{name}</p>
    </NavLink>
  );
};

export default React.memo(ItemMenu);
