import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "screens/LoginScreen/LoginScreen";

const Category = createStackNavigator();

const CategoryTab = () => {
  return (
    <Category.Navigator>
      <Category.Screen
        options={{ headerShown: false }}
        name="CategoryScreen"
        component={LoginScreen}
      />
    </Category.Navigator>
  );
};

export default CategoryTab;
