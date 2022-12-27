import colors from "configs/colors";
import icons from "configs/icons";
import images from "configs/images";
import React, { useEffect, useState } from "react";
import { Text, Space } from "components";
import {
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import NavigationService from "utils/NavigationService";
import { wait } from "utils/Utils";
import { scaledHorizontal, scaledVertical } from "utils/ScaledService";

const CollectionScreen = () => {
  const [verified, setVerified] = useState(false);
  useEffect(() => {
    wait(1500).then(() => setVerified(true));
    wait(2500).then(() => NavigationService.navigate("ChangePasswordScreen"));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          width: "100%",
          height: 150,
        }}
      >
        <ImageBackground
          source={images.ellipse}
          style={{
            width: "100%",
            height: "100%",
            top: -50,
          }}
        >
          <Space height={20} />
          <Image
            source={icons.logo.appWhite}
            style={{
              height: scaledVertical(240),
              width: scaledHorizontal(240),
              justifyContent: "center",
              alignSelf: "center",
            }}
            resizeMode={"contain"}
          />
        </ImageBackground>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "center",
        }}
      >
        <Space height={30} />
        <Image
          source={!verified ? images.mailBox : images.happy}
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: 300,
            height: 300,
          }}
        />
        <Text size={24}>
          {!verified ? "Cek Email Kamu" : "Email berhasil diverifikasi"}
        </Text>
        <Space height={12} />
        <Text
          size={12}
          type="light"
          style={{
            width: 290,
            textAlign: "center",
          }}
        >
          {!verified
            ? "Link verifikasi telah dikirimkan ke email kamu. Segera Cek email kamu dan klik tombol verifikasi"
            : "Untuk kembali ke aplikasi silahkan buka aplikasi di handphone kamu"}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default CollectionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.neutral50,
  },
});
