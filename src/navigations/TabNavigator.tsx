import { Space } from "components";
import color from "configs/colors";
import icons from "configs/icons";
import React from "react";
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { CurvedBottomBar } from "react-native-curved-bottom-bar";

import CollectionTab from "./Tabs/CollectionTab";
import DiamondTab from "./Tabs/DiamondTab";
import ExploreTab from "./Tabs/ExploreTab";
import HomeTab from "./Tabs/HomeTab";
import ProfileTab from "./Tabs/ProfileTab";

StatusBar.setBarStyle("dark-content");

const TabNavigator = () => {
  const _renderIcon = (routeName: string, selectedTab: string) => {
    let icon = icons.home;

    switch (routeName) {
      case "Beranda":
        icon = icons.home;

        break;
      case "Eksplor":
        icon = icons.explore;

        break;
      case "Berlian":
        icon = icons.diamond;

        break;
      case "Profil":
        icon = icons.user;

        break;
    }

    return (
      <View
        style={{
          alignItems: "center",
          borderBottomColor:
            selectedTab === routeName ? color.primary500 : "white",
          borderBottomWidth: 2,
          paddingBottom: 5,
        }}
      >
        <Image
          source={icon}
          resizeMode="contain"
          style={{
            //top: 5,
            width: 25,
            height: 25,

            tintColor:
              selectedTab === routeName ? color.primary500 : color.neutral400,
          }}
        />
        <Space height={5} />

        <Text
          style={{
            color:
              selectedTab === routeName ? color.primary500 : color.neutral400,
            fontWeight: selectedTab === routeName ? "bold" : "500",
            fontSize: 12,
            fontFamily: "Inter",
          }}
        >
          {routeName}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <CurvedBottomBar.Navigator
        style={{
          marginHorizontal: 0,
        }}
        type={"DOWN"}
        height={100}
        circleWidth={60}
        bgColor="white"
        strokeColor={color.neutral400}
        strokeWidth={0.5}
        //borderTopLeftRight={true}
        initialRouteName="Beranda"
        renderCircle={({ navigate, routeName, selectedTab }: any) => (
          <TouchableOpacity
            style={[
              styles.btnCircle,
              {
                backgroundColor:
                  selectedTab === routeName
                    ? color.primary500
                    : color.primary400,
                borderColor:
                  selectedTab === routeName
                    ? color.primary400
                    : color.primary500,
              },
            ]}
            onPress={() => navigate(routeName)}
          >
            <Image
              source={
                selectedTab === routeName ? icons.bookOpen : icons.bookBookmark
              }
              resizeMode="contain"
              style={{
                tintColor: "white",
                width: 30,
                height: 30,
              }}
            />
          </TouchableOpacity>
        )}
        tabBar={({ routeName, selectedTab, navigate }: any) => {
          return (
            <TouchableOpacity
              onPress={() => navigate(routeName)}
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {_renderIcon(routeName, selectedTab)}
            </TouchableOpacity>
          );
        }}
      >
        <CurvedBottomBar.Screen
          name="Beranda"
          position="LEFT"
          component={HomeTab}
          options={{
            tabBarHideOnKeyboard: true,
            headerShown: false,
          }}
        />
        <CurvedBottomBar.Screen
          name="Eksplor"
          component={ExploreTab}
          position="LEFT"
          options={{
            tabBarHideOnKeyboard: true,
            headerShown: false,
          }}
        />
        <CurvedBottomBar.Screen
          name="Collection"
          position="CENTER"
          component={CollectionTab}
          options={{
            tabBarHideOnKeyboard: true,
            headerShown: false,
          }}
        />
        <CurvedBottomBar.Screen
          name="Berlian"
          component={DiamondTab}
          position="RIGHT"
          options={{
            tabBarHideOnKeyboard: true,
            headerShown: false,
          }}
        />
        <CurvedBottomBar.Screen
          name="Profil"
          component={ProfileTab}
          position="RIGHT"
          options={{
            tabBarHideOnKeyboard: true,
            headerShown: false,
          }}
        />
      </CurvedBottomBar.Navigator>
    </View>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btnCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",

    borderWidth: 4,
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    // marginHorizontal: 0,

    // elevation: 5,
    bottom: 15,
  },
  // btnCircleUp: {
  //   width: 60,
  //   height: 60,
  //   borderRadius: 30,
  //   alignItems: "center",
  //   justifyContent: "center",
  //   backgroundColor: "#E8E8E8",
  //   bottom: 12,
  //   shadowColor: "#000",
  //   shadowOffset: {
  //     width: 0,
  //     height: 1,
  //   },
  //   shadowOpacity: 0.2,
  //   shadowRadius: 1.41,
  //   elevation: 1,
  // },
  // imgCircle: {
  //   width: 30,
  //   height: 30,
  //   tintColor: "#48CEF6",
  // },
  // img: {
  //   width: 30,
  //   height: 30,
  // },
});
