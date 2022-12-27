import {
  Button,
  Header,
  Space,
  Text,
  VerticalBook,
  VerticalList,
} from "components";
import colors from "configs/colors";
import fonts from "configs/fonts";
import icons from "configs/icons";
import images from "configs/images";
import React, { useState } from "react";
import {
  View,
  ScrollView,
  TouchableOpacity,
  Text as TextBio,
} from "react-native";
import FastImage from "react-native-fast-image";
import type { NovelType } from "types/NovelTypes";
import { kFormatter } from "utils/Formatter";
import globalStyles from "utils/GlobalStyles";
import { scale } from "utils/Responsive";

import { dataContents } from "../../assets/fake/contents";

const author = {
  name: "M.R Anggara",
  image: images.authorProfilePict,
  // eslint-disable-next-line max-len
  bio:
    "Seorang desainer freelance yang hobi menulis. Saya banyak menulis tentang puisi, cerita romantis dan cerita yang terinspirasi dari pengalaman pribadi yang dipermanis",
};
const followedBy = [
  { id: 1, name: "Kevin.anggara", images: images.followedBy1 },
  { id: 2, name: "Gilang.react", images: images.followedBy2 },
  { id: 3, name: "Ananta.react", images: images.followedBy3 },
  { id: 3, name: "Dimas.bagus", images: images.witch },
];

const AuthorProfileScreen = () => {
  const [all, setAll] = useState(false);
  const [showAll, setShowAll] = useState(false);

  return (
    <ScrollView
      style={{ backgroundColor: colors.neutral100 }}
      showsVerticalScrollIndicator={false}
    >
      <View
        style={[
          globalStyles().topSafeArea,
          { backgroundColor: colors.primary500 },
        ]}
      />
      <Header
        title="Profil Penulis"
        titleOn="left"
        withBackIcon
        color={colors.primary500}
      />
      <View
        style={{
          backgroundColor: colors.neutral100,
          paddingHorizontal: scale(28),
          paddingVertical: scale(16),
        }}
      >
        <FastImage
          source={author.image}
          style={{
            height: scale(120),
            width: scale(120),
            borderRadius: 50,
            alignSelf: "center",
          }}
        />
        <Space height={12} />
        <Text type="bold" style={{ alignSelf: "center" }}>
          {author.name}
        </Text>
        <Space height={12} />
        <View
          style={{
            alignItems: "center",
          }}
        >
          <TextBio
            numberOfLines={all ? 0 : 3}
            style={{
              fontFamily: fonts.inter,
              fontSize: 14,
              marginTop: 10,
              letterSpacing: 0.5,
              lineHeight: 22,
              textAlign: "center",
            }}
            onTextLayout={e =>
              e.nativeEvent.lines.length > 2
                ? setShowAll(true)
                : setShowAll(false)
            }
          >
            {author.bio}
          </TextBio>
          {showAll && (
            <TouchableOpacity onPress={() => setAll(!all)}>
              <Text
                style={{ marginVertical: 10 }}
                type={"bold"}
                color={colors.primary500}
                size={14}
              >
                {all ? "Ringkasan Bio" : "Selengkapnya"}
              </Text>
            </TouchableOpacity>
          )}
        </View>

        <Space height={12} />
        <View style={{ marginHorizontal: 100 }}>
          <Button
            iconStyle={{ width: 18, height: 18 }}
            icon={icons.plus}
            title="Ikuti"
          />
        </View>
        <Space height={12} />
        <TouchableOpacity style={{ flexDirection: "row" }}>
          <View style={{ flexDirection: "row" }}>
            {followedBy.slice(0, 3).map((item, index) => (
              <FastImage
                key={index}
                source={item.images}
                style={{
                  zIndex: 3,
                  width: scale(32),
                  height: scale(32),
                  borderRadius: 50,
                  right: item.id === 1 ? 0 : 3 * item.id,
                }}
              />
            ))}
          </View>
          <View
            style={{
              flexDirection: "row",
              maxWidth: "100%",
              alignItems: "center",
            }}
          >
            <Text size={12}>{"Diikuti oleh "}</Text>
            <Text size={12} type="bold">
              {followedBy[0]?.name}
            </Text>
            <Text size={12}>{" dan "}</Text>
            <Text size={12} type="bold">
              {followedBy.slice(3).length === 0
                ? " "
                : followedBy.slice(3).length + " lainnya"}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
          zIndex: 2,
          borderTopStartRadius: 30,
          borderTopEndRadius: 30,
          backgroundColor: colors.neutral50,
          paddingHorizontal: scale(19),
          paddingVertical: scale(20),
        }}
      >
        <View
          style={{
            flexDirection: "row",
            borderRadius: 10,
            paddingHorizontal: scale(16),
            paddingVertical: scale(12),
            backgroundColor: colors.secondary500,
          }}
        >
          <TouchableOpacity style={{ alignItems: "center", flex: 0.5 }}>
            <Text type="bold" color={colors.neutral50}>
              {kFormatter(24200)}
            </Text>
            <Space height={6} />
            <Text color={colors.neutral50}>Pengikut</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ alignItems: "center", flex: 0.5 }}>
            <Text type="bold" color={colors.neutral50}>
              {kFormatter(24)}
            </Text>
            <Space height={6} />
            <Text color={colors.neutral50}>Cerita</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ alignItems: "center", flex: 0.5 }}>
            <Text type="bold" color={colors.neutral50}>
              {kFormatter(1)}
            </Text>
            <Space height={6} />
            <Text color={colors.neutral50}>Diikuti</Text>
          </TouchableOpacity>
        </View>
        <Space height={30} />
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
    </ScrollView>
  );
};

export default AuthorProfileScreen;
