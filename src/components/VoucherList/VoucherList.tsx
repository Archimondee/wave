import color from "configs/colors";
import icons from "configs/icons";
import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { scaledHorizontal, scaledVertical } from "utils/ScaledService";

import Space from "../Space/Space";
import Text from "../Text/Text";

interface VoucherListProps {
  index: number;
}

const VoucherList = ({ index }: VoucherListProps) => {
  return (
    <TouchableOpacity
      key={index}
      style={{
        //height: 150,
        backgroundColor: "white",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: color.neutral300,
        marginHorizontal: scaledHorizontal(20),
        marginBottom: scaledVertical(40),
      }}
    >
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: scaledHorizontal(20),
          paddingVertical: scaledVertical(30),
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            flexDirection: "row",

            alignItems: "center",
            borderRightColor: color.neutral300,
            borderRightWidth: 1,
          }}
        >
          <Image source={icons.coupon} style={{ height: 40, width: 40 }} />
          <View
            style={{
              marginLeft: scaledHorizontal(20),

              //marginRight: scaledHorizontal(40),
              width: "65%",
            }}
          >
            <Text size={16} color={color.neutral500} type={"bold"}>
              Gratis Klaim 1 Novel
            </Text>
            <Space height={10} />
            <Text
              size={12}
              color={color.neutral400}
              style={{ lineHeight: 20 }}
              numberOfLines={2}
            >
              Dari Pembelian Novel Bunda Hilang di Ambil Orang.
            </Text>
          </View>
        </View>

        <TouchableOpacity style={{}}>
          <Image
            source={icons.buttonLeft}
            style={{ height: 28, width: 28 }}
            resizeMode={"contain"}
          />
        </TouchableOpacity>
      </View>

      <View
        style={{
          position: "absolute",
          width: 50,
          height: 50,
          borderRadius: 30,
          right: 50,
          top: -32,
          backgroundColor: "white",
          //borderBottomWidth: 1,
          borderRightWidth: 1,
          borderBottomColor: color.neutral300,
          transform: [{ rotate: "90deg" }],
        }}
      />
      <View
        style={{
          position: "absolute",
          width: 50,
          height: 50,
          borderRadius: 25,
          right: 50,
          bottom: -32,
          backgroundColor: "white",
          //borderBottomWidth: 1,
          borderRightWidth: 1,
          borderBottomColor: color.neutral300,
          transform: [{ rotate: "270deg" }],
        }}
      />
    </TouchableOpacity>
  );
};

export default VoucherList;
