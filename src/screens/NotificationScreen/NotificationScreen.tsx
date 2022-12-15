/* eslint-disable max-len */
import React from "react";
import { SafeAreaView, TouchableOpacity, View } from "react-native";
import { Header, VerticalList, Space, Text } from "components";
import colors from "configs/colors";
import moment from "moment";
import images from "configs/images";
import FastImage from "react-native-fast-image";
import { scale } from "utils/Responsive";
import NavigationService from "utils/NavigationService";
import DateDifference from "utils/DateDifference";

const NotificationScreen = () => {
  const dataNotification = [
    {
      title: "Klaim Novel Gratismu Sekarang!",
      content:
        "Kamu mendapatkan novel gratis dari pembelian novel “judul novel” banyak pilihan novel gratis yang bisa kamu klaim.  Buruan klaim sekarang!",
      created_at: "2022-12-16 00:43:00",
      image: null,
      direct: () => NavigationService.navigate("NovelScreen"),
    },
    {
      title: "Selamat! Kamu adalah pemenang Top Inviter!",
      content:
        "Selamat! Kamu adalah pemenang mingguan Top Inviter. Buruan ambil hadiahmu sekarang! Klik disini untuk ambil hadiah pemenang Top Inviter.",
      created_at: "2022-12-15 20:16:00",
      image: null,
      direct: () => undefined,
    },
    {
      title: "Event! Baca 5 buku dapat 100 Berlian? Gak salah?",
      content:
        "Hello dreamers, mau baca buku gratis dan dapat 100 Berlian? Yuk ikuti event Dreamers Valentine 2022",
      created_at: "2022-12-13 11:16:00",
      image: images.notification,
      direct: () => undefined,
    },
    {
      title: "Masa Baca Novel Telah Berakhir",
      content:
        "Yah masa baca Novel The Last Summer telah berakhir! Yuk beli lagi novelnya, jangan sampai ketinggalan cerita selanjutnya!",
      created_at: "2022-12-10 11:16:00",
      image: null,
      direct: () => undefined,
    },
  ];
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <Header title="Notifikasi" titleOn="left" withBackIcon />
      <View style={{ flex: 1, paddingHorizontal: 16 }}>
        <VerticalList
          listKey="dataCategories"
          data={dataNotification}
          keyExtractor={item => item.id}
          renderItem={({ item, index }: { item: any; index: any }) => (
            <TouchableOpacity
              key={index}
              style={{
                paddingVertical: 16,
                // paddingHorizontal: 16,
                borderBottomWidth: 1,
                borderBottomColor: colors.neutral300,
              }}
              onPress={item.direct}
            >
              {item.image && (
                <View>
                  <FastImage
                    style={{
                      width: "100%",
                      height: scale(200),
                      borderRadius: 10,
                    }}
                    source={item.image}
                  />
                  <Space height={16} />
                </View>
              )}
              <Text size={14} type="bold" color={colors.neutral500}>
                {item.title}
              </Text>
              <Space height={8} />
              <Text size={14} color={colors.neutral600}>
                {item.content}
              </Text>
              <Space height={8} />
              <Text
                size={12}
                color={colors.neutral400}
                style={{ textAlign: "right" }}
              >
                {DateDifference(
                  moment(Date.now()).diff(item.created_at, "second"),
                )}
              </Text>
            </TouchableOpacity>
          )}
          isShowVerticalIndicator={false}
        />
      </View>

      {/* </View> */}
    </SafeAreaView>
  );
};

export default NotificationScreen;
