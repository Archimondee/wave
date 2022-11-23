import { Button, Countdown, Space, Text } from "components";
import colors from "configs/colors";
import fonts from "configs/fonts";
import images from "configs/images";
import React, { useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Image,
  View,
  TextInput,
  Keyboard,
  // Alert,
} from "react-native";
import height from "utils/HeightPercent";
import NavigationService from "utils/NavigationService";
import { useRoute } from "@react-navigation/native";
// import { useDispatch } from "react-redux";
// import ModalAlert from "components/ModalAlert";
// import { scaledVertical } from "utils/ScaledService";
import icons from "configs/icons";

const initialBody = {
  first: "",
  second: "",
  third: "",
  fourth: "",
};

const OtpScreen = () => {
  // const dispatch: any = useDispatch();
  const [body, setBody] = useState(initialBody);
  const [, setHeightSpace] = useState(256);
  // const [modalError, setModalError] = useState(false);
  // const [errorMsg, setErrorMsg] = useState("");

  const ref = {
    inputFirst: useRef<TextInput>(null),
    inputSecond: useRef<TextInput>(null),
    inputThird: useRef<TextInput>(null),
    inputFourth: useRef<TextInput>(null),
  };
  const route: any = useRoute();

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setHeightSpace(32);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setHeightSpace(256);
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          width: "100%",
          height: 150,
        }}
      >
        <Image
          source={images.ellipse}
          style={{
            width: "100%",
            height: "100%",
            top: -50,
          }}
        />
        <Image
          source={icons.logo.appWhite}
          style={{
            position: "absolute",
            justifyContent: "center",
            alignItems: "center",
            top: -20,
            transform: [{ scale: 0.4 }],
          }}
        />
      </View>
      <View style={styles.boxContainer}>
        <Text
          color={colors.primary700}
          type="extrabold"
          size={24}
          style={{ marginTop: 120 }}
        >
          Masukan Kode OTP
        </Text>
        <Space height={12} />
        <Text size={12} color={colors.neutral400}>
          Masukan kode yang telah dikirim ke{" "}
          {route?.params?.email || "0819-XXXX-XX2811"}
        </Text>
        <Space height={32} />
        <View style={{ width: "100%", flexDirection: "row" }}>
          <View
            style={{
              flex: 1,
              borderWidth: 1,
              borderColor: colors.neutral300,
              alignItems: "center",
              borderRadius: 10,
            }}
          >
            <TextInput
              ref={ref.inputFirst}
              style={{
                textAlign: "center",
                width: "100%",
                fontSize: 14,
                padding: 10,
                fontFamily: fonts.inter,
                color: colors.neutral600,
              }}
              maxLength={1}
              keyboardType="number-pad"
              onFocus={() => {
                setBody({
                  ...body,
                  first: "",
                  second: "",
                  third: "",
                  fourth: "",
                });
              }}
              value={body.first}
              onChangeText={text => {
                setBody({ ...body, first: text });
                body.first === "" && ref.inputSecond.current?.focus();
              }}
            />
          </View>
          <Space width={8} />
          <View
            style={{
              flex: 1,
              borderWidth: 1,
              borderColor: colors.neutral300,
              alignItems: "center",
              borderRadius: 10,
            }}
          >
            <TextInput
              ref={ref.inputSecond}
              style={{
                textAlign: "center",
                width: "100%",
                fontSize: 14,
                padding: 10,
                fontFamily: fonts.inter,
                color: colors.neutral600,
              }}
              maxLength={1}
              keyboardType="number-pad"
              onFocus={() => {
                setBody({ ...body, second: "", third: "", fourth: "" });
              }}
              onChangeText={text => {
                setBody({ ...body, second: text });
                body.second === "" && ref.inputThird.current?.focus();
              }}
              value={body.second}
            />
          </View>
          <Space width={8} />
          <View
            style={{
              flex: 1,
              borderWidth: 1,
              borderColor: colors.neutral300,
              alignItems: "center",
              borderRadius: 10,
            }}
          >
            <TextInput
              ref={ref.inputThird}
              style={{
                textAlign: "center",
                width: "100%",
                fontSize: 14,
                padding: 10,
                fontFamily: fonts.inter,
                color: colors.neutral600,
              }}
              maxLength={1}
              keyboardType="number-pad"
              onFocus={() => {
                setBody({ ...body, third: "", fourth: "" });
              }}
              onChangeText={text => {
                setBody({ ...body, third: text });
                body.third === "" && ref.inputFourth.current?.focus();
              }}
              value={body.third}
            />
          </View>
          <Space width={8} />
          <View
            style={{
              flex: 1,
              borderWidth: 1,
              borderColor: colors.neutral300,
              alignItems: "center",
              borderRadius: 10,
            }}
          >
            <TextInput
              ref={ref.inputFourth}
              style={{
                textAlign: "center",
                width: "100%",
                fontSize: 14,
                padding: 10,
                fontFamily: fonts.inter,
                color: colors.neutral600,
              }}
              maxLength={1}
              keyboardType="number-pad"
              onFocus={() => {
                setBody({ ...body, fourth: "" });
              }}
              onChangeText={text => {
                setBody({ ...body, fourth: text });
                body.fourth === "" && Keyboard.dismiss();
              }}
              value={body.fourth}
            />
          </View>
        </View>
        <Space height={30} />
        <Button
          onPress={() => {
            NavigationService.navigate("TabNavigator");
          }}
          title="Verifikasi"
          type={
            body.first !== "" &&
            body.fourth !== "" &&
            body.second !== "" &&
            body.third !== ""
              ? "dark"
              : "disabled"
          }
          disabled={
            body.first !== "" &&
            body.fourth !== "" &&
            body.second !== "" &&
            body.third !== ""
              ? false
              : true
          }
        />
        <Space height={32} />
        <Text size={14} color={colors.neutral400} textAlign="center">
          Belum mendapatkan kode?
        </Text>
        <Space height={8} />
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Countdown minute={3} second={10} />
        </View>
      </View>
      {/* <ModalAlert
        containerStyle={{ minHeight: scaledVertical(188) }}
        showModal={modalError}
        onBackdropPress={() => setModalError(false)}
        contentStyle={{
          backgroundColor: "#fff",
          borderRadius: 10,
          minHeight: 188,
          width: 280,
          alignSelf: "center",
        }}
        hideModal={() => setModalError(false)}
        description={errorMsg}
        singleButton
        icon={images.cancel}
      /> */}
    </SafeAreaView>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  boxContainer: {
    height: height(100),
    paddingHorizontal: 16,
  },
});
