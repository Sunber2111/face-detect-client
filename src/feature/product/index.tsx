import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import ProductDetail from "./components/detail/ProductDetail";
import ProductList from "./components/list/ProductList";
import "./index.scss";

const Product = () => {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route
        exact
        path={`${match.url}`}
        component={() => (
          <div className="pro-list">
            <p className="title">Shop</p>
            <ProductList />
          </div>
        )}
      />
      <Route
        exact
        path={`${match.url}/tao-san-pham`}
        component={ProductDetail}
      />
      <Route path={`${match.url}/:phoneId`} component={ProductDetail} />
    </Switch>
  );
};

export default Product;
