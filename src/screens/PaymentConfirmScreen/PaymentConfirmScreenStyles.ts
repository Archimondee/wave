import color from "configs/colors";
import { StyleSheet } from "react-native";
import { scaledHorizontal, scaledVertical } from "utils/ScaledService";

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.neutral50,
    paddingHorizontal: scaledHorizontal(20),
    paddingVertical: scaledVertical(40),
    borderRadius: 10,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  containerPrice: {
    marginTop: scaledVertical(20),
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopColor: color.neutral200,
    borderTopWidth: 1,
    paddingTop: scaledVertical(30),
  },
  priceStylesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default styles;
