import colors from "configs/colors";
import icons from "configs/icons";
import images from "configs/images";
import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Platform,
} from "react-native";
import { isTablet } from "react-native-device-info";
import FastImage from "react-native-fast-image";
import NavigationService from "utils/NavigationService";
import { scale } from "utils/Responsive";
import { scaledHorizontal, scaledVertical } from "utils/ScaledService";

import Text from "../Text/Text";

interface HeaderCustomProps {
  title?: string;
  value?: string;
  onChangeText?: (args: string) => void;
  placeholder?: string;
  withCloseIcon?: boolean;
  withBackIcon?: boolean;
  withSearchBar?: boolean;
  onSubmit?: (args: any) => void;
  onDeleteInput?: () => void;
  titleOn?: "right" | "left" | "center";

  color?: string;
  onBackFunction?: () => void;
  isNavigateSearchScreen?: boolean;
  withGiftIcon?: boolean;
  withNotificationIcon?: boolean;
  onPressGiftIcon?: () => void;
}

const HeaderCustom = ({
  title,
  withCloseIcon,
  value,
  onChangeText,
  withSearchBar,
  placeholder,
  onSubmit,
  onDeleteInput,
  withBackIcon,
  titleOn,
  color,
  onBackFunction,
  isNavigateSearchScreen,
  withGiftIcon,
  withNotificationIcon,
  onPressGiftIcon,
}: HeaderCustomProps) => {
  return (
    <View>
      <View
        style={[
          styles.container,
          {
            backgroundColor: color ? color : "transparent",
            paddingVertical: isTablet()
              ? scaledVertical(10)
              : scaledVertical(20),
          },
        ]}
      >
        {withBackIcon ? (
          <View style={{ flex: 1, flexDirection: "row" }}>
            <TouchableOpacity
              onPress={
                () =>
                  onBackFunction ? onBackFunction() : NavigationService.back()
                // onBackFunction ? () => onBackFunction() : NavigationService.back
              }
              style={{ flex: 0.15, justifyContent: "center" }}
            >
              <FastImage
                source={icons.arrowLeft}
                style={{
                  height: scaledVertical(40),
                  width: scaledHorizontal(40),
                }}
                tintColor={
                  color === colors.secondary500 || color === "black"
                    ? colors.neutral50
                    : "black"
                }
                resizeMode={"contain"}
              />
            </TouchableOpacity>
            {titleOn === "center" ? (
              <Text
                color={colors.neutral500}
                size={16}
                type={"bold"}
                textAlign="center"
                style={{ flex: 1 }}
              >
                {title}
              </Text>
            ) : null}
            {/* <TouchableOpacity
              onPress={NavigationService.back}
              style={{ flex: 0.15 }}
            /> */}
          </View>
        ) : null}
        {titleOn === "left" ? (
          <View
            style={{
              flex: 7,
              justifyContent: "center",
            }}
          >
            <Text
              color={
                color === "black" || color === colors.secondary500
                  ? "white"
                  : colors.neutral500
              }
              size={16}
              type={"bold"}
              numberOfLines={1}
            >
              {title}
            </Text>
          </View>
        ) : null}
        {/* {withRightIcon ? (
          <View style={{}}>
            <FastImage
              source={icons.threeDots}
              style={[
                {
                  width: scaledHorizontal(30),
                  height: scaledVertical(30),
                },
              ]}
              resizeMode={"cover"}
            />
          </View>
        ) : null} */}
        {withCloseIcon ? (
          <TouchableOpacity
            onPress={NavigationService.back}
            style={{ justifyContent: "flex-end" }}
          >
            <FastImage
              source={icons.xmark}
              style={{
                height: scaledVertical(40),
                width: scaledHorizontal(40),
                marginRight: scaledHorizontal(-10),
              }}
              resizeMode={"contain"}
            />
          </TouchableOpacity>
        ) : null}
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        {withSearchBar ? (
          <TouchableOpacity
            style={[styles.containerSearch, { marginTop: 16, flex: 1 }]}
            onPress={() =>
              isNavigateSearchScreen
                ? NavigationService.navigate("SearchScreen")
                : null
            }
            activeOpacity={1}
          >
            <FastImage
              source={icons.search}
              style={[styles.image, { marginRight: scaledHorizontal(10) }]}
              resizeMode={"contain"}
            />
            {isNavigateSearchScreen ? (
              <Text
                color={colors.neutral300}
                style={{ paddingVertical: scaledVertical(18) }}
              >
                {placeholder}
              </Text>
            ) : null}

            {!isNavigateSearchScreen ? (
              <TextInput
                placeholderTextColor={colors.neutral300}
                placeholder={placeholder}
                underlineColorAndroid="transparent"
                value={value}
                //clearButtonMode="always"

                onChangeText={onChangeText}
                returnKeyType="search"
                style={styles.textStyle}
                onSubmitEditing={event => onSubmit && onSubmit(event)}
                editable={isNavigateSearchScreen ? false : true}
              />
            ) : null}

            {/*  */}
            {value !== "" && value && !isNavigateSearchScreen && (
              <TouchableOpacity onPress={onDeleteInput}>
                <FastImage
                  source={icons.xcircleRed}
                  style={styles.image}
                  resizeMode={"contain"}
                />
              </TouchableOpacity>
            )}
          </TouchableOpacity>
        ) : (
          <></>
        )}
        <View
          style={{ flexDirection: "row", marginRight: scaledHorizontal(10) }}
        >
          {withGiftIcon ? (
            <TouchableOpacity
              onPress={onPressGiftIcon}
              //style={{ justifyContent: "flex-end" }}
            >
              <FastImage
                source={images.gift}
                style={{
                  height: scaledVertical(55),
                  width: scaledHorizontal(40),
                  //marginRight: scaledHorizontal(-10),
                }}
                resizeMode={"contain"}
              />
            </TouchableOpacity>
          ) : null}
          {withNotificationIcon ? (
            <TouchableOpacity
              onPress={NavigationService.back}
              style={{ marginLeft: scaledHorizontal(10) }}
            >
              <FastImage
                source={icons.bell}
                style={{
                  height: scaledVertical(60),
                  width: scaledHorizontal(40),
                  //marginRight: scaledHorizontal(-10),
                }}
                resizeMode={"contain"}
              />
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
    </View>
  );
};

export default HeaderCustom;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: scaledHorizontal(16),
    marginTop:
      Platform.OS === "android" ? scaledVertical(20) : scaledVertical(10),
  },
  textStyle: {
    flex: 1,
    fontSize: 14,
    lineHeight: 15,
    paddingVertical: scaledVertical(18),
    paddingRight: scaledHorizontal(5),
    color: colors.black,
    //height: scaledVertical(35),
    textAlignVertical: "center",
  },
  image: {
    height: scaledVertical(35),
    width: scaledHorizontal(35),
    marginBottom: scaledVertical(5),
  },
  containerSearch: {
    flexDirection: "row",
    marginTop: isTablet() ? scale(5) : scaledVertical(30),
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.neutral300,
    borderRadius: 50,
    paddingHorizontal: 10,
    borderStyle: "solid",
    marginHorizontal: scaledHorizontal(20),
    marginBottom: scaledVertical(30),
  },
});
