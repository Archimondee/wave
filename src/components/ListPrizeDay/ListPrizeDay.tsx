import color from "configs/colors";
import images from "configs/images";
import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { scaledHorizontal, scaledVertical } from "utils/ScaledService";

import Text from "../Text/Text";

interface ListPrizeDayProps {
  index: number;
}

const ListPrizeDay = ({ index }: ListPrizeDayProps) => {
  return (
    <View
      key={index}
      style={[styles.container, { width: index === 6 ? "95%" : "30%" }]}
    >
      <View style={styles.containerTop}>
        <Text
          color={color.neutral50}
          textAlign={"center"}
          type={"bold"}
          size={10}
        >
          Hari ini
        </Text>
      </View>
      <View style={styles.containerBottom}>
        <Image
          source={images.diamond}
          style={{ height: 24, width: 24 }}
          resizeMode={"contain"}
        />
        <Text
          color={color.neutral500}
          type={"bold"}
          size={12}
          style={{ marginLeft: scaledHorizontal(5) }}
        >
          + 2
        </Text>
      </View>
    </View>
  );
};

export default ListPrizeDay;

const styles = StyleSheet.create({
  container: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,

    marginRight: scaledHorizontal(5),
    marginVertical: scaledVertical(10),
  },
  containerTop: {
    backgroundColor: color.secondary600,
    paddingVertical: scaledVertical(10),
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingHorizontal: scaledHorizontal(25),
  },
  containerBottom: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: scaledVertical(20),
    backgroundColor: color.neutral50,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
});
