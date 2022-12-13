import { StyleSheet } from "react-native";
import { scaledHorizontal, scaledVertical } from "utils/ScaledService";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: scaledHorizontal(20),
    paddingBottom: scaledVertical(30),
  },
  containerTop: {
    marginTop: scaledVertical(50),
    marginBottom: scaledVertical(20),
    flexDirection: "row",
    justifyContent: "space-between",
  },
  containerText: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: -10,
  },
  image: {
    height: scaledVertical(36),
    width: scaledHorizontal(36),
  },
});

export default styles;
