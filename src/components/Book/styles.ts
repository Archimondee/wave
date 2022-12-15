import colors from "configs/colors";
import { StyleSheet } from "react-native";
import { scaledHorizontal, scaledVertical } from "utils/ScaledService";

const styles = StyleSheet.create({
  leftContainer: {
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    paddingVertical: 5,
    right: 0,
    alignSelf: "flex-end",
    paddingHorizontal: 10,
    //marginLeft: scaledHorizontal(55),
    backgroundColor: colors.primary500,
  },
  containerCategory: {
    backgroundColor: colors.neutral100,
    borderRadius: 16,
    paddingVertical: scaledVertical(5),
    paddingHorizontal: scaledHorizontal(15),
    marginTop: scaledVertical(10),
  },
});

export default styles;
