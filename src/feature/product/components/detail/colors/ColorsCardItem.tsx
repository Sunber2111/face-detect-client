import { RootState } from "app/store";
import { openModal } from "feature/modal/modalSlice";
import React from "react";
import { BiAddToQueue } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { Grid, GridRow } from "semantic-ui-react";
import ColorItem from "./ColorItem";

const ColorsCardItem = () => {
  const productDetail = useSelector(
    (state: RootState) => state.products.productDetail
  );

  const dispatch = useDispatch();

  const handleInsertImage = () => {
    dispatch(
      openModal({
        body: (
          <ColorItem
            productId={productDetail?._id}
            colorHexa="#fff"
            plusMoney={0}
            namecolor=""
            idColor="0"
            index={0}
            isInsert={true}
          />
        ),
        size: "tiny",
      })
    );
  };

  return (
    <div className="card-colors">
      <div className="wrap-title">
        <div className="title">Danh Sách Màu</div>
        <BiAddToQueue
          color="#6D848E"
          size="20px"
          onClick={(e) => handleInsertImage()}
        />
      </div>
      <Grid divided>
        <GridRow>
          {productDetail &&
            productDetail.colors.map((color, index) => (
              <ColorItem
                photoId={color.image?._id}
                index={index}
                key={index}
                productId={productDetail._id}
                colorHexa={color.color.indexColor}
                imageSrc={color.image?.photo}
                idColor={color.color._id}
                plusMoney={color.color.plusCost}
                namecolor={color.color.nameColor}
              />
            ))}
        </GridRow>
      </Grid>
    </div>
  );
};

export default ColorsCardItem;
