import color from "configs/colors";
import React from "react";
import { View, TouchableOpacity } from "react-native";
import type { CategoryType } from "types/NovelTypes";
import { scaledHorizontal, scaledVertical } from "utils/ScaledService";
import { HorizontalList } from "../List/List";

import Text from "../Text/Text";

interface TabListProps {
  item: CategoryType[];
  selectedTab: number;
  setSelectedTab: (args: number, uuid: string) => void;

  horizontalTabListRef: any;
}

const HorizontalTabList = ({
  item,
  selectedTab,
  setSelectedTab,
  horizontalTabListRef,
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
      <HorizontalList
        listKey="dataTop"
        data={item}
        innerRef={horizontalTabListRef}
        keyExtractor={tab => tab?.uuid}
        renderItem={({ item, index }: { item: CategoryType; index: any }) => {
          return (
            <TouchableOpacity
              onPress={() => setSelectedTab(index, item.uuid)}
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
                {item?.category_name}
              </Text>
            </TouchableOpacity>
          );
        }}
        isShowVerticalIndicator={false}
      />
    </View>
  );
};

export default HorizontalTabList;
