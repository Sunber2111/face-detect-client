import React from "react";
import ViewListIcon from "@material-ui/icons/ViewList";
import "./styles.scss";
import { Icon } from "semantic-ui-react";

const NavigationHeader = () => {
  return (
    <div className="nav-header">
      <ViewListIcon />
      <Icon name='user circle' size='large' />
    </div>
  );
};

export default NavigationHeader;
