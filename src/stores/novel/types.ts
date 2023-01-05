import type { CategoryType, ContentType } from "types/NovelTypes";

export interface NovelState {
  contentBoarding: ContentType[];
  listCategory: CategoryType[];
}

export const ADD_CONTENT_BOARDING_PENDING = "ADD_CONTENT_BOARDING_PENDING";
export const ADD_CONTENT_BOARDING_SUCCESS = "ADD_CONTENT_BOARDING_SUCCESS";
export const ADD_CONTENT_BOARDING_ERROR = "ADD_CONTENT_BOARDING_ERROR";

export const ADD_CATEGORY_PENDING = "ADD_CATEGORY_PENDING";
export const ADD_CATEGORY_SUCCESS = "ADD_CATEGORY_SUCCESS";
export const ADD_CATEGORY_ERROR = "ADD_CATEGORY_ERROR";

interface AddContentBoardingAtion {
  type: typeof ADD_CONTENT_BOARDING_SUCCESS;
  payload: ContentType[];
}

interface AddCategoryAction {
  type: typeof ADD_CATEGORY_SUCCESS;
  payload: CategoryType[];
}

export type NovelActionTypes = AddContentBoardingAtion | AddCategoryAction;
