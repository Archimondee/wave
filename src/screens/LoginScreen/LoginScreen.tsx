import icons from "configs/icons";
import * as React from "react";
import images from "configs/images";
import {
  View,
  SafeAreaView,
  Image,
  // TextInput,
  // Alert,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
// eslint-disable-next-line import/order
import { useForm, Controller } from "react-hook-form";
import "../../i18n";

import { Button, Input, ModalAlert, Space, Text } from "components";
import NavigationService from "utils/NavigationService";
// import globalStyles from "utils/GlobalStyles";
// eslint-disable-next-line import/order
import colors from "configs/colors";

// import { scaledVertical } from "utils/ScaledService";
import { scale } from "utils/Responsive";
import { scaledHorizontal, scaledVertical } from "utils/ScaledService";
import { useDispatch } from "react-redux";
import type { RouteProp } from "@react-navigation/core";
import type { RootStackParamList } from "src/types/NavigatorTypes";
import type { StackNavigationProp } from "@react-navigation/stack";
import { postLogin } from "stores/persist/actions";
import { useState } from "react";
// import { useToken } from "hooks";
import { wait } from "utils/Utils";

import styles from "./LoginScreenStyles";

type LoginScreenRouteType = RouteProp<
  RootStackParamList,
  "LoginScreen"
  // "LoginScreen" | "LoginModal"
>;

type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "LoginScreen"
  // "LoginScreen" | "LoginModal"
>;

type Prop = {
  route: LoginScreenRouteType;
  navigation: LoginScreenNavigationProp;
};

const LoginScreen = ({}: Prop) => {
  // const token = useToken();
  const dispatch: any = useDispatch();
  const [modalError, setModalError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: any) => {
    const bodyData = {
      email: data.email,
      password: data.password,
    };

    dispatch(
      postLogin(
        bodyData,
        () => {
          wait(100)
            .then(() => {
              // logEvent("email_login", {
              //   email: newVal,
              //   password: "filled",
              //   status: "login_success",
              // });
            })
            .finally(() => {
              wait(100).then(() => {
                // if (route?.params?.from) {
                //   NavigationService.replace("TabNavigator", {
                //     screen: route?.params?.from,
                //   });
                // } else {
                //   NavigationService.navigate("TabNavigator");
                // }
                NavigationService.navigate("TabNavigator");
              });
            });
        },
        (status, err) => {
          setModalError(true);
          setErrorMsg(err?.response?.data?.message);
          if (err?.response?.status === 401) {
            setErrorMsg(
              "Email atau password yang anda masukan salah. Silahkan coba lagi!",
            );
          }
          window.console.log(status);
          window.console.log(err?.response?.data?.message);
        },
      ),
    );
  };

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
      <View style={{ margin: 16 }}>
        <Text size={24} type={"bold"} color={colors.primary700}>
          Masuk
        </Text>
        <Space height={40} />
        <Controller
          name="email"
          control={control}
          rules={{
            required: {
              value: true,
              message: "Ini wajib diisi.",
            },
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "invalid email address",
            },
          }}
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder="example@mail.com"
              title="Email atau nomor telfon"
              onChange={onChange}
              value={value}
              error={errors.email && errors.email.message}
            />
          )}
        />
        <Text
          size={14}
          color={colors.secondary500}
          style={{
            textDecorationLine: "underline",
            alignSelf: "flex-end",
            position: "absolute",
            top: 173,
            zIndex: 2,
          }}
          onPress={() => {
            NavigationService.navigate("ForgotPasswordScreen");
          }}
        >
          Lupa Kata Sandi?
        </Text>
        <Controller
          name="password"
          control={control}
          rules={{
            required: {
              value: true,
              message: "Ini wajib diisi.",
            },
            minLength: {
              value: 3,
              message: "Min 8 Character.",
            },
          }}
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder="Masukkan kata sandi"
              title="Kata Sandi"
              onChange={onChange}
              value={value}
              secureTextEntry
              error={errors.password && errors.password.message}
            />
          )}
        />
        <Space height={20} />
        <Button
          // buttonColor={colors.primary500}
          type={"dark"}
          title="Masuk"
          onPress={handleSubmit(onSubmit)}
        />
        <Space height={30} />
        <Button
          iconStyle={{
            width: scale(18),
            height: scale(18),
            tintColor: undefined,
          }}
          icon={images.google}
          type={"light"}
          title="Masuk dengan akun google"
          onPress={() => NavigationService.navigate("TabNavigator")}
        />
        <View style={styles.wrapFooter}>
          <Text size={14} color={colors.neutral400}>
            Belum Punya Akun?
          </Text>
          <TouchableOpacity
            onPress={() => {
              NavigationService.navigate("RegisterScreen");
            }}
          >
            <Text
              size={14}
              color={colors.secondary400}
              style={{ marginLeft: 8 }}
            >
              Daftar
            </Text>
          </TouchableOpacity>
        </View>
        <Space height={50} />
        <View style={styles.wrapOr}>
          <View style={styles.lining} />
          <View style={styles.textOr}>
            <Text size={12} color={colors.neutral300}>
              Atau
            </Text>
          </View>
          <View style={styles.lining} />
        </View>
        <Space height={50} />
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <TouchableOpacity
            onPress={() => {
              NavigationService.navigate("TabNavigator");
            }}
          >
            <Text
              size={14}
              color={colors.secondary400}
              style={{ marginLeft: 8 }}
            >
              Lewati dulu
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <ModalAlert
        containerStyle={{ minHeight: scaledVertical(200) }}
        showModal={modalError}
        onBackdropPress={() => setModalError(false)}
        contentStyle={{
          backgroundColor: "#fff",
          borderRadius: 10,
          minHeight: 210,
          width: 280,
          alignSelf: "center",
        }}
        hideModal={() => setModalError(false)}
        description={errorMsg}
        singleButton
        icon={images.password}
      />
    </SafeAreaView>
  );
};

export default LoginScreen;
