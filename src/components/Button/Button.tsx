import React, { memo } from "react";
import {
  ActivityIndicator,
  Image,
  ImageStyle,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { Text } from "components";
import color from "configs/colors";

import styles from "./ButtonStyles";

interface Props {
  title?: string;
  type: "dark" | "light" | "disabled";
  isLoading: boolean;
  disabled: boolean;
  icon?: any;
  onPress?: () => void;
  style?: TextStyle | TextStyle[] | ViewStyle | ViewStyle[];
  fontSize?: number;
  iconStyle?: ImageStyle | ImageStyle[];
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
}: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      disabled={disabled || isLoading}
      onPress={onPress}
      style={[
        styles.container,

        // disabled && { backgroundColor: color.underlay },
        // type === "disabled" && { backgroundColor: color.underlay },
        type === "light" && {
          backgroundColor: color.neutral200,
          borderWidth: 1,
          //borderColor: color.burtuqaliOrange,
        },
        style,
      ]}
    >
      {isLoading ? (
        <ActivityIndicator
          size={30}
          color={type === "light" ? color.primary500 : color.neutral50}
        />
      ) : (
        <View style={styles.wrapTitle}>
          {icon && (
            <Image
              source={icon}
              style={[
                styles.icon,

                {
                  tintColor:
                    type === "light" ? color.primary500 : color.neutral50,
                },
                iconStyle,
              ]}
            />
          )}

          <Text
            color={type === "light" ? color.primary500 : color.neutral50}
            type="bold"
            size={fontSize || 14}
          >
            {title}
          </Text>
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
