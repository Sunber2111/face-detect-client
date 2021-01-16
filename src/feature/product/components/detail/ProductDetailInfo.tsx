import React, { useEffect } from "react";
import pic from "app/assets/ip12.png";
import { Button } from "semantic-ui-react";
import ProductDetailBody from "./ProductDetailBody";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductById,
  handleChangeStateBuy,
  turnOnLoadingProduct,
} from "feature/product/productSlice";
import { RootState } from "app/store";
import swal from "sweetalert";



const ProductDetailInfo = () => {

  const { loading, productDetail } = useSelector(
    (state: RootState) => state.products
  );

  const dispatch = useDispatch();

  const handleStop = () => {
    if (productDetail?._id) {
      swal({
        title: "Bạn muốn ngưng bán sản phẩm này ?",
        text: "Hành động này sẽ ngưng bán sản phẩm này !",
        icon: "warning",
        buttons: ["Không", "Có"],
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          dispatch(handleChangeStateBuy(productDetail._id));
        }
      });
    }
  };

  const handleContinue = () => {
    if (productDetail?._id) {
      swal({
        title: "Bạn muốn bán sản phẩm này ?",
        text: "Hành động này sẽ kiến sản phẩm được bán này !",
        icon: "warning",
        buttons: ["Không", "Có"],
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          dispatch(handleChangeStateBuy(productDetail._id));
        }
      });
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="pro-de-info">
      <div className="info-header">
        <div className="img">
          <img src={productDetail?.colors[0]?.image?.photo || pic} alt="img" />
        </div>
        <div className="title">
          <div className="name">{productDetail?.name}</div>
          <div className="btn-group">
            <Button color="violet">Đổi ảnh</Button>
          </div>
        </div>
        <div className="ml-auto">
          <div className="d-flex f-col">
            <div className="d-flex f-row">
              <label className="mr-1">Trạng thái</label>
            </div>
            <div className="d-flex f-col mt-1">
              {!productDetail?.isExists ? (
                <>
                  <Button color="red">Ngưng Bán !</Button>
                  <Button
                    basic
                    className="mt-1"
                    onClick={(e) => handleContinue()}
                  >
                    Đang Bán
                  </Button>
                </>
              ) : (
                <>
                  <Button basic onClick={(e) => handleStop()}>
                    Ngưng Bán !
                  </Button>
                  <Button color="green" className="mt-1">
                    Đang Bán
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <ProductDetailBody />
    </div>
  );
};

export default React.memo(ProductDetailInfo);
