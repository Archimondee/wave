/* eslint-disable no-nested-ternary */
import colors from "configs/colors";
import React, { memo } from "react";
import { View, TouchableOpacity } from "react-native";
//import FastImage from "react-native-fast-image";
import type { NovelType } from "types/NovelTypes";
//import NavigationService from "utils/NavigationService";
import { isTablet, scale } from "utils/Responsive";
import { scaledHorizontal } from "utils/ScaledService";

import FastImageBackground from "../FastImageBackground/FastImageBackground";
import Text from "../Text/Text";

import styles from "./styles";

interface BookProps {
  item: NovelType;
  index: any;
  dataLength: number;
  type: "small" | "big";
  contentType: "number" | "popular";
  onPress?: () => void | undefined;
}

const Book = ({
  item,
  index,
  dataLength,
  type,
  contentType,
  onPress,
}: BookProps) => {
  return (
    <TouchableOpacity
      // onPress={() => {
      //   NavigationService.navigate("NovelScreen", {
      //     id: item?.id,
      //     type: "normal",
      //   });
      //   onPress && onPress();
      // }}
      onPress={() => onPress && onPress()}
      key={index}
      style={{
        paddingLeft: scaledHorizontal(20),
        paddingRight:
          index === dataLength - 1 ? scaledHorizontal(20) : scaledHorizontal(0),
        //paddingRight: scaledHorizontal(20),
      }}
    >
      <FastImageBackground
        source={item?.novel_cover}
        style={{
          // height: isTablet()
          //   ? type === "big"
          //     ? scaledVertical(280)
          //     : scaledVertical(200)
          //   : type === "big"
          //   ? scaledVertical(400)
          //   : scaledVertical(280),
          height: isTablet()
            ? type === "big"
              ? scale(140)
              : scale(115)
            : type === "big"
            ? scale(190)
            : scale(170),
          width: isTablet()
            ? type === "big"
              ? scale(100)
              : scale(80)
            : type === "big"
            ? scale(140)
            : scale(110),
        }}
        resizeMode="cover"
        imageStyle={{ borderRadius: 10 }}
      >
        <View style={styles.leftContainer}>
          <Text
            size={type === "small" ? 10 : 18}
            type={"bold"}
            textAlign={"center"}
            color={colors.neutral50}
          >
            {contentType === "number" ? index + 1 : "Populer"}
          </Text>
        </View>
      </FastImageBackground>
      <View
        style={{
          width: type === "big" ? scaledHorizontal(190) : scaledHorizontal(130),
          alignItems: "flex-start",
          paddingVertical: 5,
        }}
      >
        <View style={{ height: scaledHorizontal(70) }}>
          <Text
            numberOfLines={2}
            size={type === "big" ? 14 : 12}
            color={colors.black}
            style={{ lineHeight: 20 }}
            type={type === "big" ? "bold" : "reguler"}
          >
            {item?.novel_title}
          </Text>
        </View>

        <View style={styles.containerCategory} key={index}>
          <Text style={{ letterSpacing: 0.25 }} textAlign={"center"} size={12}>
            {item?.categories[0]?.category_name}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default memo(Book);
