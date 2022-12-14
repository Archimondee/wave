import { Space, VerticalBook, VerticalList } from "components";
import React from "react";
import { View, StyleSheet } from "react-native";
import type { NovelType } from "types/NovelTypes";

import { dataContents } from "../../../assets/fake/contents";

const ReadScreen = () => {
  return (
    <View style={styles.container}>
      <VerticalList
        data={dataContents[1].novels}
        keyExtractor={item => item?.id}
        isShowHorizontalIndicator={false}
        renderItem={({ item, index }: { item: NovelType; index: any }) => (
          <VerticalBook
            item={item}
            type={"progress"}
            key={index}
            size={"small"}
          />
        )}
        isShowVerticalIndicator={false}
      />
      <Space height={130} />
    </View>
  );
};

export default ReadScreen;

const styles = StyleSheet.create({
  container: {},
});
