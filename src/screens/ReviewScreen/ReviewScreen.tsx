import { Text, VerticalList, Comment, Header } from "components";
import colors from "configs/colors";
import icons from "configs/icons";
import images from "configs/images";
import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import FastImage from "react-native-fast-image";
import { SafeAreaView } from "react-native-safe-area-context";
import type { CommentType } from "types/CommentTypes";
import NavigationService from "utils/NavigationService";
import { scaledHorizontal, scaledVertical } from "utils/ScaledService";

import styles from "./styles";

const ReviewScreen = () => {
  const [isLoadingComment] = useState(false);
  const [token] = useState(true);

  const detailNovel = {
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
        {
          id: 5,
          comment_rating: 3,
          comment_content: "Ku menangisss bacanya",
          user: {
            photo_profile: images.witch,
            fullname: "Martha",
          },
        },
        {
          id: 6,
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
      <SafeAreaView style={styles.container}>
        <Header
          title="Terkatung-Katung Di Bulan Yang Dicuri"
          titleOn="left"
          withBackIcon
        />
        <View style={{ paddingHorizontal: 16 }}>
          <View style={styles.topContainer}>
            <Text type="bold" color={colors.neutral500}>
              Ulasan
            </Text>
            {commentNovelData.data ? (
              <TouchableOpacity
                onPress={() => NavigationService.navigate("ReviewScreen")}
              >
                <Text
                  color={colors.neutral400}
                  type={"bold"}
                  size={12}
                  style={{ alignSelf: "center" }}
                >
                  {commentNovelData.data.data.length} Komentar
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
                data={commentNovelData?.data?.data}
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
                isShowVerticalIndicator={false}
              />
            </View>
          )}
        </View>
      </SafeAreaView>
      <View style={styles.bottomContainer}>
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
            <Text style={styles.input} size={14} color={colors.neutral300}>
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
    </>
  );
};

export default ReviewScreen;
