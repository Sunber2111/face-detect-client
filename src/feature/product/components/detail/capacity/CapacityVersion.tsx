import React, { useState } from "react";
import { Button, GridColumn } from "semantic-ui-react";
import { MdDeleteForever } from "react-icons/md";
import { GrUpdate } from "react-icons/gr";
import { useDispatch } from "react-redux";
import {
  addCapacity,
  deleteCapacity,
  updateCapacity,
} from "feature/product/productSlice";
import swal from "sweetalert";
import InputNumber from "app/common/components/InputNumber";

interface IProps {
  capa: number;
  plus: number;
  index: number;
  _id: string;
  isAdd?: boolean;
  productId?: string;
}

const CapacityVersion: React.FC<IProps> = ({
  capa,
  plus,
  index,
  _id,
  isAdd,
  productId,
}) => {
  const [cap, setCap] = useState(capa);
  const [plusCost, setplusCost] = useState(plus);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(updateCapacity({ _id, capacity: cap, plusCost: plusCost }, index));
  };

  const handleInsert = () => {
    if (productId) {
      dispatch(
        addCapacity({ _id: "0", capacity: cap, plusCost: plusCost }, productId)
      );
    }
  };

  const handleDelete = () => {
    if (productId) {
      swal({
        title: "Bạn Thực sự muốn xóa?",
        text: "Hành động này sẽ xóa đi 1 thông tin dung lượng !",
        icon: "warning",
        buttons: ["Không", "Có"],
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          dispatch(deleteCapacity(_id, productId, index));
        }
      });
    }
  };

  return (
    <GridColumn computer="4" mobile="16">
      <div className="cap-ver">
        <InputNumber title="Phiên bản" value={cap} setValue={setCap} />
        <InputNumber
          title="Gía cộng thêm"
          value={plusCost}
          setValue={setplusCost}
        />
        <div className="btn-gr mt-1">
          {isAdd ? (
            <Button
              color="green"
              className="ml-auto"
              onClick={(e) => handleInsert()}
            >
              Thêm
            </Button>
          ) : (
            <>
              <GrUpdate
                size="17px"
                color="#1890FF"
                className="mr-auto"
                onClick={(e) => handleClick()}
              />
              <MdDeleteForever
                size="25px"
                color="#E73239"
                onClick={(e) => handleDelete()}
              />
            </>
          )}
        </div>
      </div>
    </GridColumn>
  );
};

export default CapacityVersion;
