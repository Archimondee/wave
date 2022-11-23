import fonts from "configs/fonts";
import React, { ReactNode, memo } from "react";
import { Text, TextStyle } from "react-native";

interface Props {
  children: ReactNode;
  style?: TextStyle | TextStyle[];
  numberOfLines?: number | undefined;
  onPress?: () => void;
  type?: "light" | "reguler" | "semibold" | "bold" | "extrabold";
  color: string;
  size: number;
  opacity: number;
  lineHeight?: number;
  textAlign: "left" | "center";
}

const Component = ({
  style,
  children,
  numberOfLines,
  onPress,
  type,
  color,
  size,
  opacity,
  lineHeight,
  textAlign,
}: Props) => {
  const _type = () => {
    if (type === "light") {
      return fonts.interLight;
    }
    if (type === "semibold") {
      return fonts.interSemiBold;
    }
    if (type === "bold") {
      return fonts.interBold;
    }
    if (type === "extrabold") {
      return fonts.interExtraBold;
    }
    return fonts.inter;
  };

  return (
    <Text
      style={[
        {
          fontFamily: `${_type()}`,
          color,
          fontSize: size,
          opacity,
          lineHeight,
          textAlign,
        },
        style,
      ]}
      numberOfLines={numberOfLines}
      onPress={onPress}
    >
      {children}
    </Text>
  );
};

Component.defaultProps = {
  type: "reguler",
  color: "#000",
  size: 16,
  opacity: 1,
  textAlign: "left",
};

export default memo(Component);
