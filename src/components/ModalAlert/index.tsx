/* eslint-disable no-nested-ternary */
import React, { memo } from "react";
import { Image, View, ViewStyle } from "react-native";
import { scaledHorizontal, scaledVertical } from "utils/ScaledService";
import Modal from "react-native-modal";
import colors from "configs/colors";

import Button from "../Button/Button";
import Space from "../Space/Space";
import Text from "../Text/Text";

interface Props {
  showModal: boolean;
  singleButton: boolean;
  description?: string;
  onBackdropPress?: () => void;
  hideModal?: () => void;
  onPress?: () => void;
  icon?: any;
  containerStyle?: ViewStyle | ViewStyle[];
  contentStyle?: ViewStyle | ViewStyle[];
  iconSize?: number;
  buttonText?: string;
  withoutButton?: boolean;
}

const Component = ({
  showModal,
  description,
  onBackdropPress,
  hideModal,
  icon,
  containerStyle,
  contentStyle,
  iconSize,
  buttonText,
  singleButton,
  withoutButton,
  onPress,
}: Props) => {
  return (
    <Modal
      isVisible={showModal}
      style={[{ minHeight: scaledVertical(188) }, containerStyle]}
      onBackdropPress={onBackdropPress}
      onModalHide={hideModal}
    >
      <View
        style={[
          {
            backgroundColor: "#fff",
            borderRadius: 10,
            minHeight: 210,
            width: 280,
            alignSelf: "center",
          },
          contentStyle,
        ]}
      >
        <Space height={24} />
        {icon && (
          <>
            <Image
              source={icon}
              style={{ width: iconSize, height: iconSize, alignSelf: "center" }}
            />
            <Space height={16} />
          </>
        )}
        <Text
          size={14}
          textAlign="center"
          color={colors.neutral500}
          style={{ paddingHorizontal: scaledHorizontal(20) }}
        >
          {description}
        </Text>

        {withoutButton ? null : singleButton ? (
          <>
            <Space height={24} />
            <Button
              style={{
                borderTopLeftRadius: 0,
                borderTopRightRadius: 0,
                bottom: 0,
                position: "absolute",
                width: "100%",
              }}
              onPress={hideModal}
              title={buttonText}
            />
          </>
        ) : (
          <>
            <Space height={24} />
            <View
              style={{
                bottom: 0,
                position: "absolute",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Button
                style={{
                  borderWidth: 0,
                  width: "45%",
                }}
                onPress={hideModal}
                type="light"
                title="Batal"
                // titleStyle={{ color: colors.neutral400, fontWeight: "400" }}
              />
              <View
                style={{ height: 32, borderWidth: 0.5, borderColor: "#ECECEC" }}
              />
              <Button
                style={{
                  borderWidth: 0,
                  width: "45%",
                }}
                onPress={onPress}
                type="light"
                title={buttonText}
              />
            </View>
          </>
        )}
      </View>
    </Modal>
  );
};

Component.defaultProps = {
  iconSize: 60,
  buttonText: "OK",
  singleButton: true,
};

export default memo(Component);
