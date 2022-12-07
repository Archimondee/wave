import colors from "configs/colors";
import { StyleSheet } from "react-native";
import { isTablet } from "utils/Responsive";
import { scaledHorizontal, scaledVertical } from "utils/ScaledService";

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    marginVertical: scaledVertical(30),
    paddingVertical: isTablet() ? scaledVertical(10) : scaledVertical(20),
    paddingHorizontal: scaledHorizontal(25),
    borderColor: colors.neutral200,
    borderRadius: 10,
  },
  imageStar: {
    height: 23,
    width: 23,
  },
  imageNext: {
    height: 20,
    width: 20,
    alignSelf: "center",
    marginLeft: 3,
  },
  textStyle: {
    paddingLeft: scaledHorizontal(10),
    paddingTop: scaledVertical(5),
  },
  containerBottom: {
    alignContent: "center",
    flexDirection: "row",
    flex: 0.5,
  },
});

export default styles;
