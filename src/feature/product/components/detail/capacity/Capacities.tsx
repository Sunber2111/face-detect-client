import React from "react";
import { Button, Grid, GridRow } from "semantic-ui-react";
import CapacityVersion from "./CapacityVersion";
import { BiAddToQueue } from "react-icons/bi";
import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "app/store";
import { openModal } from "feature/modal/modalSlice";

const Capacities = () => {
  const capacities = useSelector(
    (state: RootState) => state.products.productDetail?.capacities
  );

  const productId = useSelector(
    (state: RootState) => state.products.productDetail?._id
  );

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(
      openModal({
        body: (
          <CapacityVersion
            _id=""
            productId={productId}
            index={1}
            capa={0}
            plus={0}
            isAdd={true}
          />
        ),
        size: "mini",
      })
    );
  };

  return (
    <div className="capacities">
      <div className="wrap-title">
        <div className="title">Phiên bản bộ nhớ trong</div>
        <BiAddToQueue
          color="#6D848E"
          size="20px"
          onClick={(e) => handleClick()}
        />
      </div>
      <div className="wrap-content">
        <Grid divided>
          <GridRow>
            {capacities?.map((cap, index) => (
              <CapacityVersion
                key={cap._id}
                _id={cap._id}
                index={index}
                productId={productId}
                capa={cap.capacity}
                plus={cap.plusCost}
              />
            ))}
          </GridRow>
        </Grid>
      </div>
    </div>
  );
};

export default Capacities;
