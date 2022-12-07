import { Dimensions } from "react-native";

const widthPercentage = (percent: number) =>
  (percent / 100) * Dimensions.get("window").width;

const heightPercentage = (percent: number) =>
  (percent / 100) * Dimensions.get("window").height;

export { widthPercentage, heightPercentage };
