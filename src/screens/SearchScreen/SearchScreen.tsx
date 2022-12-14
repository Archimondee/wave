import React, { useCallback, useRef, useState } from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import Modal from "react-native-modal";
import color from "configs/colors";
import {
  // Section,
  Text,
  Header,
  // HorizontalList,
  VerticalList,
  LastSearchComponent,
  Section,
  Sort,
  Space,
  SortModal,
} from "components";
import { TouchableOpacity } from "react-native-gesture-handler";
import NavigationService from "utils/NavigationService";

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

  const searchResult = [
    { data: "Book 1" },
    { data: "Book 2" },
    { data: "Book 3" },
    { data: "Book 4" },
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
        </View>
      ) : (
        <View style={{ paddingHorizontal: 16 }}>
          <Space height={24} />
          <Sort
            bookTotal={searchResult.length}
            selected={selected}
            onPress={() => setShowSort(true)}
          />
          <Space height={24} />
          <VerticalList
            listKey="dataFuture"
            data={searchResult}
            keyExtractor={item => item.data}
            renderItem={({ item, index }: { item: any; index: any }) => (
              <View key={index}>
                <TouchableOpacity
                  onPress={() => NavigationService.navigate("NovelScreen")}
                >
                  <Text> {item.data}</Text>
                </TouchableOpacity>
              </View>
            )}
            isShowVerticalIndicator={false}
          />
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
        </View>
      )}
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: { backgroundColor: color.neutral50, flex: 1, paddingVertical: 16 },
});
