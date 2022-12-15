import colors from "configs/colors";
import fonts from "configs/fonts";
import { StyleSheet } from "react-native";

const styles = (focused?: boolean) =>
  StyleSheet.create({
    icon: {
      width: 23,
      height: 23,
      resizeMode: "contain",
      //color: focused ? '#F2994A' : 'white',
      tintColor: focused ? colors.secondary500 : colors.neutral400,
    },
    title: {
      textAlign: "center",
      fontSize: 10,
      fontFamily: fonts.inter,
      color: focused ? colors.secondary500 : colors.neutral400,
      marginBottom: 3,
      // borderTopWidth: 1,
      // borderTopColor: "red",
    },
    borderStyle: {
      borderBottomWidth: focused ? 2 : 0,
      borderBottomColor: colors.secondary500,
      width: "100%",
    },
  });

export default styles;
