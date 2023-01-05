import { useSelector } from "react-redux";
import type { StoreStateType } from "stores";

export const useTestData = () => {
  return useSelector((state: StoreStateType) => state.user.testData);
};

export const useQueue = () => {
  return useSelector((state: StoreStateType) => state.queue.queue);
};

export const useListCategory = () => {
  return useSelector((state: StoreStateType) => state.novel.listCategory);
};

export const useListContent = () => {
  return useSelector((state: StoreStateType) => state.novel.contentBoarding);
};
