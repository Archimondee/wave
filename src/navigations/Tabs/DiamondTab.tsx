import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DiamondScreen from "screens/DiamondScreen/DiamondScreen";

const Diamond = createStackNavigator();

const DiamondTab = () => {
  return (
    <Diamond.Navigator>
      <Diamond.Screen
        options={{ headerShown: false }}
        name="DiamondScreen"
        component={DiamondScreen}
      />
    </Diamond.Navigator>
  );
};

export default DiamondTab;
