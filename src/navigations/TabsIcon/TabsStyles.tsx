import colors from "configs/colors";
import fonts from "configs/fonts";
import { StyleSheet } from "react-native";

const styles = (focused?: boolean) =>
  StyleSheet.create({
    icon: {
      width: 20,
      height: 20,
      resizeMode: "contain",
      //color: focused ? '#F2994A' : 'white',
      tintColor: focused ? colors.burtuqaliOrange : colors.mossGlen,
    },
    title: {
      textAlign: "center",
      fontSize: 10,
      fontFamily: fonts.RobotoRegular,
      //color: focused ? colors.burtuqaliOrange : colors.mossGlen,
      //marginBottom: 3,
      // borderTopWidth: 1,
      // borderTopColor: "red",
    },
    // borderStyle: {
    //   borderBottomWidth: focused ? 2 : 0,
    //   //borderBottomColor: colors.secondary500,
    //   width: "100%",
    // },
  });

export default styles;
