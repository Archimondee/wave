import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ExploreScreen from "screens/ExploreScreen/ExploreScreen";

const Explore = createStackNavigator();

const ExploreTab = () => {
  return (
    <Explore.Navigator>
      <Explore.Screen
        options={{ headerShown: false }}
        name="ExploreScreen"
        component={ExploreScreen}
      />
    </Explore.Navigator>
  );
};

export default ExploreTab;
