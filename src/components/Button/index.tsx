/* eslint-disable no-nested-ternary */
import React, { memo } from "react";
import {
  ActivityIndicator,
  Image,
  ImageStyle,
  TextStyle,
  TouchableOpacity,
  View,
} from "react-native";
import colors from "configs/colors";

import Text from "../Text";

import styles from "./styles";

interface Props {
  title?: string;
  type: "dark" | "light" | "disabled";
  isLoading: boolean;
  disabled: boolean;
  icon?: any;
  onPress?: () => void;
  style?: TextStyle | TextStyle[];
  fontSize?: number;
  fontType?: "bold" | "reguler";
  iconStyle?: ImageStyle | ImageStyle[];
  titleStyle?: TextStyle | TextStyle[];
  fontColor?: any;
  buttonColor?: any;
}

const Component = ({
  title,
  type,
  isLoading,
  icon,
  onPress,
  disabled,
  style,
  fontSize,
  iconStyle,
  titleStyle,
  fontColor,
  fontType,
  buttonColor,
}: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      disabled={disabled || isLoading}
      onPress={onPress}
      style={[
        styles.container,
        disabled && { backgroundColor: colors.neutral200 },
        type === "light" && {
          backgroundColor: colors.neutral50,
          borderWidth: 1,
          borderColor: colors.secondary300,
        },
        type === "dark" && {
          backgroundColor: buttonColor ? buttonColor : colors.secondary500,
          borderWidth: 0,
        },
        style,
      ]}
    >
      {isLoading ? (
        <ActivityIndicator
          size={30}
          color={type === "light" ? colors.secondary500 : colors.neutral50}
        />
      ) : (
        <View style={[styles.wrapTitle, { alignItems: "center" }]}>
          {icon && (
            <Image
              source={icon}
              resizeMode={"contain"}
              style={[styles.icon, iconStyle]}
            />
          )}
          {disabled ? (
            <>
              <Text
                color={colors.neutral400}
                type="bold"
                size={fontSize || 14}
                style={titleStyle}
              >
                {title}
              </Text>
            </>
          ) : (
            <>
              <Text
                color={
                  fontColor
                    ? fontColor
                    : type === "light"
                    ? colors.secondary500
                    : colors.neutral50
                }
                type={fontType ? fontType : "bold"}
                size={fontSize || 14}
                style={titleStyle}
              >
                {title}
              </Text>
            </>
          )}
        </View>
      )}
    </TouchableOpacity>
  );
};

Component.defaultProps = {
  type: "dark",
  isLoading: false,
  disabled: false,
};

export default memo(Component);
