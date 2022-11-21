import React from "react";
import type { StackNavigationOptions } from "@react-navigation/stack";
import { createStackNavigator } from "@react-navigation/stack";
import type { RootStackParamList } from "types/NavigatorTypes";
import RegisterScreen from "screens/RegisterScreen/RegisterScreen";
import LoginScreen from "screens/LoginScreen/LoginScreen";
import TabNavigator from "./TabNavigator";
import CollectionScreen from "screens/CollectionScreen/CollectionScreen";

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
    <Main.Navigator screenOptions={options}>
      <Main.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{ headerShown: false, gestureEnabled: false }}
      />
      <Main.Screen name="LoginScreen" component={LoginScreen} />
      <Main.Screen name="RegisterScreen" component={RegisterScreen} />
    </Main.Navigator>
  );
};

export default MainNavigator;
