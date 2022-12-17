import colors from "configs/colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  bottomContainer: {
    paddingBottom: 30,
    backgroundColor: colors.neutral50,
    paddingVertical: 20,
    paddingHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5,
    flexDirection: "row",
  },
});

export default styles;
