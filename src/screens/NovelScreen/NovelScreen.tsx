import { HeaderNovel } from "components";
import images from "configs/images";
import React from "react";
import { ScrollView, StatusBar } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const NovelScreen = () => {
  const { top } = useSafeAreaInsets();

  return (
    <ScrollView style={[]}>
      <StatusBar barStyle={"light-content"} />
      <HeaderNovel top={top} image={images.exampleBook} />
    </ScrollView>
  );
};

export default NovelScreen;
