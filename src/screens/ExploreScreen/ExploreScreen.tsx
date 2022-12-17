import {
  Header,
  HorizontalTabList,
  VerticalList,
  Sort,
  VerticalBook,
  SortModal,
} from "components";
import * as React from "react";
import { useState } from "react";
import { View } from "react-native";
import type { NovelType } from "types/NovelTypes";
import globalStyles from "utils/GlobalStyles";
import Modal from "react-native-modal";

import { dataContents } from "../../assets/fake/contents";

const ExploreScreen = () => {
  const [showSort, setShowSort] = useState(false);
  const [selectedTab, setSelectedTab] = useState(0);

  const tabList = [
    { id: 1, title: "Romansa" },
    { id: 2, title: "Fantasi" },
    { id: 3, title: "Misteri" },
    { id: 4, title: "Komedi" },
    { id: 5, title: "Kehidupan" },
    // { id: 6, title: "Fanfiction" },
  ];

  const dataSorting = [
    {
      id: 1,
      title: "Popularitas",
      sortBy: "readers_count",
      direction: "desc",
    },
    {
      id: 2,
      title: "Terbaru",
      sortBy: "created_at",
      direction: "desc",
    },
    {
      id: 3,
      title: "Terlama",
      sortBy: "created_at",
      direction: "asc",
    },
    {
      id: 4,
      title: "Rating tertinggi",
      sortBy: "novel_rating",
      direction: "desc",
    },
  ];

  const [selected, setSelected] = useState(dataSorting[0]?.title);

  return (
    <>
      <View style={globalStyles().topSafeArea}>
        <Header withSearchBar placeholder="Cari novel" />
        <HorizontalTabList
          item={tabList}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
        <View style={{ marginHorizontal: 16, marginVertical: 16 }}>
          <Sort
            bookTotal={dataContents[selectedTab].novels.length}
            selected={selected}
            onPress={() => setShowSort(true)}
          />
        </View>

        <VerticalList
          data={dataContents[selectedTab].novels}
          keyExtractor={item => item?.id}
          //listEmptyComponent={<HomeBookListVerticalSkeleton />}
          renderItem={({ item }: { item: NovelType; index: any }) => (
            <VerticalBook
              key={item?.novel_title}
              item={item}
              type={"rating"}
              novelType="incoming"
            />
          )}
          isShowVerticalIndicator={false}
        />
      </View>
      <Modal
        animationIn="slideInUp"
        animationOut="slideOutDown"
        isVisible={showSort}
        onDismiss={() => setShowSort(false)}
        onBackdropPress={() => setShowSort(false)}
        onBackButtonPress={() => setShowSort(false)}
        useNativeDriver={true}
        useNativeDriverForBackdrop={true}
        style={{ flex: 1, justifyContent: "flex-end", margin: 0 }}
      >
        <SortModal
          selected={selected}
          option={dataSorting}
          onClose={() => setShowSort(false)}
          onPressOption={e => {
            setShowSort(false);
            setSelected(e);
          }}
        />
      </Modal>
    </>
  );
};

export default ExploreScreen;

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: colors.neutral50 },
// });
