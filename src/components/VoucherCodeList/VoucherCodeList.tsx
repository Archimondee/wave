import color from "configs/colors";
import icons from "configs/icons";
import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { scaledHorizontal, scaledVertical } from "utils/ScaledService";
import Text from "../Text/Text";

interface VoucherCodeListProps {
  index: number;
  selectedVoucher: any;
  setSelectedVoucher: (args1: any) => void;
  item: any;
}

const VoucherCodeList = ({
  index,
  selectedVoucher,
  setSelectedVoucher,
  item,
}: VoucherCodeListProps) => {
  return (
    <View
      key={index}
      style={{
        flexDirection: "row",
        flex: 1,
        borderWidth: 1,
        borderColor: color.neutral300,
        borderRadius: 10,
        paddingHorizontal: scaledHorizontal(20),
        paddingVertical: scaledVertical(20),
        marginBottom: scaledVertical(20),
      }}
    >
      <TouchableOpacity onPress={() => setSelectedVoucher(item)}>
        <Image
          source={
            selectedVoucher.id === item.id
              ? icons.radioSelected
              : icons.radioDeselect
          }
          style={{ width: 24, height: 24, tintColor: color.primary500 }}
          resizeMode={"contain"}
        />
      </TouchableOpacity>
      <View
        style={{
          paddingTop: scaledVertical(3),
          paddingHorizontal: scaledHorizontal(10),
        }}
      >
        <Text
          size={14}
          type={"bold"}
          color={color.neutral500}
          style={{ lineHeight: 20 }}
        >
          {item.title}
        </Text>
        <Text size={12} color={color.neutral400} style={{ lineHeight: 20 }}>
          Kode : GOPAY10
        </Text>
        <Text size={12} color={color.neutral400} style={{ lineHeight: 20 }}>
          Gunakan metode pembayaran OVO dan dapatkan potongan maks. 30rb
        </Text>
      </View>
    </View>
  );
};

export default VoucherCodeList;
