import { AxiosError } from "axios";
import api from "configs/api";
import { dataContents } from "../../assets/fake/contents";
import { dataCategories } from "../../assets/fake/categories";
import type { Dispatch } from "utils/Dispatch";
import {
  ADD_CATEGORY_ERROR,
  ADD_CATEGORY_PENDING,
  ADD_CATEGORY_SUCCESS,
  ADD_CONTENT_BOARDING_ERROR,
  ADD_CONTENT_BOARDING_PENDING,
  ADD_CONTENT_BOARDING_SUCCESS,
} from "./types";

export const getContent = (
  cb?: (e?: any) => void,
  onError?: (err?: any) => void,
) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: ADD_CONTENT_BOARDING_PENDING });
    const res = await api.getContent();
    dispatch({
      type: ADD_CONTENT_BOARDING_SUCCESS,
      payload: dataContents,
    });
    cb && cb();
  } catch (err) {
    let errorMessage = "";
    if (err instanceof AxiosError) {
      errorMessage = err.message;
      dispatch({
        type: ADD_CONTENT_BOARDING_ERROR,
        payload: { data: errorMessage },
      });
      onError && onError();
    } else {
      dispatch({ type: ADD_CONTENT_BOARDING_ERROR });
    }
  }
};

export const getCategoriesList = (
  cb?: (e?: any) => void,
  onError?: (err?: any) => void,
) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: ADD_CATEGORY_PENDING });
    const res = await api.getCategoryList();
    dispatch({
      type: ADD_CATEGORY_SUCCESS,
      payload: dataCategories,
    });
    cb && cb();
  } catch (err) {
    let errorMessage = "";
    if (err instanceof AxiosError) {
      errorMessage = err.message;
      dispatch({
        type: ADD_CATEGORY_ERROR,
        payload: { data: errorMessage },
      });
      onError && onError();
    } else {
      dispatch({ type: ADD_CATEGORY_ERROR });
    }
  }
};
