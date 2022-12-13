// import { RatingSkeleton } from "assets/skeleton/NovelSkeleton";
import { Text } from "components";
import colors from "configs/colors";
import icons from "configs/icons";
import React from "react";
import { View, TouchableOpacity } from "react-native";
import FastImage from "react-native-fast-image";
import { kFormatter } from "utils/Formatter";
import { scaledVertical } from "utils/ScaledService";

import styles from "./styles";

interface RatingDetailNovelProps {
  onPress: () => void;
  rating: number;
  readers_count: number;
  isLoading?: boolean;
}

const RatingDetailNovel = ({
  onPress,
  rating,
  readers_count,
  isLoading,
}: RatingDetailNovelProps) => {
  return (
    <View style={styles.container}>
      {isLoading ? (
        // <RatingSkeleton />
        <></>
      ) : (
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 0.5 }}>
            <Text
              color={colors.neutral500}
              size={16}
              type={"bold"}
              style={{ paddingTop: scaledVertical(4) }}
            >
              {kFormatter(readers_count)}
            </Text>
            <View style={{ flex: 1 }}>
              <Text
                color={colors.neutral400}
                size={16}
                type={"reguler"}
                style={{
                  paddingTop: scaledVertical(10),
                }}
              >
                Pembaca
              </Text>
            </View>
          </View>
          <View
            style={{ height: 52, borderWidth: 1, borderColor: "#ECECEC" }}
          />
          <View style={{ flex: 0.5, alignItems: "flex-end" }}>
            <View>
              <View style={{ flexDirection: "row" }}>
                <FastImage
                  source={icons.star}
                  style={styles.imageStar}
                  resizeMode={"contain"}
                />
                <Text
                  size={16}
                  color={colors.neutral500}
                  type={"bold"}
                  style={styles.textStyle}
                  textAlign="center"
                >
                  {rating}
                </Text>
              </View>
              <TouchableOpacity
                style={{ flexDirection: "row", paddingTop: scaledVertical(7) }}
                onPress={onPress}
              >
                <Text
                  size={16}
                  color={colors.neutral400}
                  type={"reguler"}
                  textAlign="center"
                >
                  Komentar
                </Text>
                <FastImage
                  source={icons.chevronRight}
                  style={styles.imageNext}
                  resizeMode={"contain"}
                  tintColor={colors.black}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}

      {/* {isLoading ? (
        // <RatingSkeleton />
        <></>
      ) : (
        <View style={{ flexDirection: "row", paddingTop: scaledVertical(15) }}>
          <View style={{ flex: 1 }}>
            <Text color={colors.neutral400} size={16} type={"reguler"}>
              Pembaca
            </Text>
          </View>
          <TouchableOpacity style={styles.containerBottom} onPress={onPress}>
            <Text
              size={16}
              color={colors.neutral400}
              type={"reguler"}
              style={{
                paddingLeft: scaledHorizontal(5),
                paddingTop: scaledVertical(3),
              }}
              textAlign="center"
            >
              Lihat Ulasan
            </Text>
            <FastImage
              source={icons.chevronRight}
              style={styles.imageNext}
              resizeMode={"contain"}
              tintColor={colors.black}
            />
          </TouchableOpacity>
        </View>
      )} */}
    </View>
  );
};

export default RatingDetailNovel;
