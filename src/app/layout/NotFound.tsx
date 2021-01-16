import React from "react";
import { Segment, Button, Header, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <Header icon>
        <Icon name="search" />
        Oops - Tìm hong thấy trang này.
      </Header>
      <Segment.Inline>
        <Button as={Link} to="/trangchu" primary>
          Trở lại trang chủ
        </Button>
      </Segment.Inline>
    </div>
  );
};

export default NotFound;
