import color from "configs/colors";
import icons from "configs/icons";
import images from "configs/images";
import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { scaledHorizontal, scaledVertical } from "utils/ScaledService";
import Text from "../Text/Text";

interface TopupListProps {
  index: number;
  onPress: () => void;
}

const TopupList = ({ index, onPress }: TopupListProps) => {
  return (
    <TouchableOpacity
      key={index}
      onPress={onPress}
      style={{
        backgroundColor: color.neutral50,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
        marginHorizontal: scaledHorizontal(20),
        borderRadius: 10,
        paddingHorizontal: scaledHorizontal(20),
        marginBottom: scaledVertical(30),
      }}
    >
      <View
        style={{
          flexDirection: "row",

          paddingVertical: scaledHorizontal(25),

          borderBottomColor: color.neutral100,
          borderBottomWidth: 1,
        }}
      >
        <Image
          source={images.diamond}
          style={{ height: 40, width: 40 }}
          resizeMode={"contain"}
        />

        <View
          style={{
            paddingLeft: scaledHorizontal(20),
            justifyContent: "center",
          }}
        >
          <Text
            size={12}
            color={color.primary500}
            type={"bold"}
            style={{ marginBottom: scaledVertical(10) }}
          >
            Bonus 1 Berlian & 1 Novel
          </Text>

          <Text size={16} color={color.neutral500} type={"bold"}>
            50 Berlian
          </Text>
        </View>
      </View>
      <View
        style={{
          paddingVertical: scaledVertical(20),
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text color={color.primary500} size={16} type={"bold"}>
            IDR 50.000
          </Text>
          <Text
            color={color.neutral300}
            size={12}
            type={"bold"}
            style={{
              marginLeft: scaledHorizontal(15),
              textDecorationLine: "line-through",
              textDecorationStyle: "solid",
            }}
          >
            IDR 50.000
          </Text>
        </View>
        <TouchableOpacity>
          <Image
            source={icons.buttonLeft}
            style={{ height: 28, width: 28 }}
            resizeMode={"contain"}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default TopupList;
