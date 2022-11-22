import * as React from "react";
import { Text, View } from "react-native";
import NavigationService from "utils/NavigationService";
import Config from "react-native-config";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import moment from "moment";
import { useTranslation } from "react-i18next";
import { ButtonExample, Header } from "components";
import { useTestData } from "hooks";
import { getDataTest } from "stores/user/actions";
import "../../i18n";

import styles from "./LoginScreenStyles";
import globalStyles from "utils/GlobalStyles";

const LoginScreen = () => {
  //const testData = useTestData();
  const dispatch: any = useDispatch();
  //const { i18n } = useTranslation();

  useEffect(() => {
    dispatch(getDataTest());
  }, [dispatch]);

  // const changeLanguage = (lng: string) => {
  //   i18n.changeLanguage(lng);
  // };
  return (
    <View style={[globalStyles().container]}>
      <Header isNavigateSearchScreen withSearchBar placeholder="Cari novel" />
      <Header withSearchBar placeholder="Cari novel" />
      <Header withBackIcon title="Top Up Berlian" titleOn="left" />
      <Header title="Pencarian" titleOn="left" withCloseIcon />
      <Header
        isNavigateSearchScreen
        withSearchBar
        placeholder="Cari novel"
        withGiftIcon
        withNotificationIcon
      />

      {/* <Text>LoginScreen</Text>
      <ButtonExample
        title="Testing Button"
        onPress={() => NavigationService.navigate("RegisterScreen")}
      />
      <ButtonExample
        title="Change language"
        onPress={() => {
          i18n.changeLanguage("id");
        }}
      />
      <Text>Status : {Config.STATUS}</Text>

      <Text>Today : {moment().format("MMMM Do YYYY, h:mm:ss a")}</Text>
      <Text>From branch master</Text>
      <Text>Translation : {i18n.t("home")}</Text>

      <Text>Data Test </Text>
      <Text>CODE : {testData.data?.bpi.EUR.code}</Text>
      <Text>Rate : {testData.data?.bpi.EUR.rate}</Text>
      <Text />
      <Text>Data Test </Text>
      <Text>CODE : {testData.data?.bpi.GBP.code}</Text>
      <Text>Rate : {testData.data?.bpi.GBP.rate}</Text>
      <Text>Disclaimer : {testData.data?.disclaimer}</Text> */}
    </View>
  );
};

export default LoginScreen;
