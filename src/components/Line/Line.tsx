import colors from "configs/colors";
import React from "react";
import { View, ViewStyle } from "react-native";

interface LineProps {
  marginHorizontal?: number;
  marginVertical?: number;
  style?: ViewStyle;
}

const Line = ({ marginHorizontal, marginVertical, style }: LineProps) => {
  return (
    <View
      style={[
        style,
        {
          borderBottomWidth: 0.5,
          borderStyle: "solid",
          borderBottomColor: colors.neutral200,
          marginVertical: marginVertical,
          marginHorizontal: marginHorizontal,
        },
      ]}
    />
  );
};

export default Line;
