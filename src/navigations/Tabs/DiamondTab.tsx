import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import RegisterScreen from "screens/RegisterScreen/RegisterScreen";

const Diamond = createStackNavigator();

const DiamondTab = () => {
  return (
    <Diamond.Navigator>
      <Diamond.Screen
        options={{ headerShown: false }}
        name="DiamondScreen"
        component={RegisterScreen}
      />
    </Diamond.Navigator>
  );
};

export default DiamondTab;
