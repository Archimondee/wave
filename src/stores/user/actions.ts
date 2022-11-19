import type { Dispatch } from "utils/Dispatch";
import api from "configs/api";

import {
  ADD_DATA_TEST_ERROR,
  ADD_DATA_TEST_PENDING,
  ADD_DATA_TEST_SUCCESS,
  ADD_USER_DATA,
} from "./types";

export function addUserData(data: any) {
  return {
    type: ADD_USER_DATA,
    payload: data,
  };
}

export const getDataTest =
  (cb?: (e?: any) => void, onError?: (err?: any) => void) =>
  async (dispatch: Dispatch) => {
    try {
      dispatch({ type: ADD_DATA_TEST_PENDING });
      const res = await api.testApi();
      dispatch({
        type: ADD_DATA_TEST_SUCCESS,
        payload: { data: res.data },
      });
      cb && cb();
    } catch (err) {
      let errorMessage = "";
      if (err instanceof Error) {
        errorMessage = err.message;
        dispatch({
          type: ADD_DATA_TEST_ERROR,
          payload: { data: errorMessage },
        });
        onError && onError();
      } else {
        dispatch({ type: ADD_DATA_TEST_ERROR });
      }
    }
  };
