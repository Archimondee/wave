import axios, { AxiosError } from "axios";
import Config from "react-native-config";
import type { QueueDataType } from "types/QueueTypes";
import type { Dispatch } from "utils/Dispatch";

import {
  QUEUE_ADD_DATA_OFFLINE,
  QUEUE_DATA_FAILED,
  QUEUE_SHIFT_DATA_OFFLINE,
  //QUEUE_SHIFT_DATA_OFFLINE,
  //QUEUE_SHIFT_DATA_OFFLINE
} from "./types";

export const host = axios.create({
  baseURL: Config.HOST,
});

const getHeaderPrivate = (token: string) => {
  return {
    headers: {
      Accept: "*/*",
      Authorization: `Bearer ${token ? token : Config.API_KEY}`,
    },
  };
};

// const getHeaderPrivateFormData = (token: string) => {
//   return {
//     headers: {
//       Accept: "*/*",
//       "Content-Type": "multipart/form-data",
//       Authorization: `Bearer ${token ? token : Config.API_KEY}`,
//     },
//   };
// };

const getHeaderPublic: any = () => {
  return {
    headers: {
      Accept: "*/*",
      "X-PUBLIC-TOKEN": Config.PUBLIC_KEY,
    },
  };
};

export const addQueueOffline = (
  url: string,
  actionType: string,
  type: "GET" | "PUT" | "POST" | "DELETE",
  dataRealm: "Novel" | "Category",
  param?: string,
  token?: string,
  limit?: number,
  page?: number,
) => async (dispatch: Dispatch) => {
  try {
    dispatch({
      type: QUEUE_ADD_DATA_OFFLINE,
      payload: {
        data: { url, actionType, type, dataRealm, param, token, limit, page },
      },
    });
  } catch (err) {}
};

export const queueBackOnline = (
  queue: QueueDataType,
  index: number,
  dataLength: number,
  realm: any,
  onSuccess?: () => void,
) => async (dispatch: Dispatch) => {
  //console.log("dataa actions", queue.data.url);

  try {
    if (queue.data.type === "GET") {
      const res = await host.get(
        queue.data.url,
        queue.data.token
          ? getHeaderPrivate(queue.data.token)
          : getHeaderPublic(),
      );
      dispatch({
        type: queue.data.actionType,
        payload: { data: res.data },
      });

      if (index === dataLength) {
        dispatch({
          type: QUEUE_SHIFT_DATA_OFFLINE,
        });
      }

      await realm.write(() => {
        res.data.data.map(async (item: any) => {
          await realm.create(queue.data.dataRealm, item, "modified");
        });
      });

      onSuccess && onSuccess();
    }
  } catch (err) {
    //If fails it will go to redux fails TBA
    let errorMessage = "";
    if (err instanceof AxiosError) {
      errorMessage = err.message;
      if (errorMessage === "Network Error") {
        const dataError = {
          url: queue.data.url,
          actionType: queue.data.actionType,
          type: queue.data.type,
          dataRealm: queue.data.dataRealm,
          param: queue.data.param,
          token: queue.data.token,
        };
        dispatch({
          type: QUEUE_DATA_FAILED,
          payload: { data: dataError },
        });
      }
    }
  }
};
