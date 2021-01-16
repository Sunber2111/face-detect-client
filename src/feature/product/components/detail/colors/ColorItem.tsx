import React, { useEffect, useState } from "react";
import { Button, Dimmer, GridColumn, Loader } from "semantic-ui-react";
import src from "app/assets/ip12b_files/iphone-12-do-200x200-180x125.png";
import InputText from "app/common/components/InputText";
import InputNumber from "app/common/components/InputNumber";
import { GrUpdate } from "react-icons/gr";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  deleteColorState,
  insertColor,
  updateColor,
  updateImage,
} from "feature/product/productSlice";
import colorAPI from "app/api/color";
import { showError, showSuccess } from "app/notification/notify";
import { IColor } from "app/models/color";
import photoAPI from "app/api/photo";
import swal from "sweetalert";

interface IProps {
  colorHexa: string;
  plusMoney: number;
  imageSrc?: string;
  namecolor: string;
  idColor: string;
  index: number;
  photoId?: string;
  isInsert?: boolean;
  productId?: string;
}

const ColorItem: React.FC<IProps> = ({
  colorHexa,
  imageSrc,
  plusMoney,
  namecolor,
  idColor,
  index,
  photoId,
  isInsert,
  productId,
}) => {

  const [colorHex, setColorHex] = useState(colorHexa);  

  const [plusCost, setPlusCost] = useState(plusMoney);

  const [nameColor, setnameColor] = useState(namecolor);

  const [loading, setloading] = useState(false);

  const [imgSrc, setImgSrc] = useState<string | ArrayBuffer | null>();

  const [fileImg, setFileImg] = useState<File>();

  const dispatch = useDispatch();

  useEffect(()=>{
    setColorHex(colorHexa)
    setPlusCost(plusMoney)
    setnameColor(namecolor)
  },[colorHexa,plusMoney,namecolor])
  

  const handleUpdate = () => {
    dispatch(
      updateColor(
        { _id: idColor, indexColor: colorHex, nameColor, plusCost },
        index
      )
    );
  };

  const handleInsert = async () => {
    let colorData: IColor = {
      _id: idColor,
      indexColor: colorHex,
      nameColor,
      plusCost,
    };
    if (fileImg && productId) {
      try {
        const [resPhoto, resColor] = await Promise.all([
          photoAPI.insert(fileImg, fileImg.name),
          colorAPI.insert(colorData),
        ]);
        colorData._id = resColor.id;
        console.log(resColor);
        
        dispatch(
          insertColor(
            {
              color: colorData,
              image: {
                _id: resPhoto.data._id,
                photo: resPhoto.data.photo,
              },

            },
            productId
          )
        );
      } catch (error) {}
    }
  };

  const handleUpdateImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      if (isInsert) {
        let fr = new FileReader();
        fr.onload = function () {
          setImgSrc(fr.result);
        };
        fr.readAsDataURL(e.target.files[0]);
        setFileImg(e.target.files[0]);
      } else {
        if (photoId) {
          setloading(true);
          colorAPI
            .changePhoto(
              photoId,
              e.target.files[0],
              e.target.files[0].name
            )
            .then((res) => {
              dispatch(updateImage({ image: res.image, index: index }));
              showSuccess("Cập nhật thành công");
            })
            .catch((err) => {
              showError("Đổi ảnh thất bại");
            })
            .finally(() => {
              setloading(false);
            });
        }
      }
    }
  };

  const handleDelete = () => {
    if (productId) {
      swal({
        title: "Bạn Thực sự muốn xóa?",
        text: "Hành động này sẽ xóa đi 1 thông tin màu sắc !",
        icon: "warning",
        buttons: ["Không", "Có"],
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          dispatch(deleteColorState(productId, idColor, index));
        }
      });
    }
  };

  return (
    <GridColumn computer={4} mobile={16}>
      <div className="color-item">
        <div className="wrap-img">
          <div className={loading ? "img-loading loading" : "img-loading"}>
            {loading && <Loader active inline="centered" />}
            <img
              src={isInsert && imgSrc ? imgSrc + "" : imageSrc ? imageSrc : src}
              alt="img"
            />
          </div>
          <label className="custom-file-upload">
            <input type="file" onChange={(e) => handleUpdateImage(e)} />
            Thay đổi ảnh
          </label>
        </div>
        <div className="wrap-content">
          <div className="wrap-color">
            <div className="circle" style={{ backgroundColor: colorHex }}></div>
          </div>
          <div className="wrap-hex">
            <InputText
              title="Mã màu"
              value={colorHex}
              size="small"
              setValue={setColorHex}
            />
          </div>
          <div className="wrap-hex">
            <InputText
              title="Tên màu"
              value={nameColor}
              size="small"
              setValue={setnameColor}
            />
          </div>
          <div className="wrap-plus-cost">
            <InputNumber
              value={plusCost}
              setValue={setPlusCost}
              title="Gía thêm"
            />
          </div>
        </div>
      </div>

      {isInsert ? (
        <Button
          content="Thêm"
          className="mt-1 mb-1"
          color="green"
          size="medium"
          floated="right"
          onClick={(e) => handleInsert()}
        />
      ) : (
        <div className="btn-gr">
          <GrUpdate
            size="17px"
            color="#1890FF"
            className="mr-auto"
            onClick={(e) => handleUpdate()}
          />
          <MdDeleteForever
            size="25px"
            color="#E73239"
            onClick={(e) => handleDelete()}
          />
        </div>
      )}
    </GridColumn>
  );
};

export default ColorItem;
