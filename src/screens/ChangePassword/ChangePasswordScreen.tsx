import React from "react";
import { StyleSheet, SafeAreaView, Image, View } from "react-native";
import { useForm, Controller } from "react-hook-form";
import colors from "configs/colors";
import images from "configs/images";
import height from "utils/HeightPercent";
import { Button, Input, Space, Text } from "components";
// import ModalAlert from "components/ModalAlert";
// import { scaledVertical } from "utils/ScaledService";
import NavigationService from "utils/NavigationService";
import icons from "configs/icons";
// import { useRoute } from "@react-navigation/native";
// import { useDispatch } from "react-redux";

// import { postResetPassword } from "../../store/persist/actions";

const ChangePasswordScreen = () => {
  // const [modalSuccess, setModalSuccess] = useState(false);
  // const route: any = useRoute();
  // const dispatch: any = useDispatch();
  // const [modalError, setModalError] = useState(false);
  // const [errorMsg, setErrorMsg] = useState("");

  const {
    control,
    // handleSubmit,
    formState: { errors },
    // reset,
    watch,
  } = useForm({
    defaultValues: {
      password: "",
      password_confirmation: "",
    },
  });

  // const onSubmit = (data: any) => {
  //   const formData = {
  //     ...data,
  //     email: route?.params?.email,
  //     otp_pass: route?.params?.otp_pass,
  //   };

  //   window.console.log(formData);
  //   reset();
  //   dispatch(
  //     postResetPassword(
  //       formData,
  //       () => {
  //         setModalSuccess(true);
  //       },
  //       (status: any, err: any) => {
  //         setModalError(true);
  //         setErrorMsg(err?.response?.data?.message);
  //         window.console.log(status);
  //         window.console.log(err?.response?.data?.message);
  //       },
  //     ),
  //   );
  //   // NavigationService.navigate("TabNavigator", {
  //   //   screen: "HomeScreen",
  //   // });
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
          Ubah Kata Sandi
        </Text>
        <Space height={12} />
        <Text size={12} color={colors.neutral400}>
          Masukan kata sandi kamu yang baru
        </Text>
        <Space height={32} />
        <Controller
          control={control}
          name="password"
          rules={{
            required: {
              value: true,
              message: "Ini wajib diisi.",
            },
            minLength: {
              value: 3,
              message: "Min 8 Karakter.",
            },
          }}
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder="********"
              title="Kata sandi baru"
              secureTextEntry
              onChange={onChange}
              value={value}
              error={errors.password && errors.password.message}
            />
          )}
        />
        <Controller
          control={control}
          name="password_confirmation"
          rules={{
            required: {
              value: true,
              message: "Ini wajib diisi.",
            },
            minLength: {
              value: 3,
              message: "Min 8 Karakter.",
            },
            validate: (val: string) => {
              if (watch("password") !== val) {
                return "Password kamu tidak cocok";
              }
              return true;
            },
          }}
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder="********"
              title="Ulangi kata sandi baru"
              secureTextEntry
              onChange={onChange}
              value={value}
              error={
                errors.password_confirmation &&
                errors.password_confirmation.message
              }
            />
          )}
        />
        <Space height={240} />
        <Button
          title="Lanjut"
          type="dark"
          onPress={() => NavigationService.navigate("TabNavigator")}
        />
      </View>
      {/* <ModalAlert
        containerStyle={{ minHeight: scaledVertical(188) }}
        showModal={modalSuccess}
        contentStyle={{
          backgroundColor: "#fff",
          borderRadius: 10,
          minHeight: 188,
          width: 280,
          alignSelf: "center",
        }}
        hideModal={() => {
          setModalSuccess(false);
          NavigationService.navigate("LoginScreen");
        }}
        description={"Password Berhasil di reset. Mohon Kembali untuk Login"}
        singleButton
        icon={images.check}
      />
      <ModalAlert
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

export default ChangePasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.neutral50,
  },
  boxContainer: {
    height: height(100),
    paddingHorizontal: 16,
  },
});
