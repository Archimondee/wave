import colors from "configs/colors";
import { StyleSheet } from "react-native";
import { scaledHorizontal, scaledVertical } from "utils/ScaledService";

const styles = StyleSheet.create({
  icon: {
    height: scaledVertical(25),
    width: scaledHorizontal(25),
    marginRight: 5,
  },
  container: {
    backgroundColor: colors.neutral100,
    borderRadius: 50,

    paddingHorizontal: 15,
    marginLeft: scaledHorizontal(20),
    flexDirection: "row",
  },
});

export default styles;
