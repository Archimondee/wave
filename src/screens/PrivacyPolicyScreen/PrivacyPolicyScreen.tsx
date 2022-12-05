// import HeaderCustom from "components/HeaderCustom";
// import api from "configs/api";
import React from "react";
import { SafeAreaView } from "react-native";
import { Header } from "components";
import WebView from "react-native-webview";

const PrivacyPolicyScreen = () => {
  // const [dataTerms, setDataterms] = useState({} as any);

  // useEffect(() => {
  //   api.getPrivacyPolicy().then(result => {
  //     setDataterms(result.data);
  //   });
  // }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <Header title="Kebijakan & Privasi" titleOn="left" withBackIcon />
      <WebView
        style={{ marginHorizontal: 16 }}
        scrollEnabled={true}
        source={{ html: "<p>Test</p><p>privacy and policy</p>" }}
      />
    </SafeAreaView>
  );
};

export default PrivacyPolicyScreen;
