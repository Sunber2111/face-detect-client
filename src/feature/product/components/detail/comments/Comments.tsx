import { RootState } from "app/store";
import React from "react";
import { useSelector } from "react-redux";
import { Comment, Header } from "semantic-ui-react";
import CommentItem from "./CommentItem";

const Comments = () => {
  const comments = useSelector((state: RootState) => state.products.comments);

  const productId = useSelector(
    (state: RootState) => state.products.productDetail?._id
  );

  return (
    <Comment.Group>
      {comments &&
        comments.comments.map((cmt, index) => (
          <CommentItem data={cmt} index={index} proId={productId} />
        ))}
    </Comment.Group>
  );
};

export default Comments;
