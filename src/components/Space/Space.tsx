import React, { memo } from "react";
import { View } from "react-native";

interface Space {
  height: number;
  width: number;
}

const space = ({ width, height }: Space) => <View style={{ height, width }} />;

space.defaultProps = {
  height: 0,
  width: 0,
};

export default memo(space);
