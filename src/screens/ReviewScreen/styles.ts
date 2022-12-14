import colors from "configs/colors";
import { StyleSheet } from "react-native";
import { scaledHorizontal, scaledVertical } from "utils/ScaledService";

const styles = StyleSheet.create({
  containerBottom: {
    backgroundColor: "white",
    marginTop: scaledHorizontal(40),
    paddingVertical: scaledVertical(20),
    paddingHorizontal: scaledHorizontal(20),
  },
  containerTop: {
    marginTop: scaledVertical(40),
    marginHorizontal: scaledHorizontal(5),
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: colors.neutral50,
  },
  bottomContainer: {
    backgroundColor: colors.neutral50,
    paddingVertical: 20,
    paddingHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: "row",
  },
  topContainer: {
    paddingVertical: scaledVertical(30),
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bottomInnerContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: colors.neutral300,
    borderRadius: 10,
    paddingHorizontal: 10,
    borderStyle: "solid",
    marginBottom: scaledVertical(15),
  },
  input: {
    fontSize: 14,
    lineHeight: 15,
    paddingVertical: 12,
    paddingRight: 5,
    textAlignVertical: "center",
  },
});

export default styles;
