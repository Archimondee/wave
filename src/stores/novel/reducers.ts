import type { CategoryType, ContentType } from "types/NovelTypes";
import {
  ADD_CATEGORY_SUCCESS,
  ADD_CONTENT_BOARDING_SUCCESS,
  NovelActionTypes,
  NovelState,
} from "./types";

const initialState: NovelState = {
  contentBoarding: [] as ContentType[],
  listCategory: [] as CategoryType[],
};

export function novelReducer(state = initialState, action: NovelActionTypes) {
  switch (action.type) {
    case ADD_CONTENT_BOARDING_SUCCESS:
      return {
        ...state,
        contentBoarding: action.payload,
      };
    case ADD_CATEGORY_SUCCESS:
      return {
        ...state,
        listCategory: action.payload,
      };

    default:
      return state;
  }
}
