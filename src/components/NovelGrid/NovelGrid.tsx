import { ImageCache } from "components";
import color from "configs/colors";
import icons from "configs/icons";
import images from "configs/images";
import React from "react";
import { View, Image, Dimensions } from "react-native";
import { scaledHorizontal, scaledVertical } from "utils/ScaledService";
import Text from "../Text/Text";

interface NovelGridProps {
  index: number;
}

const NovelGrid = ({ index }: NovelGridProps) => {
  const { width } = Dimensions.get("screen");
  return (
    <View
      key={index}
      style={{
        flexDirection: "row",
        width: width / 2 - scaledHorizontal(18),
        marginVertical: scaledVertical(15),
        //marginRight: index > 6 ? 0 : scaledHorizontal(20),
      }}
    >
      <ImageCache
        source={images.exampleBook}
        style={{
          height: scaledVertical(180),
          width: scaledHorizontal(80),
          borderRadius: 10,
        }}
        resizeMode={"stretch"}
      />
      <View
        style={{
          paddingHorizontal: scaledHorizontal(10),
          justifyContent: "space-between",
          paddingVertical: scaledVertical(5),
          flex: 1,
        }}
      >
        <Text
          size={14}
          color={color.neutral400}
          numberOfLines={3}
          type={"bold"}
        >
          Love At First Sight
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignContent: "center",
          }}
        >
          <Image source={icons.star} style={{ height: 15, width: 15 }} />
          <Text
            size={12}
            color={color.neutral400}
            numberOfLines={3}
            style={{
              marginLeft: scaledHorizontal(10),
              marginTop: scaledVertical(3),
            }}
          >
            4.6
          </Text>
        </View>
      </View>
    </View>
  );
};

export default NovelGrid;
