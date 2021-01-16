import { ro } from "date-fns/locale";
import React from "react";
import { Button, Image, List } from "semantic-ui-react";

interface IProps {
  username?: string;
  roleName?: string;
  image?: string;
  isDetect?: number;
}

const ItemAccount: React.FC<IProps> = ({
  username,
  roleName,
  image,
  isDetect,
}) => {
  return (
    <List.Item className="px-1">
      <List.Content floated="right">
        {isDetect!=undefined ? (
          <Button color="green">Đã Kích Hoạt</Button>
        ) : (
          <Button color="twitter">Thêm Nhận Diện Khuôn Mặt </Button>
        )}
      </List.Content>
      <Image
        avatar
        src={
          image
            ? image
            : "https://react.semantic-ui.com/images/avatar/small/helen.jpg"
        }
      />
      <List.Content>
        <List.Header>{username}</List.Header>
        {roleName && roleName}
      </List.Content>
    </List.Item>
  );
};

export default ItemAccount;
