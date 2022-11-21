import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CollectionScreen from "screens/CollectionScreen/CollectionScreen";

const Collection = createStackNavigator();

const CollectionTab = () => {
  return (
    <Collection.Navigator>
      <Collection.Screen
        options={{ headerShown: false }}
        name="CollectionScreen"
        component={CollectionScreen}
      />
    </Collection.Navigator>
  );
};

export default CollectionTab;
