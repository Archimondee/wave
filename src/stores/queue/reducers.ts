import type { QueueDataType } from "types/QueueTypes";

import {
  QueueActionTypes,
  QueueState,
  QUEUE_SHIFT_DATA_OFFLINE,
} from "./types";

const initialState: QueueState = {
  queue: [] as QueueDataType[],
  queueFail: [] as QueueDataType[],
};

export function queueReducer(state = initialState, action: QueueActionTypes) {
  switch (action.type) {
    case "QUEUE_ADD_DATA_OFFLINE":
      return {
        ...state,
        queue: [...state.queue, ...new Array(action.payload)],
      };
    case "QUEUE_DATA_FAILED":
      return {
        ...state,
        queueFail: [...state.queueFail, ...new Array(action.payload)],
      };

    case QUEUE_SHIFT_DATA_OFFLINE:
      return {
        ...state,
        queue: [],
      };
    default:
      return state;
  }
}
