import { StyleSheet } from "react-native";
import color from "configs/colors";
import { scaledVertical } from "utils/ScaledService";

const styles = StyleSheet.create({
  container: {
    //height: 40,
    backgroundColor: color.primary500,
    alignItems: "center",
    borderRadius: 10,
    justifyContent: "center",
    minWidth: 82,
    fontWeight: "700",
    paddingVertical: scaledVertical(15),
  },
  wrapTitle: {
    flexDirection: "row",
    paddingHorizontal: 20,
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
