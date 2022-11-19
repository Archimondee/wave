import type { DataTestType } from "types/TestTypes";

export interface UserState {
  userData: any;
  testData: DataTestType;
}

export const ADD_USER_DATA = "ADD_USER_DATA";

export const ADD_DATA_TEST_PENDING = "ADD_DATA_TEST_PENDING";
export const ADD_DATA_TEST_SUCCESS = "ADD_DATA_TEST_SUCCESS";
export const ADD_DATA_TEST_ERROR = "ADD_DATA_TEST_ERROR";

interface AddUserAction {
  type: typeof ADD_USER_DATA;
  payload: string;
}

interface AddDataTestAction {
  type: typeof ADD_DATA_TEST_SUCCESS;
  payload: DataTestType;
}

export type UserActionTypes = AddUserAction | AddDataTestAction;
