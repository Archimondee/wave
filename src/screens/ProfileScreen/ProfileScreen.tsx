import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

interface ProfileScreenProps {}

const ProfileScreen = (props: ProfileScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>ProfileScreen</Text>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {},
});
