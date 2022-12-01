import color from "configs/colors";
import icons from "configs/icons";
import React from "react";
import { View, ImageBackground, Image, TouchableOpacity } from "react-native";
import NavigationService from "utils/NavigationService";
import { scaledHorizontal } from "utils/ScaledService";

interface HeaderNovelProps {
  top: number;
  image: any;
}

const HeaderNovel = ({ top, image }: HeaderNovelProps) => {
  return (
    <ImageBackground
      source={image}
      style={{ height: 145 + top }}
      resizeMode={"cover"}
    >
      <View
        style={{ backgroundColor: color.neutral500, flex: 1, opacity: 0.8 }}
      >
        <TouchableOpacity onPress={() => NavigationService.back()}>
          <Image
            source={icons.arrowLeftGrey}
            style={{
              height: 44,
              width: 44,
              marginLeft: scaledHorizontal(10),
              marginTop: top,
            }}
            resizeMode={"contain"}
          />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default HeaderNovel;
