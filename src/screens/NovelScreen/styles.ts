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
    backgroundColor: colors.neutral100,
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
  bottomLeftContainer: {
    alignSelf: "center",
    marginBottom: scaledVertical(15),
  },
  bottomImage: {
    //tintColor: colors.black,
    height: 26,
    width: 26,
    marginRight: 20,
    //backgroundColor: "red",
  },
  buttonContainer: {
    height: 42,
    marginBottom: 10,
    flex: 1,
  },
  topContainer: {
    paddingTop: scaledVertical(30),
    //marginBottom: scaledVertical(20),
    //paddingHorizontal: scaledHorizontal(20),
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bottomInnerContainer: {
    flexDirection: "row",
    marginVertical: scaledVertical(20),
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.neutral300,
    borderRadius: 10,
    paddingHorizontal: 10,

    borderStyle: "solid",
  },
  input: {
    flex: 1,
    fontSize: 14,
    lineHeight: 15,
    paddingVertical: 12,
    paddingRight: 5,
    //height: scaledVertical(35),
    textAlignVertical: "center",
  },
});

export default styles;
