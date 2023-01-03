import type { QueueDataType } from "types/QueueTypes";

export interface QueueState {
  queue: QueueDataType[];
  queueFail: QueueDataType[];
}

//Input API / Action when connection offline
export const QUEUE_ADD_DATA_OFFLINE = "QUEUE_ADD_DATA_OFFLINE";

export const QUEUE_DATA_FAILED = "QUEUE_DATA_FAILED";

export const QUEUE_SHIFT_DATA_OFFLINE = "QUEUE_SHIFT_DATA_OFFLINE";

interface AddQueueAction {
  type: typeof QUEUE_ADD_DATA_OFFLINE;
  payload: QueueDataType;
}

interface AddQueueFailAction {
  type: typeof QUEUE_DATA_FAILED;
  payload: QueueDataType;
}

interface PopQueueAction {
  type: typeof QUEUE_SHIFT_DATA_OFFLINE;
}

export type QueueActionTypes =
  | AddQueueAction
  | PopQueueAction
  | AddQueueFailAction;
