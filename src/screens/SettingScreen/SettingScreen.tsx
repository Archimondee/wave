// import HeaderCustom from "components/HeaderCustom";
import colors from "configs/colors";
import icons from "configs/icons";
import React, { useCallback, useState, useEffect } from "react";
// import { useTranslation } from "react-i18next";
import {
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  Platform,
  Linking,
  Alert,
} from "react-native";
import Modal from "react-native-modal";
// import { useDispatch } from "react-redux";
import { widthPercentage } from "utils/PercentageService";
import RNFS, { stat } from "react-native-fs";
import RNFetchBlob from "rn-fetch-blob";
import { ModalAlert, Text, Space, Header } from "components";
import { scaledVertical } from "utils/ScaledService";
import images from "configs/images";
// import { chooseLanguage } from "../../store/persist/actions";
// import { useLanguage } from "../../hooks";

const SettingScreen = () => {
  // const dispatch: any = useDispatch();
  // const language = useLanguage();
  // const { i18n } = useTranslation();

  const [openModal, setOpenModal] = useState(false);
  const [checked] = useState("Bahasa Indonesia");
  const [sizeCache, setSizeCache] = useState(0);
  const [modalSuccess, setModalSuccess] = useState(false);

  // useEffect(() => {
  //   setChecked(language === "id" ? "Bahasa Indonesia" : "Bahasa Inggris");
  // }, [language]);

  const _goToSetting = useCallback(async (action, extras) => {
    try {
      if (Platform.OS === "ios") {
        await Linking.openURL("app-settings://notification/gooddreamer");
      } else {
        await Linking.sendIntent(action, extras);
      }
    } catch (e) {
      Alert.alert("Terjadi Kesalahan");
    }
  }, []);

  const _deleteCache = async () => {
    const path = RNFS.CachesDirectoryPath;
    RNFetchBlob.fs.unlink(path).then(() => {
      setSizeCache(0);
      setModalSuccess(true);
    });
  };

  const _getCacheSize = async () => {
    const path = RNFS.CachesDirectoryPath;
    const size = await stat(path);
    setSizeCache(size.size / 1000);
  };

  useEffect(() => {
    _getCacheSize();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <View style={{ marginVertical: 5 }}>
          {/* <HeaderCustom
            title={i18n.t("setting.Setting")}
            titleOn="left"
            withBackIcon
          /> */}
        </View>
        <Header title="Ubah Kata Sandi" titleOn="left" withBackIcon />
        <View style={{ paddingHorizontal: 16 }}>
          <Space height={30} />
          <TouchableOpacity
            style={{
              height: 22,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
            onPress={() => setOpenModal(true)}
          >
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Text size={14}>Bahasa</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text size={14} style={{ marginRight: 6 }}>
                {checked}
              </Text>
              <Image
                source={icons.chevronRight}
                style={{ width: 16, height: 16 }}
              />
            </View>
          </TouchableOpacity>
          <Space height={24} />
          <TouchableOpacity
            style={{
              height: 22,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
            onPress={() =>
              _goToSetting("android.settings.APP_NOTIFICATION_SETTINGS", [
                {
                  "android.provider.extra.APP_PACKAGE": "id.gooddreamer.novel",
                },
              ])
            }
          >
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Text size={14}>Notifikasi</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ marginRight: 6 }} size={14}>
                Atur
              </Text>
              <Image
                source={icons.chevronRight}
                style={{ width: 16, height: 16 }}
              />
            </View>
          </TouchableOpacity>
          <Space height={24} />
          <View
            style={{
              height: 22,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Text size={14}>Hapus Cache</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ marginRight: 24 }} size={14}>
                {sizeCache} Mb
              </Text>
              <TouchableOpacity>
                <Text
                  size={14}
                  color={colors.secondary500}
                  onPress={() => _deleteCache()}
                >
                  Hapus
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
      <Modal
        isVisible={openModal}
        onBackdropPress={() => setOpenModal(false)}
        style={{ margin: 0, position: "absolute", bottom: 0 }}
      >
        <View
          style={{
            backgroundColor: "#fff",
            height: 270,
            width: widthPercentage(100),
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            padding: 24,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text type="bold">Setting Bahasa</Text>
            <TouchableOpacity onPress={() => setOpenModal(false)}>
              <Image source={icons.xmark} style={{ width: 24, height: 24 }} />
            </TouchableOpacity>
          </View>
          <Space height={18} />
          <TouchableOpacity
            style={{ flexDirection: "row" }}
            // onPress={() => {
            //   dispatch(
            //     chooseLanguage("id", () => {
            //       i18n.changeLanguage("id");
            //       setChecked("Bahasa Indonesia");
            //       setOpenModal(false);
            //     }),
            //   );
            // }}
          >
            <View
              style={{
                width: 24,
                height: 24,
                borderRadius: 12,
                borderWidth: 3,
                borderColor: colors.secondary500,
                justifyContent: "center",
                alignItems: "center",
                marginRight: 8,
              }}
            >
              <View
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  backgroundColor:
                    checked === "Bahasa Indonesia"
                      ? colors.secondary500
                      : "#fff",
                }}
              />
            </View>
            <Text size={16}>Indonesia</Text>
          </TouchableOpacity>
          <Space height={18} />
        </View>
      </Modal>
      <ModalAlert
        containerStyle={{ minHeight: scaledVertical(188) }}
        showModal={modalSuccess}
        onBackdropPress={() => setModalSuccess(false)}
        contentStyle={{
          backgroundColor: "#fff",
          borderRadius: 10,
          minHeight: 188,
          width: 280,
          alignSelf: "center",
        }}
        hideModal={() => setModalSuccess(false)}
        description={"Cache Berhasil Dihapus!"}
        singleButton
        icon={images.check}
      />
    </SafeAreaView>
  );
};

export default SettingScreen;
