import { Text } from "components";
import color from "configs/colors";
import images from "configs/images";
import React from "react";
import { View, Image } from "react-native";

const WaitingScreen = () => {
  return (
    <View>
      <View
        style={{
          alignItems: "center",
          flex: 1,
        }}
      >
        <Image
          source={images.walletEmpty}
          style={{ height: 280, width: 280 }}
        />
        <Text size={14} color={color.neutral400}>
          Belum ada riwayat transaksi
        </Text>
      </View>
    </View>
  );
};

export default WaitingScreen;
