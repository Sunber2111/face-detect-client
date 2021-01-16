import InputText from "app/common/components/InputText";
import { IComment } from "app/models/comment";
import { insertNewResponse } from "feature/product/productSlice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Label, Rating } from "semantic-ui-react";
import { Button, Comment, Form, Header } from "semantic-ui-react";
import CommentItemResponse from "./CommentItemResponse";
import { formatDistance } from "date-fns";
interface IProps {
  data: IComment;
  index: number;
  proId?: string;
}

const CommentItem: React.FC<IProps> = ({ data, index, proId }) => {
  const [state, setstate] = useState("");

  const dispatch = useDispatch();

  const handleAddResponse = () => {
    if (proId) {
      dispatch(
        insertNewResponse(proId, index, {
          content: state,
          username: "Quản Lý Trang Web",
        })
      );

      setstate("");
    }
  };

  const genClassColor = (text: string) => {
    if (text === "Sản Phẩm Tệ") return "red";
    if (text === "Sản Phẩm Tốt") return "blue";
    if (text === "Bình luận / Hỏi đáp Sản Phẩm") return "yellow";
    if (text === "Nghiệp Vụ Tệ") return "orange";
    if (text === "Nghiệp Vụ Tốt") return "green";
    return "violet";
  };

  return (
    <Comment className="mb-1">
      {data.labels && (
        <div className="labels">
          {data.labels.map((val) => (
            <Label color={genClassColor(val)} basic>
              {val}
            </Label>
          ))}
        </div>
      )}
      <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/matt.jpg" />
      <Comment.Content>
        <Comment.Author as="a">{data.username}</Comment.Author>
        <Comment.Metadata>
          <div>{formatDistance(new Date(data.time), new Date())}</div>
        </Comment.Metadata>
        <Comment.Text>
          <Rating icon="star" defaultRating={data.rating} maxRating={5} />
        </Comment.Text>
        <Comment.Text>{data.content}</Comment.Text>
      </Comment.Content>
      {data.response && (
        <Comment.Group>
          {data.response.contents.map((res, index) => (
            <CommentItemResponse data={res} index={index} />
          ))}
        </Comment.Group>
      )}
      <Form className="ml-1">
        <InputText value={state} setValue={setstate} size="small">
          <Button
            className="mt-1 "
            floated="right"
            onClick={(e) => handleAddResponse()}
            content="Gửi"
            labelPosition="left"
            size="medium"
            icon="edit"
            primary
          />
        </InputText>
      </Form>
    </Comment>
  );
};

export default CommentItem;
