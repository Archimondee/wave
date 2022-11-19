import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "screens/LoginScreen/LoginScreen";

const Profile = createStackNavigator();

const ProfileTab = () => {
  return (
    <Profile.Navigator>
      <Profile.Screen
        options={{ headerShown: false }}
        name="ProfileScreen"
        component={LoginScreen}
      />
    </Profile.Navigator>
  );
};

export default ProfileTab;
