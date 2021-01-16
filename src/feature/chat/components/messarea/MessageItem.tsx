import React from "react";
import { Comment, GridColumn } from "semantic-ui-react";

interface IProps {
  isSend: boolean;
  content: string;
  index: number;
}

const MessageItem: React.FC<IProps> = ({ isSend, content, index }) => {
  return (
    <GridColumn computer={16}>
      <div className="content">
        <div className={isSend ? "ml-auto" : ""}>
          <Comment>
            <Comment.Avatar
              as="a"
              src="https://react.semantic-ui.com/images/avatar/small/matt.jpg"
            />
            <Comment.Content>
              <Comment.Author as="a">
                {isSend ? "Quản Lý" : "Khách Hàng Thứ" + index}
              </Comment.Author>
              <Comment.Metadata>
                <span>Today at 5:42PM</span>
              </Comment.Metadata>
              <Comment.Text>{content}</Comment.Text>
            </Comment.Content>
          </Comment>
        </div>
      </div>
    </GridColumn>
  );
};

export default MessageItem;
