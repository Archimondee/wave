import type { Dispatch } from "utils/Dispatch";
import api from "configs/api";
// import { AxiosError } from "axios";

import {
  POST_LOGIN_ERROR,
  POST_LOGIN_PENDING,
  POST_LOGIN_SUCCESS,
  POST_REGISTER_ERROR,
  POST_REGISTER_PENDING,
  POST_REGISTER_SUCCESS,
  REMOVE_TOKEN,
  // ADD_USER_DATA,
} from "./types";

export const postLogin =
  (
    body: any,
    cb?: (e?: any) => void,
    onError?: (status: any, err?: any) => void,
  ) =>
  async (dispatch: Dispatch) => {
    try {
      dispatch({ type: POST_LOGIN_PENDING });
      const res = await api.postLogin(body);
      // const user = await api.getCurrentUser(res.data.token);
      dispatch({
        type: POST_LOGIN_SUCCESS,
        payload: { data: res.data.token },
      });
      // dispatch({
      //   type: ADD_USER_DATA,
      //   payload: { data: user.data },
      // });
      cb && cb();
    } catch (err) {
      let errorMessage = "";
      if (err instanceof Error) {
        errorMessage = err.message;
        onError && onError(errorMessage, err);
        dispatch({ type: POST_LOGIN_ERROR, payload: { data: errorMessage } });
      }
    }
  };

export const postRegister =
  (
    body: any,
    cb?: (e?: any) => void,
    onError?: (status: any, err?: any) => void,
  ) =>
  async (dispatch: Dispatch) => {
    try {
      dispatch({ type: POST_REGISTER_PENDING });
      const res = await api.postRegister(body);
      dispatch({
        type: POST_REGISTER_SUCCESS,
        payload: { data: res.data },
      });
      cb && cb();
    } catch (err) {
      let errorMessage = "";
      if (err instanceof Error) {
        errorMessage = err.message;
        onError && onError(errorMessage, err);
        dispatch({
          type: POST_REGISTER_ERROR,
          payload: { data: errorMessage },
        });
      }
    }
  };

export const removeToken = (cb?: () => void) => (dispatch: Dispatch) => {
  dispatch({ type: REMOVE_TOKEN, payload: {} });
  cb && cb();
};
