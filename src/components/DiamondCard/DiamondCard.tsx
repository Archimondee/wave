import color from "configs/colors";
import images from "configs/images";
import React from "react";
import { Image, View } from "react-native";
import { scaledHorizontal, scaledVertical } from "utils/ScaledService";

import Button from "../Button/Button";
import Space from "../Space/Space";
import Text from "../Text/Text";

interface DiamondCardProps {
  onPress: () => void;
}

const DiamondCard = ({ onPress }: DiamondCardProps) => {
  return (
    <View
      style={{
        marginHorizontal: scaledHorizontal(20),
        backgroundColor: color.neutral100,
        borderRadius: 10,
        paddingHorizontal: scaledHorizontal(20),
        paddingVertical: scaledVertical(30),
      }}
    >
      <Text color={color.neutral500} size={14}>
        Berlian Kamu
      </Text>
      <Space height={20} />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Image source={images.diamond} style={{ height: 28, width: 28 }} />
          <Text
            size={24}
            color={color.neutral500}
            type={"bold"}
            style={{ marginLeft: scaledHorizontal(10) }}
          >
            15
          </Text>
        </View>
        <Button title="Top Up" onPress={onPress} />
      </View>
    </View>
  );
};

export default DiamondCard;
