import color from "configs/colors";
import React from "react";
import { View, StyleSheet } from "react-native";
import { scaledVertical } from "utils/ScaledService";
import Text from "../Text/Text";

interface TitleProps {
  title: string;
  size?: number;
}

const Title = ({ title, size }: TitleProps) => {
  return (
    <View style={styles.container}>
      <Text color={color.neutral500} type={"bold"} size={size || 20}>
        {title}
      </Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  container: {
    borderLeftWidth: 3,
    borderLeftColor: color.primary500,
    paddingVertical: scaledVertical(10),
    paddingLeft: scaledVertical(10),
  },
});
