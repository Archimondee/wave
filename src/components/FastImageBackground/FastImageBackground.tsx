import React, { memo } from "react";
import { View, StyleSheet } from "react-native";
import FastImage from "react-native-fast-image";

interface FastImageBackgroundProps {
  children: any;
  style?: any;
  imageStyle?: any;
  source: any;
  resizeMode?: "cover" | "contain" | "center" | "stretch";
}

const FastImageBackground = ({
  children,
  style,
  imageStyle,
  source,
  resizeMode,
}: FastImageBackgroundProps) => {
  return (
    <View style={style}>
      <FastImage
        source={source}
        resizeMode={resizeMode}
        style={[
          StyleSheet.absoluteFill,
          {
            width: null,
            height: null,
            flex: 1,
          },
          imageStyle,
        ]}
      />
      {children}
    </View>
  );
};

export default memo(FastImageBackground);
