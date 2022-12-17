import { Text, Header, Button, Space } from "components";
import color from "configs/colors";
import icons from "configs/icons";
import images from "configs/images";
import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import FastImage from "react-native-fast-image";
import globalStyles from "utils/GlobalStyles";
import NavigationService from "utils/NavigationService";
import { scale } from "utils/Responsive";

import styles from "./styles";

const SelectChapterScreen = () => {
  return (
    <View
      style={[
        globalStyles().topSafeArea,
        { backgroundColor: color.primary500 },
      ]}
    >
      <Header
        title="Beli Novel"
        titleOn="left"
        withBackIcon
        color={color.primary500}
      />
      <View
        style={{
          flex: 1,
          backgroundColor: color.neutral100,
          justifyContent: "space-between",
        }}
      >
        <View style={{ paddingHorizontal: 16 }}>
          <Space height={24} />
          <View
            style={{
              borderWidth: 1,
              borderColor: color.danger200,
              borderRadius: 10,
              backgroundColor: color.danger100,
              paddingHorizontal: 12,
              paddingVertical: 16,
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text size={scale(10)} type="semibold">
                Yah berlianmu kurang
              </Text>
              <Space width={8} />
              <Image
                source={images.diamond}
                style={{ width: 24, height: 24 }}
              />
              <Space width={4} />
              <Text size={scale(10)} type="semibold">
                35
              </Text>
            </View>
            <Button
              title="Top Up"
              onPress={() => NavigationService.navigate("TopupScreen")}
            />
          </View>
          <Space height={24} />
          <View style={{ alignItems: "center" }}>
            <FastImage
              source={images.exampleBook}
              style={{
                width: scale(188),
                height: scale(300),
                borderRadius: 10,
              }}
            />
            <Space height={24} />
            <Text size={16} type="bold">
              Terkatung-Katung Di Bulan Yang Dicuri
            </Text>
            <Space height={8} />
            <Text size={14} color={color.primary500}>
              Aldo Triadi
            </Text>
            <Space height={24} />
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={images.diamond}
                style={{ width: 24, height: 24 }}
              />
              <Space width={8} />
              <Text size={15} type="bold">
                50 Berlian
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            borderTopStartRadius: 10,
            borderTopEndRadius: 10,
            backgroundColor: color.neutral50,
            paddingHorizontal: 24,
            paddingVertical: 24,
            flexDirection: "row",
          }}
        >
          <Image
            source={icons.checkCircle}
            style={{ width: scale(15), height: scale(15), marginRight: 15 }}
          />
          <View>
            <Text>Dengan membeli kamu menyetujui</Text>
            <View style={{ flexDirection: "row" }}>
              <Text>persyaratan </Text>
              <TouchableOpacity
                onPress={() =>
                  NavigationService.navigate("PrivacyPolicyScreen")
                }
              >
                <Text
                  style={{ textDecorationLine: "underline" }}
                  color={color.primary500}
                >
                  kebijakan & privasi
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <Button
          iconStyle={{ width: 18, height: 18, tintColor: undefined }}
          icon={images.diamond}
          title="Beli Sekarang 50 Berlian"
          style={{ flex: 1, minHeight: 42 }}
        />
      </View>
    </View>
  );
};

export default SelectChapterScreen;
