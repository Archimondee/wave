import colors from "configs/colors";
import React from "react";
import { Image, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import NavigationService from "utils/NavigationService";
import { scaledHorizontal } from "utils/ScaledService";
import Text from "../Text/Text";
//import { selectedCategory } from "../../store/persist/actions";

import styles from "./styles";

interface CategoryCardProps {
  title: string;
  index: number;
  icon?: any;
  dataLength: number;
  type?: "small" | "normal";
  id?: number;
}

const CategoryCard = ({
  title,
  icon,
  index,
  dataLength,
  type,
  id,
}: CategoryCardProps) => {
  //const dispatch: any = useDispatch();
  return (
    <TouchableOpacity
      // onPress={() => {
      //   //dispatch(selectedCategory(id || 0));
      //   //NavigationService.navigate("Category");
      // }}
      key={index}
      style={[
        styles.container,
        {
          paddingVertical: type === "small" ? 5 : 10,
          marginRight: index === dataLength - 1 ? scaledHorizontal(20) : 0,
        },
      ]}
    >
      {icon ? (
        <Image source={icon} style={styles.icon} resizeMode={"contain"} />
      ) : (
        <></>
      )}

      <Text size={12} color={colors.neutral500}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
