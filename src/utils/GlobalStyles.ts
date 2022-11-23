/* eslint-disable react-hooks/rules-of-hooks */
import { StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { scaledVertical } from "./ScaledService";

const globalStyles = (backgroundColor?: string) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: backgroundColor || "#FFF",
      paddingTop: scaledVertical(30),
    },
    bottomSafeArea: {
      flex: 1,
      backgroundColor: backgroundColor || "#eaeaea",
    },
    topSafeArea: {
      flex: 1,
      backgroundColor: backgroundColor || "#FFF",
      paddingTop: useSafeAreaInsets().top,
    },
    //  Font
  });
};

export default globalStyles;
