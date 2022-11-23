import color from "configs/colors";
import images from "configs/images";
import React from "react";
import { View, Image } from "react-native";
import { scaledHorizontal, scaledVertical } from "utils/ScaledService";
import Text from "../Text/Text";
interface DiamondListProps {
  index: number;
}
const DiamondList = ({ index }: DiamondListProps) => {
  return (
    <View
      key={index}
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingBottom: scaledVertical(30),
      }}
    >
      <Image source={images.diamond} style={{ height: 40, width: 40 }} />
      <View
        style={{
          marginLeft: scaledHorizontal(20),
          justifyContent: "space-between",

          borderBottomWidth: 0.3,
          borderBottomColor: color.neutral200,
          flex: 1,
          flexDirection: "row",
          paddingBottom: scaledVertical(30),
          alignItems: "center",
        }}
      >
        <View>
          <Text
            size={14}
            color={color.neutral500}
            style={{ fontWeight: "400" }}
          >
            The Last Summer
          </Text>
          <Text
            size={12}
            color={color.neutral500}
            style={{ paddingTop: scaledVertical(20) }}
          >
            10 Jan 2022
          </Text>
        </View>

        <Text size={14} type={"bold"} color={color.neutral500}>
          - 15 Koin
        </Text>
      </View>
    </View>
  );
};

export default DiamondList;
