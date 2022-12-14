import React from "react";
import {
  CardStyleInterpolators,
  StackNavigationOptions,
  createStackNavigator,
} from "@react-navigation/stack";
import type { RootStackParamList } from "types/NavigatorTypes";
import RegisterScreen from "screens/RegisterScreen/RegisterScreen";
import LoginScreen from "screens/LoginScreen/LoginScreen";
import SplashScreen from "screens/SplashScreen/";
import OtpScreen from "screens/OtpScreen/OtpScreen";
import ForgotPasswordScreen from "screens/ForgotPassword/ForgotPasswordScreen";
import ChangePasswordScreen from "screens/ChangePassword/ChangePasswordScreen";
import EmailVerifyScreen from "screens/EmailVerify/EmailVerifyScreen";
import TopupScreen from "screens/TopupScreen/TopupScreen";
import PaymentConfirmScreen from "screens/PaymentConfirmScreen/PaymentConfirmScreen";
import VoucherScreen from "screens/VoucherScreen/VoucherScreen";
import EditProfileScreen from "screens/EditProfileScreen/EditProfileScreen";
import FollowedAuthorScreen from "screens/FollowedAuthorScreen/FollowedAuthorScreen";
import ProfileChangePasswordScreen from "screens/ProfileChangePasswordScreen/ProfileChangePasswordScreen";
import SettingScreen from "screens/SettingScreen/SettingScreen";
import PrivacyPolicyScreen from "screens/PrivacyPolicyScreen/PrivacyPolicyScreen";
import NovelScreen from "screens/NovelScreen/NovelScreen";
import ReviewScreen from "screens/ReviewScreen/ReviewScreen";
import SelectChapterScreen from "screens/SelectChapterScreen/SelectChapterScreen";
import ReadNovelScreen from "screens/ReadNovelScreen/ReadNovelScreen";
import SearchScreen from "screens/SearchScreen/SearchScreen";
import NotificationScreen from "screens/NotificationScreen/NotificationScreen";
import AuthorProfileScreen from "screens/AuthorProfileScreen/AuthorProfileScreen";
import ConfirmBuyNovelScreen from "screens/ConfirmBuyNovelScreen/ConfirmBuyNovelScreen";

import TabNavigator from "./TabNavigator";

const Main = createStackNavigator<RootStackParamList>();
const options: StackNavigationOptions = {
  headerTintColor: "#65b6e5",
  headerBackTitleVisible: false,
  headerTitleAlign: "center",
  headerTitleStyle: {
    //fontFamily: "Poppins-Regular",
    fontWeight: "bold",
    fontSize: 14,
    color: "#4a4a4a",
  },
  // headerStyle: {
  //   shadowColor: '#000',
  //   shadowOffset: {
  //     width: 0,
  //     height: 3,
  //   },
  //   shadowOpacity: 0.27,
  //   shadowRadius: 4.65,

  //   elevation: 6,
  // },
  // headerLeft: () => (
  //   <TouchableOpacity
  //     onPress={NavigationService.back}
  //     style={{
  //       paddingVertical: scaledVertical(15),
  //       paddingRight: scaledHorizontal(20),
  //     }}>
  //     <Image
  //       source={icon.backIcon}
  //       style={{
  //         height: scaledVertical(36),
  //         width: scaledHorizontal(36),
  //         marginLeft: scaledHorizontal(10),
  //       }}
  //     />
  //   </TouchableOpacity>
  // ),
  // headerBackImage: () => (

  // ),
  //cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};

const MainNavigator = () => {
  return (
    <Main.Navigator screenOptions={options} initialRouteName="SplashScreen">
      <Main.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <Main.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Main.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Main.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{ headerShown: false }}
      />
      <Main.Screen
        name="OtpScreen"
        component={OtpScreen}
        options={{ headerShown: false }}
      />
      <Main.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
        options={{ headerShown: false }}
      />
      <Main.Screen
        name="ChangePasswordScreen"
        component={ChangePasswordScreen}
        options={{ headerShown: false }}
      />
      <Main.Screen
        name="EmailVerifyScreen"
        component={EmailVerifyScreen}
        options={{ headerShown: false }}
      />
      <Main.Screen
        name="TopupScreen"
        component={TopupScreen}
        options={{ headerShown: false }}
      />
      <Main.Screen
        name="PaymentConfirmScreen"
        component={PaymentConfirmScreen}
        options={{ headerShown: false }}
      />
      <Main.Screen
        name="VoucherScreen"
        component={VoucherScreen}
        options={{ headerShown: false }}
      />
      <Main.Screen
        name="EditProfileScreen"
        component={EditProfileScreen}
        options={{ headerShown: false }}
      />
      <Main.Screen
        name="FollowedAuthorScreen"
        component={FollowedAuthorScreen}
        options={{ headerShown: false }}
      />
      <Main.Screen
        name="ProfileChangePasswordScreen"
        component={ProfileChangePasswordScreen}
        options={{ headerShown: false }}
      />
      <Main.Screen
        name="SettingScreen"
        component={SettingScreen}
        options={{ headerShown: false }}
      />
      <Main.Screen
        name="PrivacyPolicyScreen"
        component={PrivacyPolicyScreen}
        options={{ headerShown: false }}
      />
      <Main.Screen
        name="NovelScreen"
        component={NovelScreen}
        options={{ headerShown: false }}
      />
      <Main.Screen
        name="ReviewScreen"
        component={ReviewScreen}
        options={{ headerShown: false }}
      />
      <Main.Screen
        name="SelectChapterScreen"
        component={SelectChapterScreen}
        options={{ headerShown: false }}
      />
      <Main.Screen
        name="ConfirmBuyNovelScreen"
        component={ConfirmBuyNovelScreen}
        options={{ headerShown: false }}
      />
      <Main.Screen
        name="ReadNovelScreen"
        component={ReadNovelScreen}
        options={{ headerShown: false }}
      />
      <Main.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          headerShown: false,

          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
        }}
      />
      <Main.Screen
        name="NotificationScreen"
        component={NotificationScreen}
        options={{ headerShown: false }}
      />
      <Main.Screen
        name="AuthorProfileScreen"
        component={AuthorProfileScreen}
        options={{ headerShown: false }}
      />
    </Main.Navigator>
  );
};

export default MainNavigator;
