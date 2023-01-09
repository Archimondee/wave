import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import type { StackNavigationOptions } from "@react-navigation/stack";
import { createStackNavigator } from "@react-navigation/stack";
import type { RootStackParamList } from "types/NavigatorTypes";
import { navigationRef } from "utils/NavigationService";
import { Modal } from "components";
import { useQueue } from "hooks";
import { useDispatch } from "react-redux";
import NetInfo from "@react-native-community/netinfo";
import type { QueueDataType } from "types/QueueTypes";
import { queueBackOnline } from "stores/queue/actions";

import { useRealm } from "../realm";

import MainNavigator from "./MainNavigator";

const App = createStackNavigator<RootStackParamList>();

const options: StackNavigationOptions = {
  headerTintColor: "#65b6e5",
  headerBackTitleVisible: false,
  headerTitleAlign: "center",
  headerTitleStyle: {
    //fontFamily: "Poppins-Regular",
    fontWeight: "bold",
    fontSize: 14,
    color: "#4a4a4a",
  },
  // headerStyle: {
  //   shadowColor: '#000',
  //   shadowOffset: {
  //     width: 0,
  //     height: 3,
  //   },
  //   shadowOpacity: 0.27,
  //   shadowRadius: 4.65,

  //   elevation: 6,
  // },
  // headerLeft: () => (
  //   <TouchableOpacity
  //     onPress={NavigationService.back}
  //     style={{
  //       paddingVertical: scaledVertical(15),
  //       paddingRight: scaledHorizontal(20),
  //     }}>
  //     <Image
  //       source={icon.backIcon}
  //       style={{
  //         height: scaledVertical(36),
  //         width: scaledHorizontal(36),
  //         marginLeft: scaledHorizontal(10),
  //       }}
  //     />
  //   </TouchableOpacity>
  // ),
  // headerBackImage: () => (

  // ),
  //cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};
// const transparentModalOptions: StackNavigationOptions = {
//   presentation: "transparentModal",
//   headerShown: false,
//   cardStyle: { backgroundColor: "transparent" },
//   cardOverlayEnabled: true,
//   cardStyleInterpolator: ({ current: { progress } }) => ({
//     cardStyle: {
//       opacity: progress.interpolate({
//         inputRange: [0, 0.5, 0.9, 1],
//         outputRange: [0, 0.25, 0.7, 1],
//       }),
//     },
//     overlayStyle: {
//       opacity: progress.interpolate({
//         inputRange: [0, 1],
//         outputRange: [0, 0.5],
//         extrapolate: "clamp",
//       }),
//     },
//   }),
// };

// const halfModalOptions: StackNavigationOptions = {
//   cardStyle: { backgroundColor: "transparent" },
//   cardOverlayEnabled: true,
//   presentation: "transparentModal",
//   cardStyleInterpolator: ({ current: { progress } }) => ({
//     cardStyle: {
//       opacity: progress.interpolate({
//         inputRange: [0, 0.75, 1],
//         outputRange: [0, 0.5, 1],
//       }),
//     },
//     overlayStyle: {
//       opacity: progress.interpolate({
//         inputRange: [0, 1],
//         outputRange: [0, 0.5],
//         extrapolate: "clamp",
//       }),
//     },
//   }),
// };

const halfModalBottomOptions: StackNavigationOptions = {
  cardStyle: { backgroundColor: "transparent" },
  presentation: "transparentModal",
  headerShown: false,
  cardOverlayEnabled: true,
  cardStyleInterpolator: ({ current: { progress } }) => ({
    cardStyle: {
      opacity: progress.interpolate({
        inputRange: [0, 0.75, 1],
        outputRange: [0, 0.5, 1],
      }),
    },
    overlayStyle: {
      opacity: progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 0.5],
        extrapolate: "clamp",
      }),
    },
  }),
};

const AppNavigator = () => {
  const queueData = useQueue();
  const realm = useRealm();
  const dispatch: any = useDispatch();

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state: any) => {
      if (state.isConnected === true) {
        if (queueData?.length > 0) {
          queueData?.map(async (item: QueueDataType, index: number) => {
            await dispatch(
              queueBackOnline(item, index, queueData.length, realm),
            );
          });
        }
        //dispatch queue to request server & pop first queue list
      }
    });
    return () => {
      unsubscribe();
    };
  }, [queueData, dispatch, realm]);
  return (
    <NavigationContainer ref={navigationRef}>
      <App.Navigator screenOptions={options}>
        <App.Screen
          name="MainNavigator"
          component={MainNavigator}
          options={{ headerShown: false }}
        />
        <App.Screen
          name="BottomModal"
          component={Modal}
          options={halfModalBottomOptions}
        />
      </App.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
