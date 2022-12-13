import icons from "configs/icons";
import React, { memo } from "react";
import { View, StyleSheet } from "react-native";
import FastImage from "react-native-fast-image";

interface StarRatingProps {
  rating: number;
}

const StarRating = ({ rating }: StarRatingProps) => {
  const max = 5;
  const renderStar = () => {
    const component = [];
    for (let i = 0; i < rating; i++) {
      component.push(
        <FastImage
          key={i}
          source={icons.star}
          style={styles.image}
          resizeMode={"contain"}
        />,
      );
    }

    if (rating < max) {
      const a = max - rating;
      for (let i = 0; i < a; i++) {
        component.push(
          <FastImage
            key={rating + i}
            source={icons.emptyStar}
            style={styles.image}
            resizeMode={"contain"}
          />,
        );
      }
    }

    return component;
  };
  return <View style={styles.container}>{renderStar()}</View>;
};

export default memo(StarRating);

const styles = StyleSheet.create({
  container: { flexDirection: "row", paddingTop: 3 },
  image: { height: 12, width: 12, marginRight: 3 },
});
