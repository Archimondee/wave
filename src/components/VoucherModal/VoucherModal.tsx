import color from "configs/colors";
import icons from "configs/icons";
import React from "react";
import { View, TouchableOpacity, ScrollView } from "react-native";
import FastImage from "react-native-fast-image";
import { scaledHorizontal, scaledVertical } from "utils/ScaledService";
import Button from "../Button";
import Input from "../Input/Input";
import { VerticalList } from "../List/List";
import Space from "../Space/Space";
import Text from "../Text/Text";
import VoucherCodeList from "../VoucherCodeList/VoucherCodeList";

interface VoucherModalProps {
  showVoucher: boolean;
  setShowVoucher: (args1: boolean) => void;
  voucherText: string;
  setVoucherText: (args1: string) => void;
  dataVoucher: any;
  selectedVoucher: {};
  setSelectedVoucher: (args1: {}) => void;
}

const VoucherModal = ({
  setShowVoucher,
  voucherText,
  setVoucherText,
  dataVoucher,
  selectedVoucher,
  setSelectedVoucher,
}: VoucherModalProps) => {
  return (
    <View
      style={{
        backgroundColor: color.neutral50,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        paddingHorizontal: scaledHorizontal(20),
        minHeight: scaledVertical(800),
      }}
    >
      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: color.neutral200,
        }}
      >
        <View
          style={{
            paddingVertical: scaledVertical(40),

            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text size={14} color={color.neutral500} type={"bold"}>
            Gunakan / Masukan Kode Voucher
          </Text>
          <TouchableOpacity onPress={() => setShowVoucher(false)}>
            <FastImage
              source={icons.xmark}
              style={{
                height: scaledVertical(40),
                width: scaledHorizontal(40),
                marginRight: scaledHorizontal(-10),
              }}
              resizeMode={"contain"}
            />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 1 }}>
            <Input
              placeholder="Masukkan kode"
              onChange={setVoucherText}
              value={voucherText}
              placeholderTextColor={color.neutral300}
              borderColorInput={color.primary500}
            />
          </View>
          <View>
            <Button
              title="Pakai"
              style={{
                marginLeft: scaledHorizontal(20),
                height: scaledVertical(97),
              }}
            />
          </View>
        </View>
      </View>
      <Space height={15} />
      <ScrollView
        style={{
          flex: 1,
        }}
      >
        <VerticalList
          //key={indexDate}
          scrollEnabled={false}
          data={dataVoucher}
          listKey={"grid-vertical"}
          keyExtractor={item => item?.id}
          renderItem={({ item, index }: { item: any; index: number }) => {
            window.console.log("data", item);
            return (
              <VoucherCodeList
                key={index}
                index={index}
                selectedVoucher={selectedVoucher}
                setSelectedVoucher={setSelectedVoucher}
                item={item}
              />
            );
          }}
          isShowVerticalIndicator={false}
        />
        <Space height={30} />
        {/* <Image source={icons.giftVoucher} style={{ height: 100, width: 100 }} />
        <Text
          size={14}
          color={color.neutral400}
          textAlign={"center"}
          style={{
            fontWeight: "400",
            paddingHorizontal: scaledHorizontal(100),
            marginTop: scaledVertical(10),
          }}
        >
          Voucher belum tersedia untuk transaksi ini
        </Text> */}
      </ScrollView>
    </View>
  );
};

export default VoucherModal;
