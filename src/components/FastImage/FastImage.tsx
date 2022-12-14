import React from "react";
import FastImage, {
  ImageStyle,
  ResizeMode,
  Source,
} from "react-native-fast-image";

interface IconProps {
  id?: string | number;
  source: Source | any;
  resizeMode: ResizeMode;
  imageStyle?: ImageStyle | ImageStyle[];
  tintColor?: string;
}

const ImageCache = ({
  id,
  source,
  imageStyle,
  resizeMode,
  tintColor,
}: IconProps) => {
  return (
    <FastImage
      key={id}
      source={source}
      resizeMode={resizeMode}
      style={[imageStyle]}
      tintColor={tintColor}
    />
  );
};

export default ImageCache;
