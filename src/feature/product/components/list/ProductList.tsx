import React, { useEffect } from "react";
import ProductItem from "./ProductItem";
import "./index.scss";
import { Grid } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProductFast } from "feature/product/productSlice";
import { RootState } from "app/store";

const ProductList = () => {
  const productList = useSelector(
    (state: RootState) => state.products.productList
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProductFast());
  }, []);

  return (
    <Grid className="pro-list-container">
      {productList.map((data) => (
        <ProductItem data={data} />
      ))}
    </Grid>
  );
};

export default ProductList;
