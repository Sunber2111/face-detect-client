import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import capacityAPI from "app/api/capacity";
import colorAPI from "app/api/color";
import commentAPI from "app/api/comments";
import productAPI from "app/api/product";
import { ICapacity } from "app/models/capacity";
import { IColor } from "app/models/color";
import {
  ICommentsProduct,
  IRequestInsertResponseComment,
  ISubResponse,
} from "app/models/comment";
import { IColorPhoto, IProductDetail, IProductFast } from "app/models/product";
import { showError, showMessage, showSuccess } from "app/notification/notify";
import { AppDispatch, AppThunk } from "app/store";
import { closeModal } from "feature/modal/modalSlice";
import swal from "sweetalert";
import { IUpdateCapacity, IUpdateColor, IUpdateImage } from "./types/capacity";

interface productsState {
  productDetail: IProductDetail | null;
  loading: boolean;
  showAnalysis: boolean;
  comments: ICommentsProduct | null;
  productList: IProductFast[];
}

const initialState: productsState = {
  productDetail: null,
  loading: false,
  showAnalysis: false,
  comments: null,
  productList: [],
};

export const getProductById = (id: string): AppThunk => async (
  dispatch: AppDispatch
) => {
  try {
    const res = await productAPI.getById(id);
    dispatch(setProductDetail(res.product));
  } catch (error) {
    console.log(error);
  }
};

export const updateCapacity = (
  data: ICapacity,
  index: number
): AppThunk => async (dispatch: AppDispatch) => {
  try {
    await capacityAPI.update(data);
    showMessage("Sửa thành công");
    dispatch(updateStateCapacity({ data, index }));
  } catch (error) {
    showError("Sửa thất bại");
  }
};

export const addCapacity = (
  data: ICapacity,
  productId: string
): AppThunk => async (dispatch: AppDispatch) => {
  try {
    const res = await capacityAPI.create(data, productId);
    showSuccess("Thêm thành công");
    if (res.id) data._id = res.id;
    dispatch(insertNewCapacity(data));
  } catch (error) {
    showError("Thêm thất bại");
  }
  dispatch(closeModal());
};

export const deleteCapacity = (
  capId: string,
  productId: string,
  index: number
): AppThunk => async (dispatch: AppDispatch) => {
  try {
    await capacityAPI.delete(capId, productId);
    swal("Xóa thành công !", {
      icon: "success",
    });
    dispatch(deleteItemCapacity(index));
  } catch (error) {
    showError("Xóa thất bại");
  }
};

export const handleChangeStateBuy = (productId: string): AppThunk => async (
  dispatch: AppDispatch
) => {
  try {
    await productAPI.updateStateExists(productId);
    swal("Thay đổi thành công !", {
      icon: "success",
    });
    dispatch(updateStateExists());
  } catch (error) {
    showError("Thay đổi thất bại");
  }
};

export const updateColor = (data: IColor, index: number): AppThunk => async (
  dispatch: AppDispatch
) => {
  try {
    await colorAPI.update(data);
    showSuccess("Sửa thành công");
    dispatch(updateStateColor({ data, index }));
  } catch (error) {
    showError("Sửa thất bại");
  }
};

export const insertColor = (
  data: IColorPhoto,
  productId: string
): AppThunk => async (dispatch: AppDispatch) => {
  try {
    if (data.image) {
      await productAPI.insertNewColor(
        productId,
        data.color._id,
        data.image._id
      );
      dispatch(insertNewColor(data));
      showMessage("Thêm thành công");
    }
  } catch (error) {
    showError("Thêm thất bại");
  }
  dispatch(closeModal());
};

export const deleteColorState = (
  productId: string,
  colorId: string,
  index: number
): AppThunk => async (dispatch: AppDispatch) => {
  try {
    await colorAPI.delete(colorId, productId);

    dispatch(deleteColor(index));

    showMessage("Xóa thành công");
  } catch (error) {
    showError("Xóa thất bại");
  }
  dispatch(closeModal());
};

