import { StyleSheet } from "react-native";
import { scaledHorizontal, scaledVertical } from "utils/ScaledService";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: scaledHorizontal(20),
    paddingTop: scaledVertical(40),
    paddingBottom: scaledVertical(20),
    flexDirection: "row",
  },
  image: {
    width: scaledHorizontal(30),
    height: scaledVertical(30),
    //paddingRight: 5,
    marginRight: 5,
  },
});

export default styles;
