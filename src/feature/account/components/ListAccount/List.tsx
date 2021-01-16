import React, { useEffect } from "react";
import "./index.scss";
import { List } from "semantic-ui-react";
import ItemAccount from "./ItemAccount";
import { useDispatch, useSelector } from "react-redux";
import { getAllAccount } from "feature/account/accountSlice";
import { RootState } from "app/store";

const ListAccount = () => {
  const accounts = useSelector((state: RootState) => state.account.accounts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllAccount());
  }, []);

  return (
    <List divided verticalAlign="middle">
      {accounts.map((acc) => (
        <ItemAccount
          isDetect={acc.user?.idModelDetect}
          username={acc.user?.fullName}
          image={acc.user?.image}
          roleName={acc.role?.roleName}
        />
      ))}
    </List>
  );
};

export default ListAccount;
