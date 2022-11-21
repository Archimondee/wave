import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "screens/LoginScreen/LoginScreen";

const Explore = createStackNavigator();

const ExploreTab = () => {
  return (
    <Explore.Navigator>
      <Explore.Screen
        options={{ headerShown: false }}
        name="ExploreScreen"
        component={LoginScreen}
      />
    </Explore.Navigator>
  );
};

export default ExploreTab;
