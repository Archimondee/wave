import color from "configs/colors";
import { StyleSheet } from "react-native";
import { scaledHorizontal, scaledVertical } from "utils/ScaledService";

const styles = StyleSheet.create({
  containerModal: {
    flex: 1,
    justifyContent: "center",
    marginVertical: 0,
    marginHorizontal: scaledHorizontal(40),
  },
  container: {
    backgroundColor: color.neutral50,
    paddingVertical: scaledVertical(40),
    borderRadius: 10,
    paddingHorizontal: scaledHorizontal(20),
  },
  imageBig: {
    height: 170,

    position: "absolute",
    top: scaledVertical(-170),

    alignSelf: "center",
  },
  containerClose: {
    position: "absolute",
    bottom: -70,
    alignSelf: "center",
  },
  containerFlex: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
});

export default styles;
