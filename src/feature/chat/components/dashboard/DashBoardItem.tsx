import { setContentChat } from "feature/chat/chatSlice";
import React from "react";
import { useDispatch } from "react-redux";
import { GridColumn } from "semantic-ui-react";
import { Comment, Icon } from "semantic-ui-react";

interface IProps {
  idConversation: string;
  content: string;
  index: number;
}

const DashBoardItem: React.FC<IProps> = ({
  idConversation,
  content,
  index,
}) => {
  const dispatch = useDispatch();

  const handleSelect = () => {
    dispatch(
      setContentChat({ data: idConversation, index, userId: idConversation })
    );
  };

  return (
    <GridColumn computer={16} className="db-item">
      <div onClick={(e) => handleSelect()}>
        <Comment.Group>
          <Comment>
            <Comment.Avatar
              as="a"
              src="https://react.semantic-ui.com/images/avatar/small/matt.jpg"
            />
            <Comment.Content>
              <Comment.Author>Khách Hàng Thứ {index}</Comment.Author>
              <Comment.Text>{content}</Comment.Text>
            </Comment.Content>
          </Comment>
        </Comment.Group>
      </div>
    </GridColumn>
  );
};

export default DashBoardItem;
