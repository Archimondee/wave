import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Image,
  View,
  ActivityIndicator,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import colors from "configs/colors";
import images from "configs/images";
import height from "utils/HeightPercent";
import { Button, Input, Space, Text } from "components";
import NavigationService from "utils/NavigationService";
import { scaledVertical } from "utils/ScaledService";
import icons from "configs/icons";

const ForgotPasswordScreen = () => {
  const dispatch: any = useDispatch();
  const [modalError, setModalError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [isLoading, setLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      email: "",
    },
  });

  // const onSubmit = (data: any) => {
  //   window.console.log(data);
  //   setLoading(true);
  //   dispatch(
  //     postForgotPassword(
  //       data,
  //       () => {
  //         setLoading(false);
  //         reset();
  //         NavigationService.navigate("OtpScreen", {
  //           email: data.email,
  //         });
  //       },
  //       (status, err) => {
  //         setLoading(false);
  //         setModalError(true);
  //         setErrorMsg(err?.response?.data?.message);
  //         window.console.log(status);
  //         window.console.log(err?.response?.data?.message);
  //       },
  //     ),
  //   );
  // };

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
          style={{ marginTop: 32 }}
        >
          Lupa kata sandi?
        </Text>
        <Text size={12} style={{ marginTop: 32 }}>
          Pilih kontak detail yang bisa kami gunakan untuk merubah kata sandi
          kamu
        </Text>
        <Space height={32} />
        <Controller
          control={control}
          name="email"
          rules={{
            required: {
              value: true,
              message: "Ini wajib diisi.",
            },
            minLength: {
              value: 3,
              message: "Min 3 Karakter.",
            },
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Alamat email tidak valid.",
            },
          }}
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder="Masukkan Email Kamu"
              title="Email"
              onChange={onChange}
              value={value}
              error={errors.email && errors.email.message}
            />
          )}
        />
        {/* <Input placeholder="example@gmail.com" title="Email" /> */}
        <Space height={320} />
        <Button
          title="Lanjut"
          type="dark"
          // onPress={handleSubmit()}
          // onPress={() => NavigationService.navigate("ChangePasswordScreen")}
        />
      </View>
    </SafeAreaView>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  boxContainer: {
    height: height(100),
    paddingHorizontal: 16,
  },
});
