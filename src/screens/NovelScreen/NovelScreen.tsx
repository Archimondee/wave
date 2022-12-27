import {
  HeaderNovel,
  RatingDetailNovel,
  Text,
  HorizontalList,
  CategoryCard,
  TopDetailNovel,
  VerticalList,
  Comment,
  Space,
  Section,
  Button,
} from "components";
import colors from "configs/colors";
import icons from "configs/icons";
import images from "configs/images";
import React, { useState } from "react";
import { ScrollView, StatusBar, View, TouchableOpacity } from "react-native";
import FastImage from "react-native-fast-image";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Modal from "react-native-modal";
import type { CommentType } from "types/CommentTypes";
import type { CategoriesType } from "types/NovelTypes";
import NavigationService from "utils/NavigationService";
import { scaledHorizontal, scaledVertical } from "utils/ScaledService";

import styles from "./styles";

const NovelScreen = () => {
  const { top } = useSafeAreaInsets();
  const [isLoading] = useState(false);
  const [isLoadingComment] = useState(false);
  const [token] = useState(true);
  const [all, setAll] = useState(false);
  const [showModalCover, setModalCover] = useState(false);

  const gotoReview = () => {
    // NavigationService.navigate("ReviewScreen");
  };

  const convertTypeComponent = () => {
    if (!token) {
      return (
        <Button
          title="Klaim Novel Gratis"
          style={styles.buttonContainer}
          // onPress={() => {
          //   dispatch(
          //     claimFreebies(
          //       route?.params?.id,
          //       token,
          //       route?.params?.freebies_id || 0,
          //       () => {
          //         fetchingCollectionData();
          //         wait(1500).then(() => {
          //           setSuccessClaim(true);
          //         });
          //       },
          //       () => {
          //         fetchingCollectionData();
          //         wait(1500).then(() => {
          //           setErrorClaim(true);
          //         });
          //       },
          //     ),
          //   );
          // }}
        />
      );
    } else {
      return (
        <Button
          title={"Baca"}
          style={styles.buttonContainer}
          onPress={() => NavigationService.navigate("SelectChapterScreen")}
          // onPress={
          //   () => {
          //     wait(100)
          //       .then(() => {
          //         logEvent("user_preview_bab_novel", {
          //           novel: detailNovel?.data?.data?.novel_title,
          //         });
          //       })
          //       .finally(() => {
          //         NavigationService.navigate("ListChapterScreen");
          //       });
          //   }
          //   //It will change to chapter page
          // }
        />
      );
    }
  };

  const dataCategory = [
    {
      id: 1,
      category_name: "Romansa",
    },
    {
      id: 2,
      category_name: "Kehidupan",
    },
    {
      id: 4,
      category_name: "Fantasi",
    },
    {
      id: 5,
      category_name: "Other Tag",
    },
    {
      id: 6,
      category_name: "Other Tag",
    },
    {
      id: 7,
      category_name: "Other Tag",
    },
  ];

  const detailNovel: any = {
    data: {
      data: {
        id: 1,
        novel_title: "Terkatung-Katung Di Bulan Yang Dicuri",
        novel_cover: images.exampleBook,
        author: { username: "Aldo Triadi" },
        chapters_count: 12,
      },
    },
  };

  const commentNovelData = {
    data: {
      data: [
        {
          id: 1,
          comment_rating: 4,
          comment_content: "Ceritanya keren banget parah!",
          user: {
            photo_profile: images.witch,
            fullname: "Gloria Semesta",
          },
        },
        {
          id: 2,
          comment_rating: 5,
          comment_content: "Seru, gak nyangka ada plot twistnya",
          user: {
            photo_profile: images.witch,
            fullname: "Joko Anwar",
          },
        },
        {
          id: 3,
          comment_rating: 5,
          comment_content: "Recomended",
          user: {
            photo_profile: images.witch,
            fullname: "Diana",
          },
        },
        {
          id: 4,
          comment_rating: 3,
          comment_content: "Ku menangisss bacanya",
          user: {
            photo_profile: images.witch,
            fullname: "Martha",
          },
        },
      ],
    },
  };

  return (
    <>
      <ScrollView
        style={{ backgroundColor: colors.neutral50 }}
        showsVerticalScrollIndicator={false}
      >
        <StatusBar barStyle={"light-content"} />
        <HeaderNovel top={top} image={images.exampleBook} />
        <View style={styles.containerTop}>
          <TopDetailNovel
            data={detailNovel.data.data}
            isLoading={isLoading}
            onPressCover={() => setModalCover(true)}
            onPressAuthor={() =>
              NavigationService.navigate("AuthorProfileScreen")
            }
          />
        </View>
        <View style={{ paddingHorizontal: scaledHorizontal(16) }}>
          <RatingDetailNovel
            onPress={gotoReview}
            rating={4.9}
            readers_count={24000}
            isLoading={false}
          />
          {isLoading ? (
            // <SinopsisSkeleton />
            <></>
          ) : (
            <View>
              <Text type="bold" color={colors.neutral500}>
                Sinopsis
              </Text>
              <Text
                size={14}
                numberOfLines={all ? 0 : 4}
                style={{ marginTop: 10, letterSpacing: 0.5, lineHeight: 22 }}
              >
                Semua yang kehausan duduk di tepi telaga, semua yang tak punya
                cinta dikelilingi cinta, semua yang miskin dikelilingi uang,
                semua kegagalan dikelilingi kesuksesan, semua yang di ujung
                tanduk dikelilingi peluang dan kesempatan. Hanya saja mereka tak
                mampu melihat apa yang mengelilinginya.” Mengapa banyak orang
                berjuang mati-matian mengejar kesuksesan namun gagal? Mengapa
                banyak orang yang dikatakan sukses justru berakhir tragis?
                Mereka mencari di luar diri, sementara kesuksesan sejati berada
                di dalam diri. Ketika melihat ke luar, mereka hanya melihat
                simbol-simbol kesuksesan dan berkesimpulan bahwa itulah yang
                harus diperjuangkan dan dimiliki. Kesuksesan, menurut Dr.
                Hawkins, adalah level kesadaran yang memungkinkan seseorang
                “menjadi” pribadi tertentu sehingga “memiliki” adalah
                konsekuensi yang otomatis terjadi. Seperti kebahagiaan,
                kesuksesan serta-merta hadir ketika kita menjalani cara hidup
                tertentu dan selaras dengan pola-pola penarik (attractor
                patterns) yang penuh daya di alam semesta. Kesuksesan lahir dari
                pemahaman tentang hakikat kehidupan melalui sikap peka, jeli,
                awas, dan sadar sepanjang waktu. Keberlimpahan dan kemasyhuran
                adalah manifestasi dari apa yang telah terjadi di dalam batin.
              </Text>
              <TouchableOpacity onPress={() => setAll(!all)}>
                <Text
                  style={{ marginVertical: 10 }}
                  type={"bold"}
                  color={colors.primary500}
                  size={14}
                >
                  {all ? "Ringkasan Sinopsis" : "Selengkapnya"}
                </Text>
              </TouchableOpacity>
            </View>
          )}
          {isLoading ? (
            // <HomeCategoryListSkeleton />
            <></>
          ) : (
            <View style={{ marginLeft: scaledHorizontal(-21), marginTop: 5 }}>
              <HorizontalList
                listKey="dataCategories"
                data={dataCategory}
                keyExtractor={item => item.id}
                renderItem={({
                  item,
                  index,
                }: {
                  item: CategoriesType;
                  index: any;
                }) => (
                  // console.warn(item)
                  <CategoryCard
                    title={item?.category_name}
                    id={item?.id}
                    index={index}
                    dataLength={dataCategory.length}
                    type="small"
                  />
                )}
                isShowVerticalIndicator={false}
              />
            </View>
          )}
          <View style={styles.topContainer}>
            <Text type="bold" color={colors.neutral500}>
              Ulasan
            </Text>
            {commentNovelData.data ? (
              <TouchableOpacity
                onPress={() => NavigationService.navigate("ReviewScreen")}
              >
                <Text
                  color={colors.primary500}
                  type={"bold"}
                  size={12}
                  style={{ alignSelf: "center" }}
                >
                  Semua Komentar ({commentNovelData.data.data.length})
                </Text>
              </TouchableOpacity>
            ) : null}
          </View>
          {isLoadingComment || !commentNovelData?.data?.data ? (
            // <CommentSkeleton />
            <></>
          ) : (
            <View style={{ marginTop: 10 }}>
              <VerticalList
                listKey="dataComment"
                data={commentNovelData?.data?.data?.slice(0, 4)}
                keyExtractor={item => item?.id}
                renderItem={({ item }: { item: CommentType; index: any }) => (
                  <Comment
                    item={item}
                    // onDelete={onDeleteComment}
                    // onReport={onReport}
                  />
                )}
                listEmptyComponent={
                  <Text
                    textAlign="center"
                    size={14}
                    style={{ marginVertical: scaledVertical(20) }}
                  >
                    {token
                      ? "Belum ada ulasan. Berikan ulasanmu sekarang"
                      : "Gagal memperbaharui data"}
                  </Text>
                }
                footerComponent={
                  <View>
                    {!token ? (
                      <Text
                        textAlign="center"
                        size={14}
                        style={{ marginVertical: scaledVertical(20) }}
                      >
                        Silahkan masuk untuk memberikan ulasan
                      </Text>
                    ) : (
                      <TouchableOpacity
                        style={styles.bottomInnerContainer}
                        onPress={() => {
                          NavigationService.navigate("BottomModal", {
                            type: "ReviewModal",
                            id: 1,
                            novel_title: detailNovel?.data?.data?.novel_title,
                          });
                        }}
                      >
                        <Text
                          style={styles.input}
                          size={14}
                          color={colors.neutral300}
                        >
                          Bagaimana Ceritanya ?
                        </Text>
                        <View>
                          <FastImage
                            source={icons.send}
                            style={[
                              {
                                height: scaledVertical(30),
                                width: scaledHorizontal(30),
                                marginBottom: scaledVertical(5),
                              },
                            ]}
                            resizeMode={"contain"}
                          />
                        </View>
                      </TouchableOpacity>
                    )}
                  </View>
                }
                isShowVerticalIndicator={false}
              />
            </View>
          )}
        </View>
        <View style={{ backgroundColor: colors.neutral50, paddingBottom: 50 }}>
          <Section title={"Rekomendasi"} />
          {/* <HorizontalList
            data={topNovelData?.data?.data}
            keyExtractor={item => item?.id}
            renderItem={({ item, index }: { item: NovelType; index: any }) => (
              <Book
                contentType="popular"
                type="small"
                item={item}
                index={index}
                dataLength={topNovelData?.data?.data?.length}
              />
            )}
            listEmptyComponent={<HomeBookListSmallSkeleton type="small" />}
            isShowVerticalIndicator={false}
          /> */}
        </View>
        <Space height={100} />
      </ScrollView>
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.bottomLeftContainer}>
          <FastImage
            source={icons.bookmark}
            style={styles.bottomImage}
            resizeMode={"contain"}
          />
        </TouchableOpacity>
        {convertTypeComponent()}
      </View>
      <Modal
        isVisible={showModalCover}
        onBackdropPress={() => setModalCover(false)}
      >
        <FastImage
          style={{
            height: "70%",
            width: "70%",
            alignSelf: "center",
          }}
          resizeMode={"contain"}
          source={detailNovel.data.data.novel_cover}
        />
      </Modal>
    </>
  );
};

export default NovelScreen;
