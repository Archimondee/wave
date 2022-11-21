import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

interface CollectionScreenProps {}

const CollectionScreen = (props: CollectionScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>CollectionScreen</Text>
    </View>
  );
};

export default CollectionScreen;

const styles = StyleSheet.create({
  container: {},
});