export const fetchAllCommentsByProductId = (id: string): AppThunk => async (
  dispatch: AppDispatch
) => {
  try {
    const data = await commentAPI.getAllCommentsByProductId(id);
    dispatch(setComments(data));
  } catch (error) {}
};

export const insertNewResponse = (
  productId: string,
  indexRes: number,
  data: IRequestInsertResponseComment
): AppThunk => async (dispatch: AppDispatch) => {
  try {
    await commentAPI.addNewResponse(productId, indexRes, data);
    const date = new Date();
    const dateStr = date.toISOString();
    dispatch(
      insertNewResponseState({
        data: {
          _id: "cmt_sub",
          content: data.content,
          username: data.username,
          time: dateStr,
        },
        index: indexRes,
      })
    );
  } catch (error) {}
};

export const fetchAllProductFast = (): AppThunk => async (
  dispatch: AppDispatch
) => {
  try {
    const data = await productAPI.getAll();
    dispatch(setProductList(data.data));
  } catch (error) {
    
  }
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProductList(state, { payload }: PayloadAction<IProductFast[]>) {
      state.productList = payload;
    },
    setProductDetail(state, { payload }: PayloadAction<IProductDetail>) {
      state.productDetail = payload;
      state.loading = false;
    },
    turnOnLoadingProduct(state) {
      state.loading = true;
    },
    turnOffLoadingProduct(state) {
      state.loading = false;
    },
    updateStateCapacity(state, { payload }: PayloadAction<IUpdateCapacity>) {
      if (state.productDetail)
        state.productDetail.capacities[payload.index] = payload.data;
    },
    insertNewCapacity(state, { payload }: PayloadAction<ICapacity>) {
      if (state.productDetail) state.productDetail.capacities.push(payload);
    },
    deleteItemCapacity(state, { payload }: PayloadAction<number>) {
      if (state.productDetail) {
        state.productDetail.capacities.splice(payload, 1);
      }
    },
    updateStateExists(state) {
      if (state.productDetail) {
        state.productDetail.isExists = !state.productDetail.isExists;
      }
    },
    updateStateColor(state, { payload }: PayloadAction<IUpdateColor>) {
      if (state.productDetail) {
        state.productDetail.colors[payload.index].color = payload.data;
      }
    },
    updateImage(state, { payload }: PayloadAction<IUpdateImage>) {
      if (state.productDetail) {
        const t = state.productDetail.colors[payload.index];
        if (t.image) {
          t.image.photo = payload.image;
        }
      }
    },
    insertNewColor(state, { payload }: PayloadAction<IColorPhoto>) {
      if (state.productDetail) {
        state.productDetail.colors.push(payload);
      }
    },
    deleteColor(state, { payload }: PayloadAction<number>) {
      if (state.productDetail) {
        state.productDetail.colors.splice(payload, 1);
      }
    },
    setOpenAnalysis(state) {
      state.showAnalysis = !state.showAnalysis;
    },
    setComments(state, { payload }: PayloadAction<ICommentsProduct>) {
      state.comments = payload;
    },
    insertNewResponseState(
      state,
      { payload }: PayloadAction<{ data: ISubResponse; index: number }>
    ) {
      if (state.comments) {
        if (state.comments.comments[payload.index].response) {
          state.comments.comments[payload.index].response?.contents.push(
            payload.data
          );
        } else {
          state.comments.comments[payload.index].response = {
            _id: "idResT",
            contents: [
              {
                ...payload.data,
              },
            ],
          };
        }
      }
    },
    resetStateProduct: (state) => initialState,
  },
});

const { reducer, actions } = productsSlice;

export const {
  setProductDetail,
  turnOnLoadingProduct,
  turnOffLoadingProduct,
  updateStateCapacity,
  insertNewCapacity,
  deleteItemCapacity,
  updateStateExists,
  updateStateColor,
  updateImage,
  insertNewColor,
  deleteColor,
  setOpenAnalysis,
  resetStateProduct,
  setComments,
  insertNewResponseState,
  setProductList,
} = actions;

export default reducer;
