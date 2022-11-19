import { useSelector } from "react-redux";
import type { StoreStateType } from "stores";

export const useTestData = () => {
  return useSelector((state: StoreStateType) => state.user.testData);
};
