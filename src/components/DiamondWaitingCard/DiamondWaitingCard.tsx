import color from "configs/colors";
import icons from "configs/icons";
import images from "configs/images";
import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { scaledHorizontal, scaledVertical } from "utils/ScaledService";
import Space from "../Space/Space";
import Text from "../Text/Text";

interface DiamondWaitingCardProps {
  index: number;
}

const DiamondWaitingCard = ({ index }: DiamondWaitingCardProps) => {
  return (
    <View
      key={index}
      style={{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        backgroundColor: color.neutral50,
        marginHorizontal: scaledHorizontal(20),
        paddingHorizontal: scaledHorizontal(20),
        paddingVertical: scaledVertical(20),
        borderRadius: 10,

        //marginTop: scaledVertical(20),
        marginBottom: scaledVertical(40),
      }}
    >
      <TouchableOpacity
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingVertical: scaledVertical(20),
        }}
      >
        <Text size={14} color={color.primary500} type={"bold"}>
          Yuk segera selesaikan pembayaranmu!
        </Text>
        <Image
          source={icons.chevronRight}
          style={{
            height: 18,
            width: 18,
            tintColor: color.primary500,
          }}
          resizeMode={"contain"}
        />
      </TouchableOpacity>
      <Space height={5} />
      <View style={{ borderTopWidth: 1, borderTopColor: color.neutral300 }} />

      <View
        style={{
          paddingVertical: scaledVertical(20),
          flexDirection: "row",
          marginTop: scaledVertical(10),
        }}
      >
        <Image source={images.diamond} style={{ height: 16, width: 16 }} />
        <Text
          color={color.neutral500}
          size={14}
          style={{
            fontWeight: "400",
            marginLeft: scaledHorizontal(10),
          }}
        >
          50 Berlian + Bonus 1 Berlian & Novel
        </Text>
      </View>
      <View
        style={{
          marginVertical: scaledVertical(20),
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text size={12} color={color.neutral400}>
          Berakhir dalam
        </Text>
        <View
          style={{
            marginLeft: scaledHorizontal(20),
            backgroundColor: color.danger100,
            paddingVertical: 5,
            paddingHorizontal: 5,
            borderRadius: 5,
          }}
        >
          <Text size={14} color={color.danger400} type={"bold"}>
            01
          </Text>
        </View>
        <Text
          color={color.danger400}
          size={12}
          style={{ marginHorizontal: scaledHorizontal(5) }}
        >
          :
        </Text>
        <View
          style={{
            backgroundColor: color.danger100,
            paddingVertical: 5,
            paddingHorizontal: 5,
            borderRadius: 5,
          }}
        >
          <Text size={14} color={color.danger400} type={"bold"}>
            08
          </Text>
        </View>
        <Text
          color={color.danger400}
          size={12}
          style={{ marginHorizontal: scaledHorizontal(5) }}
        >
          :
        </Text>
        <View
          style={{
            backgroundColor: color.danger100,
            paddingVertical: 5,
            paddingHorizontal: 5,
            borderRadius: 5,
          }}
        >
          <Text size={14} color={color.danger400} type={"bold"}>
            26
          </Text>
        </View>
      </View>
    </View>
  );
};

export default DiamondWaitingCard;
