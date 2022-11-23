import color from "configs/colors";
import React from "react";
import { View, TouchableOpacity } from "react-native";
import { scaledHorizontal, scaledVertical } from "utils/ScaledService";
import Text from "../Text/Text";

interface TabListProps {
  item: { id: number; title: string }[];
  selectedTab: number;
  setSelectedTab: (args: number) => void;
}

const TabList = ({ item, selectedTab, setSelectedTab }: TabListProps) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: scaledHorizontal(20),
      }}
    >
      {item.map((tab, index) => {
        return (
          <TouchableOpacity
            onPress={() => setSelectedTab(index)}
            key={index}
            style={{
              flex: 1,
              paddingVertical: scaledVertical(25),
              borderTopWidth: 0.3,
              borderBottomWidth: selectedTab === index ? 3 : 0.3,
              borderTopColor: color.neutral300,
              borderBottomColor:
                selectedTab === index ? color.primary500 : color.neutral300,
            }}
          >
            <Text
              textAlign="center"
              type={selectedTab === index ? "bold" : "reguler"}
              color={
                selectedTab === index ? color.primary500 : color.neutral400
              }
            >
              {tab.title}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TabList;
