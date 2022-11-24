import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "screens/ProfileScreen/ProfileScreen";

const Profile = createStackNavigator();

const ProfileTab = () => {
  return (
    <Profile.Navigator>
      <Profile.Screen
        options={{ headerShown: false }}
        name="ProfileScreen"
        component={ProfileScreen}
      />
    </Profile.Navigator>
  );
};

export default ProfileTab;
