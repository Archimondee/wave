import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  triangle: {
    position: "absolute",
    right: 40,
    width: 0,
    height: 0,
    top: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 20,
    borderRightWidth: 20,
    borderBottomWidth: 20,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "#D9D9D9",
    borderRadius: 20,
    zIndex: 20,
  },
});

export default styles;
