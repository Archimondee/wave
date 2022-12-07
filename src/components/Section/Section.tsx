import { Text } from "components";
import React from "react";
import { View } from "react-native";
import FastImage from "react-native-fast-image";

import styles from "./styles";

interface SectionProps {
  title: string;
  image?: any;
}

const Section = ({ title, image }: SectionProps) => {
  return (
    <View style={styles.container}>
      {image && (
        <FastImage source={image} style={styles.image} resizeMode="contain" />
      )}
      <Text type="bold">{title}</Text>
    </View>
  );
};

export default Section;
