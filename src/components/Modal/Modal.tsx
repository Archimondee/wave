import React from "react";
import { View, StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import type { RouteProp } from "@react-navigation/core";
import type { RootStackParamList } from "src/types/NavigatorTypes";
import colors from "configs/colors";
import NavigationService from "utils/NavigationService";

import ReviewModal from "./ChildBottomModal/ReviewModal";

type BottomModalRouteType = RouteProp<RootStackParamList, "BottomModal">;

type Prop = {
  route: BottomModalRouteType;
};

export default function BottomModal({ route }: Prop) {
  const { type } = route.params;
  const renderModalItem = () => {
    switch (type) {
      case "ReviewModal":
        return (
          <ReviewModal
            id={route?.params?.id ?? 0}
            novel_title={route?.params?.novel_title}
          />
        );

      default:
        return null;
    }
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <View
        //onPress={() => NavigationService.back()}
        onStartShouldSetResponder={() => true}
        onResponderGrant={() => NavigationService.back()}
        style={styles.container}
      >
        <View
          onStartShouldSetResponder={() => true}
          //onResponderGrant={() => NavigationService.back()}
          style={styles.containerView}
        >
          {renderModalItem()}
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.2)",
    justifyContent: "flex-end",
  },
  containerView: {
    backgroundColor: colors.neutral50,
    width: "100%",
    borderRadius: 10,
  },
});
