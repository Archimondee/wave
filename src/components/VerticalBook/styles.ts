import colors from "configs/colors";
import { StyleSheet } from "react-native";
import { scaledVertical } from "utils/ScaledService";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 20,
  },
  image: {
    borderRadius: 10,
  },
  containerContent: {
    paddingLeft: 15,
    flex: 1,
  },
  description: {
    marginTop: 10,
    letterSpacing: 0.4,
    lineHeight: 18,
  },
  category: {
    backgroundColor: colors.neutral100,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 16,
    flexDirection: "row",
  },
  containerCategory: {
    flexDirection: "row",
    borderRadius: 16,
    paddingTop: scaledVertical(20),
  },
  containerGray: {
    height: 6,
    backgroundColor: colors.neutral100,
    borderRadius: 10,
    width: "100%",
  },
  containerYellow: {
    height: 6,
    position: "absolute",

    borderRadius: 10,
  },
  containerText: {
    justifyContent: "flex-end",
    alignSelf: "flex-end",
    marginTop: 5,
  },
  textFlagging: {
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 7,
  },
});

export default styles;
