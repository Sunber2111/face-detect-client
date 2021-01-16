import { RootState } from "app/store";
import React from "react";
import { useSelector } from "react-redux";
import { Grid, GridRow } from "semantic-ui-react";
import DashBoardItem from "./DashBoardItem";
import "./index.scss";

const DashBoard = () => {
  const dataChat = useSelector((state: RootState) => state.chat.dataChat);

  const initialData = () => {
    const arr = [];
    let index = 1;
    for (let x in dataChat) {
      arr.push(
        <DashBoardItem
          index={index}
          idConversation={x}
          content={dataChat[x][dataChat[x].length - 1].content}
        />
      );
      index++;
    }
    return arr;
  };

  return <div className="db">{initialData()}</div>;
};

export default DashBoard;
