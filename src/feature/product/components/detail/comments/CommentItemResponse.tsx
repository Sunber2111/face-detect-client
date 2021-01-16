import { ISubResponse } from "app/models/comment";
import { formatDistance } from "date-fns";
import React from "react";
import { Comment } from "semantic-ui-react";

interface IProps {
  data: ISubResponse;
  index: number;
}

const CommentItemResponse: React.FC<IProps> = ({ data, index }) => {
  
  const d = new Date();
  const now = d.toISOString();

  return (
    <Comment>
      <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/jenny.jpg" />
      <Comment.Content>
        <Comment.Author as="a">{data.username}</Comment.Author>
        <Comment.Metadata>
          <div>{formatDistance(new Date(data.time), new Date(now))}</div>
        </Comment.Metadata>
        <Comment.Text>{data.content}</Comment.Text>
      </Comment.Content>
    </Comment>
  );
};

export default CommentItemResponse;
