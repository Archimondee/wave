import { Text, VerticalList, Header, Button, Space } from "components";
import colors from "configs/colors";
import icons from "configs/icons";
import images from "configs/images";
import React, { useState } from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import NavigationService from "utils/NavigationService";
import { scaledVertical } from "utils/ScaledService";

import styles from "./styles";

const SelectChapterScreen = () => {
  const [isLoadingComment] = useState(false);
  const [token] = useState(true);

  const commentNovelData = {
    data: {
      data: [
        {
          id: 1,
          title: "Bab 01",
          chapter_header: "Aku ada Aku Lapang Dada",
          locked: false,
          percentage: "100%",
        },
        {
          id: 2,
          title: "Bab 02",
          chapter_header: "Silakan Tetap Cintai Dia",
          locked: false,
          percentage: "50%",
        },
        {
          id: 3,
          title: "Bab 03",
          chapter_header: "Dia Membutuhkanmu Dia Menyayangimu",
          locked: false,
          percentage: "20%",
        },
        {
          id: 4,
          title: "Bab 04",
          chapter_header: "Dia Membutuhkanmu Dia Menyayangimu",
          locked: false,
          percentage: "20%",
        },
        {
          id: 5,
          title: "Bab 05",
          chapter_header: "Hanya Teman",
          locked: false,
          percentage: "20%",
        },
        {
          id: 6,
          title: "Bab 06",
          chapter_header: "Tetap Ada Untukmu",
          locked: true,
          percentage: "0%",
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
          {isLoadingComment || !commentNovelData?.data?.data ? (
            // <CommentSkeleton />
            <></>
          ) : (
            <View style={{ marginTop: 10 }}>
              <VerticalList
                listKey="dataComment"
                data={commentNovelData?.data?.data}
                keyExtractor={item => item?.id}
                renderItem={({ item, index }: { item: any; index: number }) => (
                  <>
                    <TouchableOpacity
                      key={index}
                      onPress={() =>
                        NavigationService.navigate("ReadNovelScreen")
                      }
                    >
                      <View style={styles.chapterList}>
                        <View
                          style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                          }}
                        >
                          <Text type={"bold"} size={12}>
                            {item.title}
                          </Text>
                          {item.locked && (
                            <View
                              style={{
                                height: 24,
                                width: 32,
                                backgroundColor: colors.secondary100,
                                borderRadius: 50,
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              <Image
                                style={{ width: 16, height: 16 }}
                                source={icons.lockClosed}
                              />
                            </View>
                          )}
                        </View>
                        <Space height={10} />
                        <Text size={14}>{item.chapter_header}</Text>
                        <Space height={10} />
                        <View>
                          <View
                            style={{
                              height: 6,
                              backgroundColor: colors.secondary400,
                              width: item.percentage,
                              borderRadius: 20,
                              zIndex: 1,
                              position: "absolute",
                            }}
                          />
                          <View
                            style={{
                              height: 6,
                              backgroundColor: colors.neutral200,
                              flex: 1,
                              borderRadius: 20,
                            }}
                          />
                        </View>
                      </View>
                    </TouchableOpacity>
                  </>
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
          <Button
            iconStyle={{ width: 18, height: 18, tintColor: undefined }}
            icon={images.diamond}
            title="Buka semua bab 50 Berlian"
            style={{ flex: 1, minHeight: 42 }}
            onPress={() => NavigationService.navigate("ConfirmBuyNovelScreen")}
          />
        )}
      </View>
    </>
  );
};

export default SelectChapterScreen;
