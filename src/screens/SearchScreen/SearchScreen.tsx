import React, { useCallback, useRef, useState } from "react";
import { StyleSheet, SafeAreaView, View, ScrollView } from "react-native";
import Modal from "react-native-modal";
import color from "configs/colors";
import {
  // Section,
  Header,
  // HorizontalList,
  VerticalList,
  LastSearchComponent,
  Section,
  Sort,
  Space,
  SortModal,
  HorizontalList,
  Book,
  VerticalBook,
} from "components";
import type { NovelType } from "types/NovelTypes";
import NavigationService from "utils/NavigationService";

import { dataContents } from "../../assets/fake/contents";

const SearchScreen = () => {
  const [searchText, setSearchText] = useState("" as any);
  const [isSearch, setIsSearch] = useState(false);
  const [showSort, setShowSort] = useState(false);
  // const recentSearch = useRecentSearch();
  // const dispatch: any = useDispatch();
  // const [searchLoading, setSearchLoading] = useState(true);
  const timeout: any = useRef(null);
  // const token = useToken();
  // const realm = useRealm();
  // const searchNovel = useNovelSearch();
  // const topNovelData = useNovelTopData();

  // useEffect(() => {
  //   dispatch(getTopNovelData(token, realm));
  // }, []);

  // const searchNovelList = (text: string) => {
  //   dispatch(
  //     getSearchNovelData(token, text, realm, "get", 1, () => {
  //       wait(1000).then(() => {
  //         wait(100)
  //           .then(() => {
  //             logEvent("user_search_novel", { search_query: text });
  //           })
  //           .finally(() => {
  //             setSearchLoading(false);
  //           });
  //       });
  //     }),
  //   );
  // };

  const onSubmit = useCallback((event: any) => {
    event.preventDefault();
    setIsSearch(true);
  }, []);

  const onDeleteInput = () => {
    setSearchText("");
    setIsSearch(false);
  };

  // const debounceHandler = useCallback(
  //   debounce(text => onClickSeach(text), 1000),
  //   [],
  // );

  const onChangeTextSearch = (text: string) => {
    clearTimeout(timeout.current);

    if (text.length >= 3) {
      // setIsSearch(true);
      // setSearchLoading(true);
      timeout.current = setTimeout(() => {
        onClickSeach(text);
      }, 1000);
    } else {
      // setIsSearch(false);
    }

    setSearchText(text);
  };

  const onClickSeach = (text: string) => {
    if (text && text !== "" && text.length >= 3) {
      setSearchText(text);
    }
  };

  const recentSearch = [
    { data: "Love" },
    { data: "My Life a Simple Story" },
    { data: "Sherlock Holmes" },
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
    <SafeAreaView style={styles.container}>
      <Header
        title="Pencarian"
        titleOn="left"
        withSearchBar
        withCloseIcon
        onChangeText={onChangeTextSearch}
        value={searchText}
        onSubmit={onSubmit}
        onDeleteInput={onDeleteInput}
      />
      {isSearch && (
        <View style={{ paddingHorizontal: 16 }}>
          <Sort
            bookTotal={dataContents[4].novels.length}
            selected={selected}
            onPress={() => setShowSort(true)}
          />
        </View>
      )}
      <Space height={10} />
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        {!isSearch ? (
          <View>
            <VerticalList
              listKey="dataFuture"
              data={recentSearch}
              keyExtractor={item => item.data}
              renderItem={({ item, index }: { item: any; index: any }) => (
                <LastSearchComponent
                  item={item}
                  index={index}
                  onClickSearch={onClickSeach}
                />
              )}
              isShowVerticalIndicator={false}
            />
            <Section size={14} title={"Cerita Paling Populer"} />
            <HorizontalList
              data={dataContents[0].novels}
              keyExtractor={item => item?.id}
              isShowHorizontalIndicator={false}
              renderItem={({
                item,
                index,
              }: {
                item: NovelType;
                index: any;
              }) => (
                <Book
                  contentType="popular"
                  type="small"
                  item={item}
                  index={index}
                  dataLength={dataContents[0].novels}
                  onPress={() => NavigationService.navigate("NovelScreen")}
                />
              )}
              isShowVerticalIndicator={false}
            />
          </View>
        ) : (
          <>
            <View style={{ paddingHorizontal: 4 }}>
              <VerticalList
                data={dataContents[4].novels}
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
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: { backgroundColor: color.neutral50, flex: 1, paddingVertical: 16 },
});
