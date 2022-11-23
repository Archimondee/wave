import colors from "configs/colors";
import width from "utils/WidthPercent";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  wrapFooter: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 38,
  },
  wrapOr: {
    flexDirection: "row",
    justifyContent: "center",
  },
  textOr: {
    width: width(12) - 12,
    justifyContent: "center",
    alignItems: "center",
    top: 7,
  },
  lining: {
    borderColor: colors.neutral200,
    borderBottomWidth: 1,
    width: width(43) - 12,
  },
});

export default styles;
