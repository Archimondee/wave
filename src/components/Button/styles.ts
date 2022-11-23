import { StyleSheet } from "react-native";
import colors from "configs/colors";

const styles = StyleSheet.create({
  container: {
    height: 40,
    backgroundColor: colors.secondary500,
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
    height: 15,
    marginRight: 10,
    alignSelf: "center",
  },
  btnText: {
    fontSize: 12,
  },
});

export default styles;
