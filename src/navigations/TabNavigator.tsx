import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TouchableOpacity, View, Image } from "react-native";
import icons from "configs/icons";
import colors from "configs/colors";
//import { useSelector } from "react-redux";
//import type { StoreStateType } from "src/store";
import { isTablet, scale } from "utils/Responsive";
import { scaledVertical } from "utils/ScaledService";
import { useIsFocused } from "@react-navigation/core";

import {
  TitleHome,
  TitleDiamond,
  TitleProfile,
  TitleExplore,
} from "./TabsIcon/TabsTitle";
import {
  IconDiamond,
  IconExplore,
  IconHome,
  IconProfile,
} from "./TabsIcon/TabsIcon";
import HomeTab from "./Tabs/HomeTab";
import ProfileTab from "./Tabs/ProfileTab";
import CollectionTab from "./Tabs/CollectionTab";
import ExploreTab from "./Tabs/ExploreTab";
import DiamondTab from "./Tabs/DiamondTab";

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }: any) => {
  const isFocused = useIsFocused();
  return (
    <TouchableOpacity
      style={{
        top: isTablet() ? -20 : -25,
        justifyContent: "center",
        alignItems: "center",
      }}
      onPress={onPress}
    >
      <View
        style={{
          width: 68,
          height: 68,
          borderRadius: 68 / 2,
          backgroundColor: !isFocused ? colors.primary400 : colors.primary500,
          borderWidth: 3,
          borderColor: !isFocused ? colors.primary500 : colors.primary400,
        }}
      >
        {children}
      </View>
    </TouchableOpacity>
  );
};

const TabNavigator = () => {
  // const userData = useSelector(
  //   (state: StoreStateType) => state.persist.userData,
  // );

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: {
          borderTopWidth: 0,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          marginHorizontal: 0,

          elevation: 5,
        },
        tabBarShowLabel: isTablet() ? false : true,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeTab}
        options={{
          tabBarHideOnKeyboard: true,
          headerShown: false,

          tabBarLabel: ({ focused }) => <TitleHome focused={focused} />,
          tabBarIcon: ({ focused }) => <IconHome focused={focused} />,
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreTab}
        options={{
          tabBarHideOnKeyboard: true,
          headerShown: false,

          tabBarLabel: ({ focused }) => <TitleExplore focused={focused} />,
          tabBarIcon: ({ focused }) => <IconExplore focused={focused} />,
        }}
      />
      <Tab.Screen
        name="Collection"
        component={CollectionTab}
        // listeners={({ navigation }) => ({
        //   tabPress: e => {
        //     e.preventDefault();

        //     if (userData?.data?.data?.is_guest === 0) {
        //       navigation.navigate("Collection");
        //     } else {
        //       navigation.navigate("LoginScreen", {
        //         case: "NoLogin",
        //         from: "Home",
        //       });
        //     }
        //   },
        // })}
        options={() => ({
          tabBarHideOnKeyboard: true,
          headerShown: false,
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? icons.bookOpen : icons.bookBookmark}
              resizeMode="cover"
              style={{
                top: isTablet() ? scaledVertical(-2) : scale(5),
                width: 30,
                height: 30,
                tintColor: colors.neutral50,
              }}
            />
          ),

          tabBarButton: props => (
            <CustomTabBarButton
              children={props.children}
              onPress={props.onPress}
            />
          ),
        })}
      />
      <Tab.Screen
        name="Wallet"
        component={DiamondTab}
        // listeners={({ navigation }) => ({
        //   tabPress: e => {
        //     e.preventDefault();

        //     if (userData?.data?.data?.is_guest === 0) {
        //       navigation.navigate("Wallet");
        //     } else {
        //       navigation.navigate("LoginScreen", {
        //         case: "NoLogin",
        //         from: "Home",
        //       });
        //     }
        //   },
        // })}
        options={{
          tabBarHideOnKeyboard: true,
          headerShown: false,
          tabBarLabel: ({ focused }) => <TitleDiamond focused={focused} />,
          tabBarIcon: ({ focused }) => <IconDiamond focused={focused} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileTab}
        options={{
          tabBarHideOnKeyboard: true,
          headerShown: false,
          tabBarLabel: ({ focused }) => <TitleProfile focused={focused} />,
          tabBarIcon: ({ focused }) => <IconProfile focused={focused} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
