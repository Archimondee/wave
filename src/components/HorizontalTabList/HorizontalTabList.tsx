import color from "configs/colors";
import React from "react";
import { View, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { scaledHorizontal, scaledVertical } from "utils/ScaledService";

import Text from "../Text/Text";

interface TabListProps {
  item: { id: number; title: string }[];
  selectedTab: number;
  setSelectedTab: (args: number) => void;
}

const HorizontalTabList = ({
  item,
  selectedTab,
  setSelectedTab,
}: TabListProps) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        // paddingHorizontal: scaledHorizontal(20),
        borderBottomWidth: 1,
        borderBottomColor: color.neutral200,
      }}
    >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {item.map((tab, index) => {
          return (
            <TouchableOpacity
              onPress={() => setSelectedTab(index)}
              key={index}
              style={{
                flex: 1,
                paddingVertical: scaledVertical(25),
                marginHorizontal: scaledHorizontal(29),
                // borderTopWidth: 0.3,
                borderBottomWidth: selectedTab === index ? 3 : 0.3,
                borderTopColor: color.neutral300,
                borderBottomColor:
                  selectedTab === index ? color.primary500 : color.neutral200,
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
      </ScrollView>
    </View>
  );
};

export default HorizontalTabList;
