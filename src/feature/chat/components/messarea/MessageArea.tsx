import React, { useState } from "react";
import { Button, Comment, Form, Grid, GridRow } from "semantic-ui-react";
import "./index.scss";
import MessageItem from "./MessageItem";
import "./index.scss";
import { useSelector } from "react-redux";
import { RootState } from "app/store";
import InputText from "app/common/components/InputText";
import MessageSendBar from "./MessageSendBar";

const MessageArea = () => {
  const contentChat = useSelector((state: RootState) => state.chat.contentChat);

  const indexSelect = useSelector((state: RootState) => state.chat.indexSelect);


  return (
    <div className="mess-area">
      <Comment.Group>
        {contentChat.map((cont, index) => (
          <MessageItem
            index={indexSelect}
            content={cont.content}
            key={index}
            isSend={cont.isSend}
          />
        ))}
      </Comment.Group>
      <MessageSendBar/>
    </div>
  );
};

export default MessageArea;
