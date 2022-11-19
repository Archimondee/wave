import type { DataTestType } from "types/TestTypes";

import type { UserActionTypes, UserState } from "./types";

const initialState: UserState = {
  userData: {} as any,
  testData: {} as DataTestType,
};

export function userReducer(state = initialState, action: UserActionTypes) {
  switch (action.type) {
    case "ADD_USER_DATA":
      return {
        ...state,
        userData: action.payload,
      };
    case "ADD_DATA_TEST_SUCCESS":
      return {
        ...state,
        testData: action.payload,
      };

    default:
      return state;
  }
}
