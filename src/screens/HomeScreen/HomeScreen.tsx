/* eslint-disable radix */
import {
  Book,
  Button,
  CarouselInfinite,
  CategoryCard,
  Header,
  HorizontalList,
  ListPrizeDay,
  Space,
  Title,
  VerticalBook,
  VerticalList,
} from "components";
import images from "configs/images";
import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  Image,
  useWindowDimensions,
  ScrollView,
  BackHandler,
  InteractionManager,
} from "react-native";
import Modal from "react-native-modal";
import globalStyles from "utils/GlobalStyles";
import { scaledHorizontal, scaledVertical } from "utils/ScaledService";
import type { ContentType, NovelType } from "types/NovelTypes";
import NavigationService from "utils/NavigationService";
//import { dataContents } from "../../assets/fake/contents";
//import { dataCategories } from "../../assets/fake/categories";

import styles from "./HomeScreenStyles";
import { useListCategory, useListContent } from "hooks";
import { useDispatch } from "react-redux";
import { getCategoriesList, getContent } from "../../stores/novel/actions";
import { wait } from "utils/Utils";
import { useFocusEffect, useNavigationState } from "@react-navigation/core";

const HomeScreen = () => {
  const [showPrize, setShowPrize] = useState(false);
  const [isLoadingContent, setIsLoadingContent] = useState(true);
  const [isLoadingCategory, setIsLoadingCategory] = useState(true);
  const { width } = useWindowDimensions();
  const routes: any = useNavigationState(state => state.routes);

  const dispatch: any = useDispatch();
  const listContent = useListContent();
  const listCategory = useListCategory();

  useEffect(() => {
    dispatch(
      getCategoriesList(() => {
        wait(500).then(() => {
          setIsLoadingCategory(false);
        });
      }),
    );
    dispatch(
      getContent(() => {
        wait(1000).then(() => {
          wait(500).then(() => {
            setIsLoadingContent(false);
          });
        });
      }),
    );
  }, [dispatch]);

  const backAction = () => {
    const currentRoute = routes[routes.length - 1].name;

    if (currentRoute.includes("Tab")) {
      BackHandler.exitApp();
    }
    return true;
  };

  useFocusEffect(
    useCallback(() => {
      const task = InteractionManager.runAfterInteractions(() => {
        BackHandler.addEventListener("hardwareBackPress", backAction);
      });

      return () => {
        task.cancel();
        BackHandler.removeEventListener("hardwareBackPress", backAction);
      };
    }, []),
  );

  const day = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
  ];

  const restructureArray = (dataNovel: NovelType[]) => {
    const totalList = 3;
    const totalData = 6;
    const newArray = [];
    let i = 0;
    for (i = 0; i < totalList; i++) {
      if (
        dataNovel.slice(
          i === 0 ? 0 : totalData * i,
          i === 0 ? 6 : totalData * (i + 1),
        ).length > 0
      ) {
        newArray.push(
          dataNovel.slice(
            i === 0 ? 0 : totalData * i,
            i === 0 ? 6 : totalData * (i + 1),
          ),
        );
      }
    }

    return newArray;
  };

  const RenderContent = useCallback(() => {
    const component: JSX.Element[] = [];
    if (listContent.length >= 0) {
      listContent.map((content: ContentType) => {
        if (content?.type === 1) {
          component.push(
            <View key={content?.uuid}>
              <Title title={content?.content_name} />
              <CarouselInfinite
                dataCarousel={restructureArray(content.novel)}
              />
              <Title title="Kategori" />
              {_renderCategory(listCategory)}
            </View>,
          );
        } else if (content?.type === 2) {
          component.push(
            <View key={content?.uuid}>
              <Title title={content?.content_name} />
              <HorizontalList
                listKey={content.content_name}
                data={content?.novel?.slice(0, 10)}
                keyExtractor={item => item?.uuid}
                isShowHorizontalIndicator={false}
                renderItem={({
                  item,
                  index,
                }: {
                  item: NovelType;
                  index: any;
                }) => (
                  <Book
                    contentType="number"
                    type="big"
                    item={item}
                    index={index}
                    dataLength={content.novel.length}
                    onPress={() => NavigationService.navigate("NovelScreen")}
                  />
                )}
                isShowVerticalIndicator={false}
              />

              <Space height={20} />
            </View>,
          );
        } else if (content?.type === 3) {
          component.push(
            <View key={content?.uuid} style={{}}>
              <View key={content?.uuid}>
                <Title title={content?.content_name} />
                <VerticalList
                  listKey={content.content_name}
                  data={content?.novel}
                  keyExtractor={item => item?.uuid}
                  //listEmptyComponent={<HomeBookListVerticalSkeleton />}
                  renderItem={({ item }: { item: NovelType; index: any }) => (
                    <VerticalBook
                      key={item?.title}
                      item={item}
                      type="category"
                      novelType="incoming"
                    />
                  )}
                  isShowVerticalIndicator={false}
                  contentContainerStyle={{
                    paddingHorizontal: scaledHorizontal(10),
                  }}
                />
              </View>
              {/* {loadingIndicator ? (
                <View>
                  <View
                    style={{
                      height: 100,
                    }}
                  >
                    <SkypeIndicator
                      color={colors.neutral300}
                      size={30}
                      style={{
                        justifyContent: "flex-start",
                      }}
                    />
                  </View>
                </View>
              ) : null} */}
            </View>,
          );
        }
      });
    }

    return component;
  }, [listContent, listCategory]);

  const _renderCategory = (data: any) => {
    const splitUp = data.length / 2;
    const endListFirst = splitUp.toFixed();

    if (data?.length <= 5) {
      return (
        <HorizontalList
          listKey="dataTop"
          data={data?.slice(0, data.length)}
          keyExtractor={item => item?.uuid}
          renderItem={({ item, index }: { item: any; index: any }) => (
            <CategoryCard
              title={item?.category_name}
              index={index}
              dataLength={data.length}
              id={item?.id}
              type={"small"}
              //icon={item.icon}
            />
          )}
          isShowVerticalIndicator={false}
        />
      );
    }

    return (
      <>
        <Space height={10} />
        <HorizontalList
          listKey="dataTop"
          data={data?.slice(0, parseInt(endListFirst))}
          keyExtractor={item => item?.uuid}
          renderItem={({ item, index }: { item: any; index: any }) => (
            <CategoryCard
              title={item?.category_name}
              index={index}
              dataLength={data.length}
              id={item?.id}
              type={"small"}
              //icon={item.icon}
            />
          )}
          isShowVerticalIndicator={false}
        />
        <Space height={16} />
        <HorizontalList
          listKey="dataTop"
          data={data?.slice(parseInt(endListFirst), data.length)}
          keyExtractor={item => item?.uuid}
          renderItem={({ item, index }: { item: any; index: any }) => (
            <CategoryCard
              title={item?.category_name}
              index={index}
              dataLength={data.length}
              id={item?.id}
              type={"small"}
              //icon={item.icon}
            />
          )}
          isShowVerticalIndicator={false}
        />
        <Space height={10} />
      </>
    );
  };

  return (
    <View style={globalStyles().topSafeArea}>
      <Header
        withGiftIcon
        withNotificationIcon
        withSearchBar
        isNavigateSearchScreen
        placeholder="Cari judul novel"
        onPressGiftIcon={() => setShowPrize(true)}
        onPressNotificationIcon={() =>
          NavigationService.navigate("NotificationScreen")
        }
      />
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        {/* <TouchableOpacity
          onPress={() => NavigationService.navigate("NovelScreen")}
        >
          <Text>Go to detail</Text>
        </TouchableOpacity> */}

        {RenderContent()}
        <Space height={100} />
      </ScrollView>

      <Modal
        animationIn="slideInUp"
        animationOut="slideOutDown"
        isVisible={showPrize}
        onDismiss={() => setShowPrize(false)}
        onBackdropPress={() => setShowPrize(false)}
        onBackButtonPress={() => setShowPrize(false)}
        useNativeDriver={false}
        useNativeDriverForBackdrop={false}
        //backdropColor={"transparent"}
        style={styles.containerModal}
      >
        <View style={styles.container}>
          <Image
            source={images.badge}
            style={[styles.imageBig, { width: width }]}
          />
          <Space height={70} />
          <View style={styles.containerFlex}>
            {day.map((item, index) => {
              window.console.log("data", item);
              return <ListPrizeDay index={index} key={index} />;
            })}
          </View>
          <Space height={20} />
          <Button
            title="Ambil"
            style={{ paddingVertical: scaledVertical(25) }}
          />

          {/* <TouchableOpacity
            onPress={() => setShowPrize(false)}
            style={styles.containerClose}
          >
            <Image
              source={icons.xcircleBlack}
              style={{ height: 40, width: 40 }}
              resizeMode={"contain"}
            />
          </TouchableOpacity> */}
        </View>
      </Modal>
    </View>
  );
};

export default HomeScreen;
