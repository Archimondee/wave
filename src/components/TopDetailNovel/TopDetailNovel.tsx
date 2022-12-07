// import { BookSkeleton, BookTitleSkeleton } from "assets/skeleton/NovelSkeleton";
// import Button from "components/Button";
// import FastImageBackground from "components/FastImageBackground";
import { Text, FastImageBackground, Button } from "components";
import colors from "configs/colors";
import icons from "configs/icons";
import React from "react";
import { View } from "react-native";
import type { NovelType } from "types/NovelTypes";
import { isTablet, scale } from "utils/Responsive";
import { scaledHorizontal, scaledVertical } from "utils/ScaledService";

interface TopDetailNovelProps {
  data: NovelType;
  isLoading: boolean;
}

const TopDetailNovel = ({ data, isLoading }: TopDetailNovelProps) => {
  return (
    <View style={{ flexDirection: "row" }}>
      {isLoading ? (
        // <BookSkeleton />
        <></>
      ) : (
        <View
          style={{
            position: "absolute",
            top: isTablet() ? scale(-120) : -85,
            paddingLeft: 10,
          }}
        >
          <FastImageBackground
            source={data?.novel_cover}
            style={{
              height: isTablet() ? scale(224) : 224,
              width: isTablet() ? scale(140) : 140,
            }}
            resizeMode="stretch"
            imageStyle={{ borderRadius: 10 }}
            children={undefined}
          />
        </View>
      )}

      <View
        style={{
          flex: 1,
          paddingLeft: isTablet() ? scale(172) : scale(150),
        }}
      >
        {isLoading ? (
          // <BookTitleSkeleton />
          <></>
        ) : (
          <View>
            <Text
              size={16}
              type={"bold"}
              color={colors.neutral500}
              numberOfLines={4}
            >
              {data?.novel_title}
            </Text>
            <View style={{ marginTop: scaledVertical(20) }}>
              <Text size={14} color={colors.secondary500} numberOfLines={3}>
                {data?.author?.username ?? "-"}
              </Text>
              <Text
                size={12}
                color={colors.neutral400}
                numberOfLines={3}
                style={{ marginTop: scaledVertical(20) }}
              >
                {data?.chapters_count} Bab
              </Text>
              <View
                style={{ flexDirection: "row", marginTop: scaledVertical(20) }}
              >
                <Button
                  style={{
                    backgroundColor: colors.black,
                    borderRadius: 5,
                  }}
                  title={"Indonesia"}
                  type="dark"
                  icon={icons.language}
                  iconStyle={{
                    height: scaledVertical(18),
                    width: scaledHorizontal(18),
                  }}
                  fontSize={12}
                  isLoading={false}
                />
              </View>
              {/* <View style={{ flex: 1 }} /> */}
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

export default TopDetailNovel;
