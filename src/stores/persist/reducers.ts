import { PersistActionTypes, PersistState, REMOVE_TOKEN } from "./types";

const initialState: PersistState = {
  language: "",
  token: "",
  data: {} as any,
};

export function persistReducer(
  state = initialState,
  action: PersistActionTypes,
) {
  switch (action.type) {
    case "POST_LOGIN_SUCCESS":
      return {
        ...state,
        token: action.payload.data,
      };
    case "POST_REGISTER_SUCCESS":
      return {
        ...state,
        data: action.payload.data,
      };
    case REMOVE_TOKEN:
      return {
        ...state,
        token: null,
      };
    default:
      return state;
  }
}
