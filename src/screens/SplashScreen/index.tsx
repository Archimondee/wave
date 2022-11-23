import images from "configs/images";
import icons from "configs/icons";
import React, { useEffect, useRef } from "react";
import { View, StyleSheet, Image, Animated } from "react-native";
import { wait } from "utils/Utils";
import NavigationService from "utils/NavigationService";

const SplashScreen = () => {
  const spinValue = useRef(new Animated.Value(0)).current;
  const scaleValue = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    wait(2000).then(() => NavigationService.navigate("LoginScreen"));
  }, []);

  Animated.timing(spinValue, {
    toValue: 2,
    duration: 2000,
    useNativeDriver: true,
  }).start();

  Animated.timing(scaleValue, {
    toValue: 2,
    duration: 2000,
    useNativeDriver: true,
  }).start();

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "10deg"],
  });

  return (
    <View style={styles.container}>
      <Animated.Image
        source={images.screen1}
        style={{
          width: "100%",
          height: "100%",
          transform: [{ rotate: spin, scale: scaleValue }],
        }}
      />
      <Image
        source={icons.logo.logo}
        style={{
          position: "absolute",
          zIndex: 2,
          justifyContent: "center",
          alignItems: "center",
          width: 240,
          height: 240,
        }}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    zIndex: 1,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
