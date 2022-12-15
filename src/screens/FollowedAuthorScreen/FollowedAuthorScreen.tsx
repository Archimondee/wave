import * as React from "react";
import { View, Image, TouchableOpacity, SafeAreaView } from "react-native";
import { Button, Header, Space, Text } from "components";
import color from "configs/colors";
import images from "configs/images";
import icons from "configs/icons";
import { FlatList } from "react-native-gesture-handler";

import styles from "./FollowedAuthorScreenStyles";

const FollowedAuthorScreen = () => {
  const dataAuthor = [
    {
      id: 1,
      followed: true,
      name: "jane cooper",
      picture: images.witch,
    },
    {
      id: 2,
      followed: true,
      name: "Brooklyn Simmons",
      picture: images.witch,
    },
    {
      id: 3,
      followed: false,
      name: "Dianne Russell",
      picture: images.witch,
    },
    {
      id: 4,
      followed: true,
      name: "Cameron Williamson",
      picture: images.witch,
    },
  ];
  const renderItem = ({ item }: any) => {
    return (
      <View>
        <Space height={16} />
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 12,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              style={{ width: 48, height: 48, borderRadius: 50 }}
              source={item.picture}
            />
            <Space width={12} />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Text style={{ textAlign: "center" }} type="bold" size={12}>
                {item.name}
              </Text>
            </View>
          </View>
          {item.followed ? (
            <View style={{ paddingHorizontal: 12, justifyContent: "center" }}>
              <Button
                style={{ width: 97, borderRadius: 15 }}
                iconStyle={{ width: 14, height: 14 }}
                icon={icons.checkCircle}
                type={"light"}
                title={"Diikuti"}
              />
            </View>
          ) : (
            <View style={{ paddingHorizontal: 12, justifyContent: "center" }}>
              <Button
                style={{ width: 97, borderRadius: 15 }}
                type={"dark"}
                title={"Ikuti"}
              />
            </View>
          )}
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        withSearchBar
        withBackIcon
        title="Penulis Yang Diikuti"
        titleOn="left"
        placeholder="Cari Penulis"
      />
      <View style={{ paddingHorizontal: 16, backgroundColor: color.neutral50 }}>
        <Space height={20} />
        <Text type="bold" size={14} color={color.neutral300}>
          Penulis yang diikuti
        </Text>
        <Space height={20} />
        <FlatList
          data={dataAuthor}
          renderItem={renderItem}
          keyExtractor={item => item.name}
        />
      </View>
    </SafeAreaView>
  );
};

export default FollowedAuthorScreen;
