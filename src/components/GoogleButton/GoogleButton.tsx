import React, { memo } from "react";
import { Alert, Image, TouchableOpacity, View } from "react-native";
// import { useDispatch } from "react-redux";
import {
  GoogleSignin,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import colors from "configs/colors";
import images from "configs/images";
import NavigationService from "utils/NavigationService";

import Text from "../Text/Text";
// import icons from "configs/icons";
// import NavigationService from "utils/NavigationService";
// import { wait } from "utils/Utils";
// import { logEvent } from "utils/Analytic";
// import { postLoginSocmed } from "../../store/persist/actions";

import styles from "./styles";

GoogleSignin.configure({
  offlineAccess: true,
  webClientId:
    "1085376059228-0kaf9u2c2ru6kvjh49nafdctmn6829hn.apps.googleusercontent.com",
  iosClientId:
    "1085376059228-5upt3ojba4q3r31rrgsga9ga1a13vu78.apps.googleusercontent.com",
});

const Component = () => {
  const _onProgress = async () => {
    try {
      await GoogleSignin.signOut();
      const ress = await GoogleSignin.signIn();
      const userInfo = ress?.user;

      const datas: any = {
        fullname: userInfo?.name,
        email: userInfo?.email,
        socmed_token: userInfo?.id,
      };

      window.console.log(datas);
      NavigationService.navigate("TabNavigator");
      // dispatch(
      //   postLoginSocmed(datas, () => {
      //     wait(100)
      //       .then(() => {
      //         logEvent("google_login", { email: userInfo?.email });
      //       })
      //       .finally(() => {
      //         setVisible();
      //         NavigationService.navigate("TabNavigator");
      //       });
      //   }),
      // );
    } catch (error) {
      const err: any = error;
      if (err.code === statusCodes.SIGN_IN_CANCELLED) {
        Alert.alert("Canceled", "Login has been canceled", [
          { text: "OK", onPress: () => window.console.log("OK Pressed") },
        ]);
      }
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles.container]}
      onPress={_onProgress}
    >
      <View style={styles.wrapTitle}>
        <Image source={images.google} style={[styles.icon]} />
        <Text color={colors.primary500} type="bold" size={14}>
          Masuk dengan akun Google
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default memo(Component);
