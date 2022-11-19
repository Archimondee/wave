import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "screens/LoginScreen/LoginScreen";

const Home = createStackNavigator();

const HomeTab = () => {
  return (
    <Home.Navigator>
      <Home.Screen
        options={{ headerShown: false }}
        name="HomeScreen"
        component={LoginScreen}
      />
    </Home.Navigator>
  );
};

export default HomeTab;
