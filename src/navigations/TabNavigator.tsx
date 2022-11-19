import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import HomeTab from "./Tabs/HomeTab";
import SearchTab from "./Tabs/CategoryTab";
import {
  IconCategory,
  IconHome,
  IconProfile,
  IconWishlist,
} from "./TabsIcon/TabsIcon";
import {
  TitleCategory,
  TitleHome,
  TitleProfile,
  TitleWishlist,
} from "./TabsIcon/TabsTitle";
import FavoriteTab from "./Tabs/FavoriteTab";
import ProfileTab from "./Tabs/ProfileTab";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: {
          borderTopWidth: 0,
          borderRadius: 20,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 9,
          },
          shadowOpacity: 0.48,
          shadowRadius: 11.95,

          elevation: 18,
          height: 90,
          paddingTop: 12,
        },
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
        name="Category"
        component={SearchTab}
        options={{
          tabBarHideOnKeyboard: true,
          headerShown: false,

          tabBarLabel: ({ focused }) => <TitleCategory focused={focused} />,
          tabBarIcon: ({ focused }) => <IconCategory focused={focused} />,
        }}
      />
      <Tab.Screen
        name="Wishlist"
        component={FavoriteTab}
        options={{
          tabBarHideOnKeyboard: true,
          headerShown: false,

          tabBarLabel: ({ focused }) => <TitleWishlist focused={focused} />,
          tabBarIcon: ({ focused }) => <IconWishlist focused={focused} />,
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
