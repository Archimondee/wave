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
        source={{
          // eslint-disable-next-line max-len
          html: "<H1>privacy and policy</H1><H3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum velit a libero varius, nec porta quam aliquam.</H3>",
        }}
      />
    </SafeAreaView>
  );
};

export default PrivacyPolicyScreen;
