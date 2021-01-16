import { RootState } from "app/store";
import BarChart from "app/common/chart/BarChart";
import { fetchAllCommentsByProductId } from "feature/product/productSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Comments from "../comments/Comments";
import { Grid, GridColumn, GridRow } from "semantic-ui-react";
import pic from "app/assets/bgterm.jpg";

const mapper = (text: string) => {
  if (text === "Sản Phẩm Tệ") return 0;
  if (text === "Sản Phẩm Tốt") return 1;
  if (text === "Bình luận / Hỏi đáp Sản Phẩm") return 2;
  if (text === "Nghiệp Vụ Tệ") return 3;
  if (text === "Nghiệp Vụ Tốt") return 4;
  return 5;
};

const ProductDetailNLP = () => {
  const id = useSelector(
    (state: RootState) => state.products.productDetail?._id
  );

  const comments = useSelector(
    (state: RootState) => state.products.comments?.comments
  );

  const photo = useSelector(
    (state: RootState) => state.products.productDetail?.colors[0].image?.photo
  );

  const name = useSelector(
    (state: RootState) => state.products.productDetail?.name
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(fetchAllCommentsByProductId(id));
    }
  }, []);

  const createData = () => {
    let counter: number[] = [0, 0, 0, 0, 0, 0];
    comments?.map((cmt) => {
      counter[cmt.rating % 6] = counter[cmt.rating % 6] + 1;
    });
    return counter;
  };

  const createDataAI = () => {
    let counter: number[] = [0, 0, 0, 0, 0, 0];
    comments?.map((cmt) => {
      if (cmt.labels) {
        console.log(cmt.labels);
        
        cmt.labels.map((val) => {
          counter[mapper(val) % 6] = counter[mapper(val) % 6] + 1;
        });
      }
    });
    console.log(counter);
    
    return counter;
  };

  const config = {
    series: [
      {
        name: "Số lượng Rating",
        data: createData(),
      },
    ],
    options: {
      plotOptions: {
        bar: {
          distributed: true,
        },
      },
      colors: [
        "#F00000",
        "#ED213A",
        "#FE6077",
        "#FEBC3B",
        "#26A0FC",
        "#26E7A6",
      ],
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        type: "category",
        categories: [
          "Cực Kì Tệ",
          "Rất Tệ",
          "Thất Vọng",
          "Tạm",
          "Tốt",
          "Rất Tốt",
        ],
      },
      title: {
        text: "Đánh giá Rating của sản phẩm",
      },
    },
  };

  const configAI = {
    series: [
      {
        name: "Số lượng",
        data: createDataAI(),
      },
    ],
    options: {
      plotOptions: {
        bar: {
          distributed: true,
        },
      },
      colors: [
        "#F00000",
        "#00C9FF",
        "#FEBC3B",
        "#F00000",
        "#38ef7d",
        "#F37335",
      ],
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        type: "category",
        categories: [
          "SP tệ",
          "SP tốt",
          "Bình luận SP",
          "NV tệ",
          "NV tốt",
          "Bình luận NV",
        ],
      },
      title: {
        text: "Phân tích cảm xúc bằng AI",
      },
    },
  };
  return (
    <div className="d-flex f-col">
      <Grid>
        <GridRow className="mt-1">
          <GridColumn computer={8} mobile={16}>
            <BarChart config={config} />
          </GridColumn>
          <GridColumn computer={8} mobile={16}>
            <BarChart config={configAI} />
          </GridColumn>
        </GridRow>
      </Grid>
      <Comments />
    </div>
  );
};

export default ProductDetailNLP;
