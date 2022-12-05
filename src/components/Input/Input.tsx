import React, { memo, useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Image,
  TextStyle,
} from "react-native";
import fonts from "configs/fonts";

import WidthPercent from "../../utils/WidthPercent";
import Text from "../Text/Text";
import Space from "../Space/Space";
import icons from "../../configs/icons";
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
  error?: string | any;
  borderLess?: boolean;
  placeholderTextColor?: string;
  backgroundColorInput?: string;
  borderColorInput: string;
  width: number | string;
  numberOfLines?: number;
  style?: TextStyle | TextStyle[];
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
  editable?: boolean;
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
  editable,
}: Props) => {
  const [visible, setVisible] = useState(false);

  return (
    <View>
      {title && (
        <>
          <Text color={colors.neutral400} size={sizeTitle}>
            {title}
          </Text>
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
            editable={editable}
            value={value}
            multiline={type === "textarea"}
            numberOfLines={numberOfLines}
            keyboardType={keyboardType}
            autoCapitalize={autoCapitalize || "none"}
            secureTextEntry={secureTextEntry && !visible}
            placeholderTextColor={placeholderTextColor}
            style={[
              {
                fontSize: scaledFontSize(20),
                color: colors.neutral600,
                fontFamily: fonts.inter,
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
            <Image
              source={visible ? icons.eyeSlash : icons.eye}
              style={{ width: 24, height: 24 }}
            />
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
  editable: true,
};

export default memo(Component);
