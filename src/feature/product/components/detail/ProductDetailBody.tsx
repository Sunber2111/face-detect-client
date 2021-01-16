import React, { useEffect, useState } from "react";
import { Button, Grid, GridColumn, GridRow } from "semantic-ui-react";
import Capacities from "./capacity/Capacities";
import ColorsCardItem from "./colors/ColorsCardItem";
import { BsArrowUpDown } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "app/store";
import { ProductDetail } from "app/models/product";
import { Form as FinalForm, Field } from "react-final-form";
import { Form, Checkbox } from "semantic-ui-react";
import TextInput from "app/common/form/TextInput";
import InputNumber from "app/common/form/NumberInput";
import productAPI from "app/api/product";
import { showError, showMessage } from "app/notification/notify";
import {
  getProductById,
  resetStateProduct,
  turnOffLoadingProduct,
  turnOnLoadingProduct,
} from "feature/product/productSlice";
import { useParams } from "react-router-dom";
import { history } from "index";

interface IParams {
  phoneId: string;
}

const ProductDetailBody = () => {
  const productDetailState = useSelector(
    (state: RootState) => state.products.productDetail
  );

  const params = useParams<IParams>();

  const [productDetail, setproductDetail] = useState(new ProductDetail());

  const dispatch = useDispatch();

  const [traGop, settraGop] = useState(false);

  useEffect(() => {
    if (productDetailState && productDetailState._id == params.phoneId) {
      setproductDetail(productDetailState);
      settraGop(productDetailState.installment);
    }
    if (productDetailState?._id != params.phoneId && params.phoneId) {
      dispatch(turnOnLoadingProduct());
      dispatch(getProductById(params.phoneId));
    }
    if (!params.phoneId) {
      dispatch(turnOffLoadingProduct());
    }
  }, []);

  return (
    <Grid>
      <GridRow>
        <FinalForm
          onSubmit={async (value: any) => {
            try {
              value.installment = traGop;
              if (params.phoneId) {
                await productAPI.updateProduct(value);
                showMessage("Cập nhật thành công");
              } else {
                await productAPI.insert(value);
                showMessage("Thêm mới sản phẩm thành công");
                history.push("/sanpham");
              }
            } catch (error) {
              showError("Thất bại");
            }
          }}
          initialValues={productDetail}
          render={({ handleSubmit }) => (
            <Form onSubmit={handleSubmit} className="w-100 mt-2">
              <Grid>
                <GridRow>
                  <GridColumn computer={8} className="wrap-info">
                    <Field
                      component={TextInput}
                      name="name"
                      title="Tên sản phẩm"
                      width="16"
                      placeholder="name"
                      value={productDetail.name}
                    />
                    <Field
                      component={TextInput}
                      name="bonusTitle"
                      title="Khuyến mãi"
                      width="16"
                      placeholder="Khuyến mãi"
                      value={productDetail.bonusTitle}
                    />
                    <Field
                      component={TextInput}
                      name="bonusContent"
                      title="Nội dung khuyến mãi"
                      width="16"
                      placeholder="Nội dung khuyến mãi"
                      value={productDetail.bonusContent}
                    />
                    <Field
                      component={TextInput}
                      name="description"
                      title="Mô Tả"
                      width="16"
                      placeholder="Mô tả"
                      value={productDetail.description}
                    />
                    <Field
                      component={TextInput}
                      name="backCamera"
                      title="Camera sau"
                      width="16"
                      placeholder="Camera sau"
                      value={productDetail.backCamera}
                    />
                    <Field
                      component={TextInput}
                      name="SIM"
                      title="Thông tin SIM"
                      width="16"
                      placeholder="Thông tin SIM"
                      value={productDetail.SIM}
                    />
                    <Field
                      component={InputNumber}
                      name="oldPrice"
                      title="Giá Cũ"
                      width="16"
                      placeholder="Giá Cũ"
                      value={productDetail.oldPrice}
                    />
                    <Field
                      component={TextInput}
                      name="screen"
                      title="Thông tin màn hình"
                      width="16"
                      placeholder="Thông tin màn hình"
                      value={productDetail.screen}
                    />
                  </GridColumn>
                  <GridColumn computer={8} className="wrap-info">
                    <Field
                      component={InputNumber}
                      name="priceOnSales"
                      title="Giá Bán"
                      width="16"
                      type="number"
                      placeholder="Giá Bán"
                      value={productDetail.priceOnSales}
                    />
                    <Field
                      component={InputNumber}
                      name="priceOnPurchase"
                      title="Giá Mua"
                      width="16"
                      type="number"
                      placeholder="Giá Mua"
                      value={productDetail.priceOnPurchase}
                    />
                    <Field
                      component={TextInput}
                      name="operatingSystem"
                      title="Hệ Điều Hành"
                      width="16"
                      placeholder="Hệ Điều Hành"
                      value={productDetail.operatingSystem}
                    />
                    <Field
                      component={TextInput}
                      name="CPU"
                      title="CPU"
                      width="16"
                      placeholder="CPU"
                      value={productDetail.CPU}
                    />
                    <Field
                      component={TextInput}
                      name="frontCamera"
                      title="Camera trước"
                      width="16"
                      placeholder="Camera trước"
                      value={productDetail.frontCamera}
                    />
                    <Field
                      component={TextInput}
                      name="RAM"
                      title="RAM"
                      width="16"
                      placeholder="RAM"
                      value={productDetail.RAM}
                    />
                    <Field
                      component={TextInput}
                      name="batteryCapacity"
                      title="Thông tin Pin"
                      width="16"
                      placeholder="Thông tin Pin"
                      value={productDetail.batteryCapacity}
                    />
                    <div className="wrap-im">
                      <label className="mb-1">Trả Góp</label>
                      <Form>
                        <Form.Field>
                          <Checkbox
                            radio
                            label="Có"
                            name="checkboxRadioGroup"
                            value="this"
                            checked={traGop}
                            onChange={(e) => settraGop(!traGop)}
                          />
                        </Form.Field>
                        <Form.Field>
                          <Checkbox
                            radio
                            label="Không"
                            name="checkboxRadioGroup"
                            checked={!traGop}
                            onChange={(e) => settraGop(!traGop)}
                          />
                        </Form.Field>
                      </Form>
                    </div>
                  </GridColumn>
                  <GridColumn computer={16} className="d-flex mt-1">
                    <Button color="twitter" className="ml-auto" type="submit">
                      <div className="d-flex ali-cen">
                        <div className="mr-1">
                          {params.phoneId ? "Cập nhật" : "Thêm sản phẩm"}
                        </div>
                        <BsArrowUpDown size="20px" />
                      </div>
                    </Button>
                  </GridColumn>
                </GridRow>
              </Grid>
            </Form>
          )}
        />
      </GridRow>

      {params.phoneId && (
        <GridRow>
          <ColorsCardItem />
          <div className="br-hor"></div>
          <Capacities />
        </GridRow>
      )}
    </Grid>
  );
};

export default React.memo(ProductDetailBody);
