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
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import "../../i18n";
import { Button, Input, Space, Text } from "components";
import colors from "configs/colors";
import NavigationService from "utils/NavigationService";
import { isTablet, scale } from "utils/Responsive";
import width from "utils/WidthPercent";
import { useState } from "react";

import styles from "./RegisterScreenStyles";

const RegisterScreen = () => {
  const [useEmail, setUseEmail] = useState(false);

  const {
    control,
    // handleSubmit,
    formState: { errors },
  } = useForm(
    useEmail
      ? {
          defaultValues: {
            fullname: "",
            email: "",
            password: "",
          },
        }
      : {
          defaultValues: {
            fullname: "",
            phone: "",
            password: "",
          },
        },
  );
  // const onSubmit = data => console.log(data);

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
      <View style={{ margin: 16 }}>
        <Text size={24} type={"bold"} color={colors.primary700}>
          Buat Aku Baru
        </Text>
        <Space height={40} />
        <Controller
          control={control}
          rules={{
            maxLength: 100,
          }}
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder="Eg. John Doe"
              title="Nama Lengkap"
              onChange={onChange}
              value={value}
              // error={errors.password && errors.password.message}
            />
          )}
          name="fullname"
        />
        {!useEmail && (
          <>
            <Text type="light" size={14}>
              Nomor Telepon
            </Text>
            <View
              style={{
                flexDirection: "row",
                marginTop: 12,
                justifyContent: "space-between",
              }}
            >
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  width: isTablet() ? scale(110) : 107,
                  height: isTablet() ? 51 : 49,
                  borderWidth: 1,
                  borderColor: colors.neutral300,
                  borderRadius: 10,
                  paddingTop: 15,
                  paddingHorizontal: 12,
                  paddingBottom: 16,
                  justifyContent: "space-between",
                }}
                // onPress={() => setShowModal(true)}
              >
                <Image
                  source={icons.flag.indonesia}
                  style={{ width: 18, height: 18 }}
                />
                <Text size={14}>{"+62"}</Text>
                <Image
                  source={icons.arrowSmallDown}
                  style={{ width: 18, height: 18 }}
                />
              </TouchableOpacity>
              <Controller
                control={control}
                name="phone"
                // rules={{
                //   required: {
                //     value: true,
                //     message: "This is required.",
                //   },
                //   minLength: {
                //     value: 3,
                //     message: "Min 10 Character.",
                //   },
                // }}
                render={({ field: { onChange, value } }) => (
                  <Input
                    keyboardType="number-pad"
                    width={width(60)}
                    placeholder="81X-XXX-XXX"
                    onChange={onChange}
                    value={value}
                    error={errors.phone && errors.phone.message}
                  />
                )}
              />
            </View>
          </>
        )}
        {useEmail && (
          <Controller
            control={control}
            rules={{
              maxLength: 100,
            }}
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="example@mail.com"
                title="Email"
                onChange={onChange}
                value={value}
                error={errors.password && errors.password.message}
              />
            )}
            name="email"
          />
        )}

        <Controller
          control={control}
          rules={{
            maxLength: 100,
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
          name="password"
        />
        <Space height={10} />
        <Button
          // buttonColor={colors.primary500}
          type={"dark"}
          title="Lanjut"
          onPress={() => {
            NavigationService.navigate("TabNavigator");
          }}
        />
        <Space height={24} />
        <Button
          // buttonColor={colors.primary500}
          type={"light"}
          title={!useEmail ? "Daftar lewat email" : "Daftar lewat nomor telepon"}
          onPress={() => setUseEmail(!useEmail)}
        />
        <Space height={30} />
        {/* <Button
          fontType={"reguler"}
          fontColor={colors.secondary300}
          type={"light"}
          title="Daftar lewat nomor telepon"
        />
        <Space height={30} /> */}
        <View style={styles.wrapOr}>
          <View style={styles.lining} />
          <View style={styles.textOr}>
            <Text size={12} color={colors.neutral300}>
              Atau
            </Text>
          </View>
          <View style={styles.lining} />
        </View>
        <Space height={10} />
        <View style={styles.wrapFooter}>
          <Text size={14} color={colors.neutral400}>
            Sudah Punya Akun?
          </Text>
          <TouchableOpacity
            onPress={() => {
              NavigationService.navigate("LoginScreen");
            }}
          >
            <Text
              size={14}
              color={colors.secondary400}
              style={{ marginLeft: 8 }}
            >
              Masuk
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;
