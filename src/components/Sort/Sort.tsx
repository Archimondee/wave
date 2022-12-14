import icons from "configs/icons";
import { Space, Text } from "components";
import React, { memo } from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import color from "configs/colors";

interface SortProps {
  selected?: string;
  bookTotal: number;
  onPress: () => void;
}

const Sort = ({ selected, bookTotal, onPress }: SortProps) => {
  return (
    <View style={styles.container}>
      <Text type="semibold" color={color.neutral400} size={12}>
        {bookTotal} Judul
      </Text>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        onPress={onPress}
      >
        <Text type="bold" size={12}>
          {selected}
        </Text>
        <Space width={10} />
        <Image source={icons.chevronDown} style={{ width: 11, height: 11 }} />
      </TouchableOpacity>
    </View>
  );
};

export default memo(Sort);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 3,
  },
});
