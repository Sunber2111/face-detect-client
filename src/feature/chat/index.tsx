import { createMyRoom, disconnectToServer } from "app/api/chat";
import { RootState } from "app/store";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Grid, GridColumn, GridRow } from "semantic-ui-react";
import DashBoard from "./components/dashboard/DashBoard";
import MessageArea from "./components/messarea/MessageArea";
import "./index.scss";

const ChatPage = () => {
  const userId = useSelector((state: RootState) => state.login.userId);

  const dataChat = useSelector((state: RootState) => state.chat.dataChat);

  const checkContent = () => {
    let checked = false;
    for (let x in dataChat) {
      return true;
    }
    return checked;
  };

  useEffect(() => {
    createMyRoom("1234");
    return () => {
      if (userId) disconnectToServer(userId);
    };
  }, []);

  return (
    <div className="chat-page">
      {checkContent() ? (
        <Grid>
          <GridRow>
            <GridColumn computer={5}>
              <p>Danh Sách Trò Chuyện Với Khách Hàng</p>
              <DashBoard />
            </GridColumn>
            <GridColumn computer={11}>
              <MessageArea />
            </GridColumn>
          </GridRow>
        </Grid>
      ) : (
        <p className='ml-1'>Chưa có cuộc trò chuyện nào được gửi đến</p>
      )}
    </div>
  );
};

export default ChatPage;
