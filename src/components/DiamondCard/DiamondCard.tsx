import color from "configs/colors";
import icons from "configs/icons";
import images from "configs/images";
import React from "react";
import { Image, ImageBackground, TouchableOpacity, View } from "react-native";
import { scaledHorizontal, scaledVertical } from "utils/ScaledService";

import Button from "../Button/Button";
import Text from "../Text/Text";

interface DiamondCardProps {
  onPressTopup: () => void;
  onPressVoucher: () => void;
}

const DiamondCard = ({ onPressTopup, onPressVoucher }: DiamondCardProps) => {
  return (
    <View
      style={{
        marginHorizontal: scaledHorizontal(20),
        backgroundColor: color.neutral100,
        borderRadius: 10,

        height: "25%",
        paddingVertical: scaledVertical(30),
      }}
    >
      <View style={{ flexDirection: "row", flex: 1 }}>
        <View style={{ flex: 1 }}>
          <ImageBackground
            source={images.bgDiamond}
            style={{
              height: scaledVertical(230),
              width: "100%",
              justifyContent: "center",
            }}
            resizeMode={"contain"}
          >
            <Text
              textAlign="center"
              size={24}
              color={color.neutral500}
              type={"bold"}
            >
              14
            </Text>
            <Text
              textAlign="center"
              size={14}
              color={color.neutral400}
              style={{ marginTop: 10 }}
            >
              Berlian
            </Text>
          </ImageBackground>
        </View>
        <TouchableOpacity style={{ flex: 1 }} onPress={onPressVoucher}>
          <ImageBackground
            source={images.bgVoucher}
            style={{
              height: scaledVertical(230),
              width: "100%",
              justifyContent: "center",
            }}
            resizeMode={"contain"}
          >
            <Text
              textAlign="center"
              size={24}
              color={color.neutral500}
              type={"bold"}
            >
              14
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 10,
              }}
            >
              <Text size={14} color={color.neutral400}>
                Voucher
              </Text>
              <Image
                source={icons.chevronRight}
                style={{
                  height: 18,
                  width: 18,
                  marginTop: scaledVertical(2),
                  marginLeft: scaledHorizontal(3),
                }}
                resizeMode={"contain"}
              />
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </View>
      <View style={{ marginHorizontal: scaledHorizontal(10) }}>
        <Button title="Top Up Berlian" onPress={onPressTopup} />
      </View>

      {/* <Text color={color.neutral500} size={14}>
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
        
      </View> */}
    </View>
  );
};

export default DiamondCard;
