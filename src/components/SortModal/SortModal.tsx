import icons from "configs/icons";
import { Space, Text } from "components";
import React from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import FastImage from "react-native-fast-image";
import color from "configs/colors";
import { scaledHorizontal, scaledVertical } from "utils/ScaledService";

interface SortProps {
  selected?: string;
  option: any;
  onClose: () => void;
  onPressOption: (e: string) => void;
}

const SortModal = ({ option, onClose, onPressOption, selected }: SortProps) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          paddingVertical: scaledVertical(40),
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text size={14} color={color.neutral500} type={"bold"}>
          Urut Berdasarkan
        </Text>
        <TouchableOpacity onPress={onClose}>
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
      </View>
      <View>
        {option.map((item: { title: string; id: number }) => {
          return (
            <TouchableOpacity
              style={{
                paddingBottom: 18,
                alignItems: "center",
                flexDirection: "row",
              }}
              key={item.id}
              onPress={() => onPressOption(item.title)}
            >
              <Image
                style={{ height: 24, width: 24 }}
                source={
                  item.title === selected ? icons.switchOn : icons.switchOff
                }
              />
              <Space width={8} />
              <Text>{item.title}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default SortModal;

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.neutral50,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingHorizontal: scaledHorizontal(24),
    minHeight: scaledVertical(450),
  },
});
