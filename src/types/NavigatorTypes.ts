export type RootStackParamList = {
  LoginScreen: undefined;
  MainNavigator: undefined;
  RegisterScreen: undefined;
  TabNavigator: undefined;
  SplashScreen: undefined;
  OtpScreen: undefined;
  ForgotPasswordScreen: undefined;
  ChangePasswordScreen: undefined;
  EmailVerifyScreen: undefined;
  HomeScreen: undefined;
  TopupScreen: undefined;
  PaymentConfirmScreen: undefined;
  VoucherScreen: undefined;
  EditProfileScreen: undefined;
  FollowedAuthorScreen: undefined;
  ProfileChangePasswordScreen: undefined;
  SettingScreen: undefined;
  PrivacyPolicyScreen: undefined;
  NovelScreen: undefined;
  BottomModal: {
    type: "ReviewModal";
    id?: number;
    novel_title?: string;
    typeReview?: "normal" | "incoming" | "claim";
    freebies_id?: number;
    updated_at?: string;
  };
  ReviewScreen: undefined;
  SelectChapterScreen: undefined;
  ReadNovelScreen: undefined;
  SearchScreen: undefined;
  NotificationScreen: undefined;
  AuthorProfileScreen: undefined;
  ConfirmBuyNovelScreen: undefined;
};

export type RootType =
  | "LoginScreen"
  | "RegisterScreen"
  | "TabNavigator"
  | "SplashScreen"
  | "OtpScreen"
  | "ForgotPasswordScreen"
  | "ChangePasswordScreen"
  | "EmailVerifyScreen"
  | "HomeScreen"
  | "TopupScreen"
  | "PaymentConfirmScreen"
  | "VoucherScreen"
  | "EditProfileScreen"
  | "FollowedAuthorScreen"
  | "ProfileChangePasswordScreen"
  | "SettingScreen"
  | "PrivacyPolicyScreen"
  | "NovelScreen"
  | "BottomModal"
  | "ReviewScreen"
  | "SelectChapterScreen"
  | "ReadNovelScreen"
  | "SearchScreen"
  | "NotificationScreen"
  | "AuthorProfileScreen"
  | "ConfirmBuyNovelScreen";
