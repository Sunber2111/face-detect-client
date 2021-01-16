import React from "react";
import OrderTable from "./components/list/OrderTable";
import "./index.scss";
import { Pagination } from "semantic-ui-react";

const OrderPage = () => {
  return (
    <div className="order-page">
      <OrderTable />
      <div>
        <Pagination
          boundaryRange={0}
          defaultActivePage={1}
          ellipsisItem={null}
          firstItem={null}
          lastItem={null}
          siblingRange={1}
          totalPages={10}
        />
      </div>
    </div>
  );
};

export default OrderPage;
