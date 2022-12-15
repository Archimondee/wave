import colors from "configs/colors";
import images from "configs/images";
import * as React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Text, Space } from "components";
import { ScrollView } from "react-native-gesture-handler";
import icons from "configs/icons";
import NavigationService from "utils/NavigationService";
import { scale } from "utils/Responsive";
import FastImage from "react-native-fast-image";

const ProfileScreen = () => {
  const dataAkun = [
    {
      id: 1,
      title: "Ubah Profile",
      icon: icons.pencilSquare,
      navigation: () => {
        NavigationService.navigate("EditProfileScreen");
      },
    },
    {
      id: 2,
      title: "Ubah Kata Sandi",
      icon: icons.lockClosed,
      navigation: () => {
        NavigationService.navigate("ProfileChangePasswordScreen");
      },
    },
    {
      id: 3,
      title: "Penulis Yang Diikuti",
      icon: icons.users,
      navigation: () => {
        NavigationService.navigate("FollowedAuthorScreen");
      },
    },
  ];

  const dataAplikasi = [
    {
      id: 1,
      title: "Pengaturan Aplikasi",
      icon: icons.cog6tooth,
      navigation: () => {
        NavigationService.navigate("SettingScreen");
      },
    },
    {
      id: 2,
      title: "Kebihakan & Privasi",
      icon: icons.documentText,
      navigation: () => {
        NavigationService.navigate("PrivacyPolicyScreen");
      },
    },
    {
      id: 3,
      title: "Bantuan",
      icon: icons.megaphone,
      navigation: () => {
        NavigationService.navigate("SettingScreen");
      },
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView>
        <ImageBackground
          source={images.profileBackground}
          style={{ height: scale(287), paddingTop: scale(114) }}
          resizeMode={"cover"}
        >
          <FastImage
            source={images.profilePicture}
            style={{
              alignSelf: "center",
              borderRadius: 150,
              width: scale(140),
              height: scale(140),
            }}
          />
        </ImageBackground>
        <View style={styles.content}>
          <Space height={24} />
          <TouchableOpacity>
            <View
              style={{ position: "absolute", zIndex: 1, top: -25, left: 6 }}
            >
              <Image style={{ height: 70, width: 70 }} source={images.winner} />
            </View>
            <View
              style={{
                justifyContent: "space-between",
                flexDirection: "row",
                borderColor: "#9DC6FB",
                borderWidth: 2,
                borderRadius: 10,
              }}
            >
              <View style={{ margin: 12 }}>
                <View
                  style={{
                    flexDirection: "row",
                  }}
                >
                  <Space width={80} />
                  <View style={{ justifyContent: "center" }}>
                    <Text type="bold" size={12} color={"#CB97E7"}>
                      Undang Teman
                    </Text>
                  </View>
                  <Space width={6} />
                  <View
                    style={{
                      borderRadius: 50,
                      backgroundColor: "#CB97E7",
                      paddingHorizontal: 12,
                      paddingVertical: 3,
                    }}
                  >
                    <Text type="bold" size={8} color={colors.neutral50}>
                      Gratis Iphone
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  alignContent: "center",
                  justifyContent: "center",
                  paddingRight: 6,
                }}
              >
                <Image
                  style={{ height: 18, width: 18 }}
                  source={icons.chevronRight}
                />
              </View>
            </View>
          </TouchableOpacity>
          <Space height={24} />
          <View style={styles.profile}>
            <View style={{ margin: 12 }}>
              <Text type="bold" size={16} color={colors.neutral400}>
                Alana Seiko
              </Text>
              <Space height={12} />
              <View style={styles.lining} />
              <Space height={12} />
              <Text type="light" size={12} color={colors.neutral300}>
                ID 4556679
              </Text>
            </View>
          </View>
          <Space height={24} />
          <View style={styles.profile}>
            <View style={{ margin: 12 }}>
              <Text type="reguler" size={16} color={colors.neutral300}>
                Akun
              </Text>
              {dataAkun.map((menu, index) => (
                <View key={index}>
                  <Space height={25} />
                  <TouchableOpacity
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                    onPress={menu.navigation}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                      }}
                    >
                      <Image
                        style={{ height: 18, width: 18 }}
                        source={menu.icon}
                      />
                      <Space width={14} />
                      <Text type="reguler" size={12} color={colors.neutral400}>
                        {menu.title}
                      </Text>
                    </View>
                    <Image
                      style={{ height: 18, width: 18, alignSelf: "flex-end" }}
                      source={icons.chevronRight}
                    />
                  </TouchableOpacity>
                  <Space height={25} />
                  <View style={styles.lining} />
                </View>
              ))}
            </View>
          </View>
          <Space height={24} />
          <View style={styles.profile}>
            <View style={{ margin: 12 }}>
              <Text type="reguler" size={16} color={colors.neutral300}>
                Aplikasi
              </Text>
              {dataAplikasi.map((menu, index) => (
                <View key={index}>
                  <Space height={25} />
                  <TouchableOpacity
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                    onPress={menu.navigation}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                      }}
                    >
                      <Image
                        style={{ height: 18, width: 18 }}
                        source={menu.icon}
                      />
                      <Space width={14} />
                      <Text type="reguler" size={12} color={colors.neutral400}>
                        {menu.title}
                      </Text>
                    </View>
                    <Image
                      style={{ height: 18, width: 18, alignSelf: "flex-end" }}
                      source={icons.chevronRight}
                    />
                  </TouchableOpacity>
                  <Space height={25} />
                  <View style={styles.lining} />
                </View>
              ))}
              <Space height={25} />
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                }}
                onPress={() => NavigationService.navigate("LoginScreen")}
              >
                <Image
                  style={{ height: 18, width: 18 }}
                  source={icons.arrowRightOnRectangle}
                />
                <Space width={14} />
                <Text type="reguler" size={12} color={colors.danger500}>
                  Keluar
                </Text>
              </TouchableOpacity>
              <Space height={20} />
            </View>
          </View>
        </View>
        <Space height={20} />
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.neutral50,
  },
  content: {
    paddingHorizontal: 16,
    paddingBottom: 150,
  },
  profile: {
    backgroundColor: colors.neutral50,
    borderRadius: 5,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  lining: {
    borderColor: colors.neutral100,
    borderBottomWidth: 1,
  },
});
