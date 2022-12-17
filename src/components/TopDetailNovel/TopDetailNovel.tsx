import { Text, Button } from "components";
import colors from "configs/colors";
import icons from "configs/icons";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import FastImage from "react-native-fast-image";
import type { NovelType } from "types/NovelTypes";
import { isTablet, scale } from "utils/Responsive";
import { scaledHorizontal, scaledVertical } from "utils/ScaledService";

interface TopDetailNovelProps {
  data: NovelType;
  isLoading: boolean;
  onPressCover?: (e: any) => void;
  onPressAuthor?: () => void;
}

const TopDetailNovel = ({
  data,
  isLoading,
  onPressCover,
  onPressAuthor,
}: TopDetailNovelProps) => {
  return (
    <View style={{ flexDirection: "row" }}>
      {isLoading ? (
        // <BookSkeleton />
        <></>
      ) : (
        <TouchableOpacity
          onPress={onPressCover}
          style={{
            zIndex: 1,
            position: "absolute",
            top: isTablet() ? scale(-120) : -85,
            paddingLeft: 10,
          }}
        >
          <FastImage
            source={data?.novel_cover as any}
            style={{
              height: isTablet() ? scale(224) : 224,
              width: isTablet() ? scale(140) : 140,
              borderRadius: 10,
            }}
            resizeMode="stretch"
          />
        </TouchableOpacity>
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
              <TouchableOpacity onPress={onPressAuthor}>
                <Text size={14} color={colors.secondary500} numberOfLines={3}>
                  {data?.author?.username ?? "-"}
                </Text>
              </TouchableOpacity>
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
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

export default TopDetailNovel;
