import { Button, Header, Space, Text, VoucherModal } from "components";
import color from "configs/colors";
import icons from "configs/icons";
import images from "configs/images";
import React, { useState } from "react";
import { Image, ScrollView, View, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import globalStyles from "utils/GlobalStyles";
import { scaledHorizontal, scaledVertical } from "utils/ScaledService";

import styles from "./PaymentConfirmScreenStyles";

const PaymentConfirmScreen = () => {
  const [showVoucher, setShowVoucher] = useState(false);
  const [voucherText, setVoucherText] = useState("");
  const [selectedVoucher, setSelectedVoucher] = useState({} as any);

  const dataTest = [
    { id: 1, title: "[GOPAY] 1000", code: "GOPAY1000" },
    { id: 2, title: "[GOPAY] 2000", code: "GOPAY2000" },
    { id: 3, title: "[GOPAY] 3000", code: "GOPAY3000" },
    { id: 4, title: "[GOPAY] 4000", code: "GOPAY4000" },
    { id: 5, title: "[GOPAY] 5000", code: "GOPAY5000" },
    { id: 6, title: "[GOPAY] 6000", code: "GOPAY6000" },
  ];

  // eslint-disable-next-line @typescript-eslint/ban-types
  const handleSelectedVoucher = (selected: {}) => {
    setSelectedVoucher(selected);
    setShowVoucher(false);
  };

  return (
    <View style={globalStyles(color.neutral100).topSafeArea}>
      <Header title="Top Up Berlian" titleOn="left" withBackIcon />
      <ScrollView
        style={{ flex: 1, paddingHorizontal: scaledHorizontal(20) }}
        showsVerticalScrollIndicator={false}
      >
        <Space height={20} />
        <View style={styles.container}>
          <Text color={color.neutral500} size={16} type={"bold"}>
            Pembelian
          </Text>
          <View
            style={{
              marginTop: scaledVertical(20),
              flexDirection: "row",
            }}
          >
            <Image source={images.diamond} style={{ height: 16, width: 16 }} />
            <Text
              color={color.neutral500}
              size={14}
              style={{
                marginLeft: scaledHorizontal(10),
              }}
              type={"bold"}
            >
              50 Berlian
            </Text>
            <Text
              color={color.primary500}
              size={14}
              type={"bold"}
              style={{
                marginLeft: scaledHorizontal(5),
              }}
            >
              + Bonus 1 Berlian & 1 Novel
            </Text>
          </View>
        </View>
        <Space height={20} />
        <View style={styles.container}>
          <Text color={color.neutral500} size={16} type={"bold"}>
            Kode Voucher
          </Text>
          <TouchableOpacity
            onPress={() => setShowVoucher(true)}
            style={{
              marginTop: scaledVertical(20),
              borderWidth: 1,
              borderColor: color.neutral300,
              borderRadius: 10,
              paddingVertical: scaledVertical(25),
              paddingHorizontal: scaledHorizontal(20),
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text color={color.neutral500} size={14}>
              {selectedVoucher.code
                ? selectedVoucher.code
                : "Gunakan / masukkan kode"}
            </Text>
            <Image
              source={icons.chevronRight}
              style={{
                height: 18,
                width: 18,
                tintColor: color.neutral300,
              }}
              resizeMode={"contain"}
            />
          </TouchableOpacity>

          {selectedVoucher.code ? (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                borderStyle: "dashed",
                borderColor: color.success500,
                borderWidth: 1,
                paddingVertical: scaledVertical(20),
                paddingHorizontal: scaledHorizontal(10),
                borderRadius: 5,
                backgroundColor: color.success100,
                marginTop: scaledVertical(20),
              }}
            >
              <Image
                source={icons.receiptPercent}
                style={{
                  height: 18,
                  width: 18,
                  tintColor: color.success500,
                }}
                resizeMode={"contain"}
              />
              <Text
                color={color.neutral500}
                size={12}
                style={{ marginLeft: scaledHorizontal(10) }}
              >
                {selectedVoucher.code}
              </Text>
            </View>
          ) : null}
        </View>
        <Space height={20} />
        <View style={styles.container}>
          <View style={styles.priceStylesContainer}>
            <Text color={color.neutral500} size={14}>
              Harga
            </Text>
            <Text color={color.neutral400} size={14}>
              IDR 50.000
            </Text>
          </View>
          <View
            style={[
              styles.priceStylesContainer,
              { marginTop: scaledVertical(20) },
            ]}
          >
            <Text color={color.neutral500} size={14}>
              Diskon
            </Text>
            <Text color={color.neutral400} size={14}>
              -
            </Text>
          </View>
          <View style={styles.containerPrice}>
            <Text color={color.neutral500} size={14} style={{}} type={"bold"}>
              Total Pembayaran
            </Text>
            <Text
              color={color.primary500}
              size={14}
              type={"bold"}
              style={{
                marginLeft: scaledHorizontal(5),
              }}
            >
              IDR 50.000
            </Text>
          </View>
          <Space height={20} />
          <Button
            title="Bayar"
            style={{ paddingVertical: scaledVertical(20) }}
          />
        </View>
      </ScrollView>

      <Modal
        animationIn="slideInUp"
        animationOut="slideOutDown"
        isVisible={showVoucher}
        onDismiss={() => setShowVoucher(false)}
        onBackdropPress={() => setShowVoucher(false)}
        onBackButtonPress={() => setShowVoucher(false)}
        useNativeDriver={true}
        useNativeDriverForBackdrop={true}
        style={{ flex: 1, justifyContent: "flex-end", margin: 0 }}
      >
        <VoucherModal
          showVoucher={showVoucher}
          setShowVoucher={setShowVoucher}
          voucherText={voucherText}
          setVoucherText={setVoucherText}
          dataVoucher={dataTest}
          selectedVoucher={selectedVoucher}
          setSelectedVoucher={handleSelectedVoucher}
        />
      </Modal>
    </View>
  );
};

export default PaymentConfirmScreen;
