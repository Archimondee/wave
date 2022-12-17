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
import React, { useCallback, useState } from "react";
import { View, Image, useWindowDimensions, ScrollView } from "react-native";
import Modal from "react-native-modal";
import globalStyles from "utils/GlobalStyles";
import { scaledHorizontal, scaledVertical } from "utils/ScaledService";
import type { ContentType, NovelType, CategoriesType } from "types/NovelTypes";
import NavigationService from "utils/NavigationService";

import { dataHighlight } from "../../assets/fake/highlight";
import { dataContents } from "../../assets/fake/contents";
import { dataCategories } from "../../assets/fake/categories";

import styles from "./HomeScreenStyles";

const HomeScreen = () => {
  const [showPrize, setShowPrize] = useState(false);
  const { width } = useWindowDimensions();

  const day = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
  ];

  const restructureArray = () => {
    const totalList = 3;
    const totalData = 6;
    const newArray = [];
    let i = 0;
    for (i = 0; i < totalList; i++) {
      if (
        dataHighlight.slice(
          i === 0 ? 0 : totalData * i,
          i === 0 ? 6 : totalData * (i + 1),
        ).length > 0
      ) {
        newArray.push(
          dataHighlight.slice(
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
    if (dataContents) {
      dataContents.map((content: ContentType) => {
        if (content?.type === 1) {
          component.push(
            <View key={content?.id}>
              <Title title={content?.content_name} />
              <HorizontalList
                listKey={content?.content_name.slice(0, 5)}
                data={content?.novels}
                keyExtractor={item => item?.id}
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
                    dataLength={content.novels.length}
                    onPress={() => NavigationService.navigate("NovelScreen")}
                  />
                )}
                //listEmptyComponent={<HomeBookListSmallSkeleton type="small" />}
                isShowVerticalIndicator={false}
              />
            </View>,
          );
        } else if (content?.type === 3) {
          component.push(
            <View key={content?.id}>
              <Title title={content?.content_name} />
              <HorizontalList
                listKey={content.content_name}
                data={content?.novels?.slice(0, 10)}
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
                    contentType="number"
                    type="big"
                    item={item}
                    index={index}
                    dataLength={content.novels.length}
                    onPress={() => NavigationService.navigate("NovelScreen")}
                  />
                )}
                isShowVerticalIndicator={false}
              />
              <Title title="Chapter Baru Setiap Hari" />
              <CarouselInfinite dataCarousel={restructureArray()} />
              <Space height={20} />
            </View>,
          );
        } else if (content?.type === 2) {
          component.push(
            <View key={content?.id} style={{}}>
              <Title title="Kategori" />
              {_renderCategory(dataCategories)}
              <View key={content?.id}>
                <Title title={content?.content_name} />
                <VerticalList
                  listKey={content.content_name}
                  data={content?.novels}
                  keyExtractor={item => item?.id}
                  //listEmptyComponent={<HomeBookListVerticalSkeleton />}
                  renderItem={({ item }: { item: NovelType; index: any }) => (
                    <VerticalBook
                      key={item?.novel_title}
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
  }, []);

  const _renderCategory = (data: any) => {
    const splitUp = data.length / 2;
    const endListFirst = splitUp.toFixed();

    if (data?.length <= 5) {
      return (
        <HorizontalList
          listKey="dataTop"
          data={data?.slice(0, data.length)}
          keyExtractor={item => item?.id}
          renderItem={({
            item,
            index,
          }: {
            item: CategoriesType;
            index: any;
          }) => (
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
        <HorizontalList
          listKey="dataTop"
          data={data?.slice(0, parseInt(endListFirst))}
          keyExtractor={item => item?.id}
          renderItem={({
            item,
            index,
          }: {
            item: CategoriesType;
            index: any;
          }) => (
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
          keyExtractor={item => item?.id}
          renderItem={({
            item,
            index,
          }: {
            item: CategoriesType;
            index: any;
          }) => (
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
