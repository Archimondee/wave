import { Text } from "components";
import React from "react";
import { View } from "react-native";
import FastImage from "react-native-fast-image";

import styles from "./styles";

interface SectionProps {
  title: string;
  image?: any;
  size?: number;
}

const Section = ({ title, image, size }: SectionProps) => {
  return (
    <View style={styles.container}>
      {image && (
        <FastImage source={image} style={styles.image} resizeMode="contain" />
      )}
      <Text size={size || 16} type="bold">
        {title}
      </Text>
    </View>
  );
};

export default Section;
