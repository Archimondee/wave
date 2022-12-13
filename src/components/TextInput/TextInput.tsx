import React, { memo, useState } from "react";
import {
  View,
  TextInput,
  //TouchableOpacity,
  //Image,
  TextStyle,
  TouchableOpacity,
  Image,
} from "react-native";
import fonts from "configs/fonts";
import icons from "configs/icons";
import { Text, Space } from "components";

import WidthPercent from "../../utils/WidthPercent";
//import icon from "../../configs/icons";
import { scaledFontSize, scaledVertical } from "../../utils/ScaledService";
import colors from "../../configs/colors";

interface Props {
  secureTextEntry?: boolean;
  title?: string;
  sizeTitle?: number;
  placeholder: string;
  onChange?: (e: any) => void;
  value?: string;
  type?: "input" | "textarea";
  keyboardType: "default" | "number-pad" | "email-address";
  error?: string;
  borderLess?: boolean;
  placeholderTextColor?: string;
  backgroundColorInput?: string;
  borderColorInput: string;
  width: number | string;
  numberOfLines?: number;
  style?: TextStyle | TextStyle[];
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
  maxLength?: number;
}

const Component = ({
  width,
  numberOfLines,
  secureTextEntry,
  title,
  sizeTitle,
  placeholder,
  onChange,
  value,
  type,
  keyboardType,
  error,
  borderLess,
  placeholderTextColor,
  backgroundColorInput,
  borderColorInput,
  style,
  autoCapitalize,
  maxLength,
}: Props) => {
  const [visible, setVisible] = useState(false);

  return (
    <View>
      {title && (
        <>
          <Text size={sizeTitle}>{title}</Text>
          <Space height={16} />
        </>
      )}
      <View
        style={[
          {
            width: width,
            backgroundColor: backgroundColorInput,
            borderRadius: 10,
            paddingHorizontal: 14,
            flexDirection: "row",
            justifyContent: "space-between",
            borderWidth: borderLess ? 0 : 1,
          },
          !borderLess && {
            borderColor: error ? colors.danger500 : borderColorInput,
          },
        ]}
      >
        <View
          style={{
            width: secureTextEntry ? WidthPercent(80) - 12 : WidthPercent(85),
            height: type === "textarea" ? scaledVertical(300) : 49,
            justifyContent: type === "textarea" ? "flex-start" : "center",
          }}
        >
          <TextInput
            placeholder={placeholder}
            onChangeText={onChange}
            value={value}
            multiline={type === "textarea"}
            numberOfLines={numberOfLines}
            keyboardType={keyboardType}
            autoCapitalize={autoCapitalize || "none"}
            secureTextEntry={secureTextEntry && !visible}
            placeholderTextColor={placeholderTextColor}
            maxLength={maxLength}
            style={[
              {
                fontSize: scaledFontSize(20),
                color: colors.neutral700,
                fontFamily: fonts.inter,
                paddingTop: scaledVertical(15),
              },
              style,
            ]}
          />
        </View>
        {secureTextEntry && (
          <TouchableOpacity
            onPress={() => setVisible(!visible)}
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <Image source={icons.eye} style={{ width: 24, height: 24 }} />
          </TouchableOpacity>
        )}
      </View>
      <Text
        size={scaledFontSize(18)}
        color="#DC5D52"
        style={{ marginBottom: scaledVertical(12) }}
      >
        {error}
      </Text>
    </View>
  );
};

Component.defaultProps = {
  placeholder: "Ketik disini",
  type: "input",
  error: "",
  keyboardType: "default",
  sizeTitle: 14,
  backgroundColorInput: "#fff",
  borderColorInput: colors.neutral300,
  width: "100%",
};

export default memo(Component);
