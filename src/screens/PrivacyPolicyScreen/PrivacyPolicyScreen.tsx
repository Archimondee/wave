// import HeaderCustom from "components/HeaderCustom";
// import api from "configs/api";
import icons from "configs/icons";
// import React, { useState, useEffect } from "react";
import { View, SafeAreaView, TouchableOpacity, Image } from "react-native";
import { Text } from "components";
import WebView from "react-native-webview";
import NavigationService from "utils/NavigationService";

const PrivacyPolicyScreen = () => {
  // const [dataTerms, setDataterms] = useState({} as any);

  // useEffect(() => {
  //   api.getPrivacyPolicy().then(result => {
  //     setDataterms(result.data);
  //   });
  // }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ marginVertical: 5 }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity
            style={{ flexDirection: "row" }}
            onPress={() => NavigationService.back()}
          >
            <Image source={icons.arrowLeft} style={{ width: 24, height: 24 }} />
          </TouchableOpacity>
          <Text type="bold" size={16} style={{ marginLeft: 16 }}>
            Ubah Kata Sandi
          </Text>
        </View>
      </View>
      <WebView
        style={{ marginHorizontal: 16 }}
        scrollEnabled={true}
        source={{ html: "<p>Test</p><p>privacy and policy</p>" }}
      />
    </SafeAreaView>
  );
};

export default PrivacyPolicyScreen;
