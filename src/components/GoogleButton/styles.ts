import { StyleSheet } from "react-native";
import colors from "configs/colors";

const styles = StyleSheet.create({
  container: {
    height: 40,
    backgroundColor: colors.neutral50,
    borderWidth: 1,
    borderColor: colors.primary500,
    alignItems: "center",
    borderRadius: 10,
    justifyContent: "center",
    minWidth: 82,
    fontWeight: "700",
  },
  wrapTitle: {
    flexDirection: "row",
  },
  icon: {
    height: 19,
    marginRight: 10,
    alignSelf: "center",
    width: 18,
  },
  btnText: {
    fontSize: 12,
  },
});

export default styles;
