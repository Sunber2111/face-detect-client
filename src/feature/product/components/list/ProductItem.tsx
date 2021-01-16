import React from "react";
import { Button, GridColumn } from "semantic-ui-react";
import ip from "app/assets/ip12.png";
import { Link } from "react-router-dom";
import { IProductFast } from "app/models/product";

const ProductItem: React.FC<{ data: IProductFast }> = ({ data }) => {
  return (
    <GridColumn computer={4} mobile={16}>
      <div className="pro-item">
        <div className="wrap-img">
          <img
            src={
              data.photo ||
              "https://hoanghamobile.com/Uploads/Originals/2020/10/14/202010141135214610_iPhone 12 mới (4).png;width=720;height=500;watermark=logo;crop=auto;quality=80;format=jpg"
            }
            alt="image"
          />
        </div>
        <div className="des-pro">
          <div className="rating">
            <Button color="yellow" content="5" basic size="small" />
          </div>
          <div className="price">{data.priceOnSales} đ</div>
        </div>
        <div className="wrap-name">
          <p className="name">{data.name}</p>
        </div>
        <div className="wrap-btn">
          <Button>{data.isExists ? "Đang Bán" : " Ngừng Bán"}</Button>
          <Button
            as={Link}
            to={`/sanpham/${data._id}`}
            basic
            color="blue"
            className="btn-dt"
          >
            Chi Tiết
          </Button>
        </div>
      </div>
    </GridColumn>
  );
};

export default ProductItem;
