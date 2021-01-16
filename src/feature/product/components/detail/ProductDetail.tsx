import { RootState } from "app/store";
import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./index.scss";
import ProductDetailInfo from "./ProductDetailInfo";
import ProductDetailMenu from "./menu/ProductDetailMenu";
import ProductDetailNLP from "./nlp/ProductDetailNLP";

const ProductDetail: React.FC = () => {
  const showAnalysis = useSelector(
    (state: RootState) => state.products.showAnalysis
  );
  
  return (
    <div className="pro-detail">
      <ProductDetailMenu />
      {showAnalysis ? <ProductDetailNLP /> : <ProductDetailInfo  />}
    </div>
  );
};

export default React.memo(ProductDetail);
