export interface PersistState {
  language: string;
  token: string;
  data: any;
}

export const POST_LOGIN_PENDING = "POST_LOGIN_PENDING";
export const POST_LOGIN_SUCCESS = "POST_LOGIN_SUCCESS";
export const POST_LOGIN_ERROR = "POST_LOGIN_ERROR";

export const POST_REGISTER_PENDING = "POST_REGISTER_PENDING";
export const POST_REGISTER_SUCCESS = "POST_REGISTER_SUCCESS";
export const POST_REGISTER_ERROR = "POST_REGISTER_ERROR";

export const REMOVE_TOKEN = "REMOVE_TOKEN";

interface PostLoginAction {
  type: typeof POST_LOGIN_SUCCESS;
  payload: { data: string };
}

interface PostRegisterAction {
  type: typeof POST_REGISTER_SUCCESS;
  payload: { data: any };
}

interface RemoveTokenAction {
  type: typeof REMOVE_TOKEN;
  payload: string;
}

export type PersistActionTypes =
  | PostLoginAction
  | PostRegisterAction
  | RemoveTokenAction;
