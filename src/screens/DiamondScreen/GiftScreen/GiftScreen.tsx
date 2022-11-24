import { Text } from "components";
import color from "configs/colors";
import images from "configs/images";
import React from "react";
import { View, StyleSheet, Image } from "react-native";

const GiftScreen = () => {
  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
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

export default GiftScreen;

const styles = StyleSheet.create({
  container: { flex: 1 },
});
