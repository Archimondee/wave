import { ImageCache } from "components";
import color from "configs/colors";
import icons from "configs/icons";
//import images from "configs/images";
import React from "react";
import { View, Image, Dimensions, TouchableOpacity } from "react-native";
import type { NovelType } from "types/NovelTypes";
import { scaledHorizontal, scaledVertical } from "utils/ScaledService";
import Text from "../Text/Text";

interface NovelGridProps {
  index: number;
  item: NovelType;
}

const NovelGrid = ({ index, item }: NovelGridProps) => {
  const { width } = Dimensions.get("screen");
  return (
    <TouchableOpacity
      key={index}
      style={{
        flexDirection: "row",
        width: width / 2 - scaledHorizontal(18),
        marginVertical: scaledVertical(15),
        //marginRight: index > 6 ? 0 : scaledHorizontal(20),
      }}
    >
      <ImageCache
        source={{ uri: item?.novel_cover }}
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
          {item?.novel_title}
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
            {item?.novel_rating}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default NovelGrid;
