import { sendMessageToUser } from "app/api/chat";
import InputText from "app/common/components/InputText";
import { RootState } from "app/store";
import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Button, Form } from "semantic-ui-react";

const MessageSendBar = () => {
  const [state, setstate] = useState("");

  const userSelect = useSelector((state: RootState) => state.chat.userSelect);

  const handleAddResponse = () => {
    if (userSelect) {
      sendMessageToUser({
        content: state,
        roomUserId: userSelect,
      });
      setstate("");
    }
  };

  return (
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
  );
};

export default MessageSendBar;
