import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "screens/LoginScreen/LoginScreen";

const Favorite = createStackNavigator();

const FavoriteTab = () => {
  return (
    <Favorite.Navigator>
      <Favorite.Screen
        options={{ headerShown: false }}
        name="FavoriteScreen"
        component={LoginScreen}
      />
    </Favorite.Navigator>
  );
};

export default FavoriteTab;
