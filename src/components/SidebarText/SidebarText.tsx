import color from "configs/colors";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { scaledVertical } from "utils/ScaledService";
import Text from "../Text/Text";

interface SideBarTextProps {
  title: string;
  index: number;
  selectedCategory: number;
  setSelectedCategory: (categoryId: number) => void;
}

const SideBarText = ({
  title,
  index,
  selectedCategory,
  setSelectedCategory,
}: SideBarTextProps) => {
  return (
    <TouchableOpacity
      onPress={() => (index === 4 ? null : setSelectedCategory(index))}
      activeOpacity={index === 4 ? 1 : 0}
      key={index}
      style={{
        flex: 1,
        //paddingHorizontal: scaledHorizontal(15),
        backgroundColor:
          index === selectedCategory ? color.neutral50 : color.neutral100,
        paddingVertical: scaledVertical(20),
        borderTopLeftRadius:
          index === 0 || index === selectedCategory + 1 ? 10 : 0,
        borderTopRightRadius:
          index === 0 || index === selectedCategory + 1 ? 10 : 0,
        borderBottomLeftRadius: index === selectedCategory - 1 ? 10 : 0,
        borderBottomRightRadius: index === selectedCategory - 1 ? 10 : 0,
        height: index === 4 ? 1000 : 60,
      }}
    >
      <View
        style={{
          borderLeftColor: color.primary500,
          borderLeftWidth: index === selectedCategory ? 5 : 0,
          borderTopLeftRadius: 5,
          borderBottomLeftRadius: 5,
        }}
      >
        <Text
          textAlign="center"
          size={16}
          color={
            index === selectedCategory ? color.primary500 : color.neutral400
          }
          type={index === selectedCategory ? "bold" : "reguler"}
          style={{
            paddingVertical: scaledVertical(13),
            borderLeftColor: color.primary500,
            borderLeftWidth: 1,
          }}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default SideBarText;
