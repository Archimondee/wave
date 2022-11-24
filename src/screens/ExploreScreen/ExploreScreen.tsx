import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

interface ExploreScreenProps {}

const ExploreScreen = (props: ExploreScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>ExploreScreen</Text>
    </View>
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  container: {},
});
