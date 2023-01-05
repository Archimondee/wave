/* eslint-disable no-nested-ternary, react-hooks/exhaustive-deps */

import colors from "configs/colors";
import icons from "configs/icons";
import moment from "moment";
import React, { memo, useEffect, useState } from "react";
import { View, TouchableOpacity } from "react-native";
import FastImage from "react-native-fast-image";
import type { NovelType } from "types/NovelTypes";
import NavigationService from "utils/NavigationService";
import { isTablet, scale } from "utils/Responsive";
import { scaledHorizontal, scaledVertical } from "utils/ScaledService";
import { wait } from "utils/Utils";

import Line from "../Line/Line";
import Text from "../Text/Text";

import styles from "./styles";

interface VerticalBookProps {
  item: NovelType;

  type: "category" | "rating" | "progress";
  novelType?: "claim" | "incoming";
  category?: string;
  chapter_read?: number;
  freebiesId?: number;
  updated_at?: string;
  typeCollection?: "list" | "read";
  fromCollection?: boolean;
  collectionAnalytic?: string;
  novel_title?: string;
  size?: "big" | "small";
}

const VerticalBook = ({
  item,
  type,
  chapter_read = 1,
  // novelType = "incoming",
  // freebiesId = 0,
  updated_at,
  typeCollection,
  size,
}: // fromCollection,
// collectionAnalytic,
// novel_title,
VerticalBookProps) => {
  const calculation = 100 * (chapter_read / item?.chapters?.length);
  const [typeDate, setTypeDate] = useState("");
  const [countDate, setCountdate] = useState(0);

  const style = `${calculation}%`;

  const calculateDate = () => {
    const dateNow = Date.now();
    const cal = moment(updated_at).diff(moment(dateNow), "days");

    if (cal >= 30) {
      setTypeDate("New");
    } else if (cal <= 0) {
      setTypeDate("Expired");
    } else {
      setTypeDate("Count");
      setCountdate(cal);
    }
  };

  useEffect(() => {
    calculateDate();
  }, []);
  return (
    <TouchableOpacity
      key={item?.title}
      onPress={() => {
        wait(100)
          .then(() => {
            // if (fromCollection) {
            //   logEvent(collectionAnalytic ?? "", { novel: novel_title });
            // }
          })
          .finally(() => {
            // NavigationService.navigate("NovelScreen", {
            //   id: item?.id,
            //   type: novelType,
            //   freebies_id: freebiesId,
            //   updated_at: updated_at,
            // });
            NavigationService.push("NovelScreen");
          });
      }}
    >
      <View style={styles.container}>
        {size === "small" ? (
          <FastImage
            source={{ uri: item?.cover_path }}
            style={[
              styles.image,
              {
                height: isTablet()
                  ? type === "progress"
                    ? scale(110)
                    : scale(100)
                  : scale(120),
                width: isTablet()
                  ? type === "progress"
                    ? scale(75)
                    : scale(70)
                  : scaledHorizontal(95),
              },
            ]}
            resizeMode={"cover"}
          />
        ) : (
          <FastImage
            source={{ uri: item?.cover_path }}
            style={[
              styles.image,
              {
                height: isTablet()
                  ? type === "progress"
                    ? scale(110)
                    : scale(100)
                  : scale(150),
                width: isTablet()
                  ? type === "progress"
                    ? scale(75)
                    : scale(70)
                  : scaledHorizontal(130),
              },
            ]}
            resizeMode={"cover"}
          />
        )}

        <View style={styles.containerContent}>
          {type === "progress" ? (
            <View style={{}}>
              <TouchableOpacity
              // onPress={() =>
              //   NavigationService.navigate("NovelScreen", {
              //     id: item.id,
              //     type: novelType,
              //   })
              // }
              >
                <Text numberOfLines={3} size={14} type={"bold"}>
                  {item?.title}
                </Text>
              </TouchableOpacity>

              <Text
                style={[styles.description, { marginTop: 20 }]}
                numberOfLines={1}
                size={12}
              >
                {item?.author?.username ?? "-"}
              </Text>
            </View>
          ) : (
            <View style={{}}>
              <TouchableOpacity
              // onPress={() =>
              //   NavigationService.navigate("NovelScreen", {
              //     id: item.id,
              //     type: novelType,
              //   })
              // }
              >
                <Text numberOfLines={3} size={14} type={"bold"}>
                  {item?.title}
                </Text>
              </TouchableOpacity>
              {size !== "small" ? (
                <Text style={styles.description} numberOfLines={3} size={12}>
                  {item?.sinopsis}
                </Text>
              ) : null}
            </View>
          )}

          <View
            style={[
              styles.containerCategory,
              { alignItems: type === "rating" ? "flex-start" : "flex-end" },
            ]}
          >
            {type === "rating" ? (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",

                  flex: 1,
                }}
              >
                <View style={{ flexDirection: "row" }}>
                  <FastImage
                    source={icons.star}
                    style={{ height: 18, width: 18 }}
                    resizeMode={"contain"}
                  />
                  <Text
                    size={15}
                    color={colors.neutral500}
                    type={"bold"}
                    style={{
                      paddingLeft: scaledHorizontal(5),
                      paddingTop: scaledVertical(3),
                    }}
                    textAlign="center"
                  >
                    {item.rating}
                  </Text>
                </View>
                {typeCollection !== "list" && updated_at ? (
                  typeDate === "New" ? (
                    <View
                      style={[
                        styles.textFlagging,
                        { backgroundColor: colors.info100 },
                      ]}
                    >
                      <Text size={12} color={colors.info600}>
                        Baru
                      </Text>
                    </View>
                  ) : typeDate === "Expired" ? (
                    <View
                      style={[
                        styles.textFlagging,
                        { backgroundColor: colors.danger100 },
                      ]}
                    >
                      <Text size={12} color={colors.danger600}>
                        Masa Baca Telah Berakhir
                      </Text>
                    </View>
                  ) : typeDate === "Count" ? (
                    <View
                      style={[
                        styles.textFlagging,
                        { backgroundColor: colors.danger100 },
                      ]}
                    >
                      <Text size={12} color={colors.danger600}>
                        Berakhir {countDate} hari
                      </Text>
                    </View>
                  ) : null
                ) : null}
              </View>
            ) : type === "category" ? (
              <View style={[styles.category]}>
                <Text size={10} color={colors.neutral500} style={{}}>
                  {/* {item?.categories[0]?.category_name} */} Kategori
                </Text>
              </View>
            ) : type === "progress" ? (
              <View style={{ flex: 1 }}>
                {/* <View style={styles.containerGray} /> */}
                <View
                  style={[
                    styles.containerYellow,
                    {
                      width: style,
                      backgroundColor:
                        typeDate === "Expired"
                          ? colors.neutral300
                          : colors.primary500,
                    },
                  ]}
                />
                {/* <View style={styles.containerText}>
                  <Text size={12} color={colors.neutral400}>
                    {chapter_read}/{item?.chapters?.length}
                  </Text>
                </View> */}
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "flex-end",
                  }}
                >
                  {typeCollection === "read" && updated_at !== null ? (
                    typeDate === "New" ? (
                      <View
                        style={[
                          styles.textFlagging,
                          { backgroundColor: colors.info100, marginTop: 10 },
                        ]}
                      >
                        <Text size={12} color={colors.info600}>
                          Baru
                        </Text>
                      </View>
                    ) : typeDate === "Expired" ? (
                      <View
                        style={[
                          styles.textFlagging,
                          { backgroundColor: colors.danger100, marginTop: 10 },
                        ]}
                      >
                        <Text size={12} color={colors.danger600}>
                          Masa Baca Telah Berakhir
                        </Text>
                      </View>
                    ) : typeDate === "Count" ? (
                      <View
                        style={[
                          styles.textFlagging,
                          { backgroundColor: colors.danger100, marginTop: 10 },
                        ]}
                      >
                        <Text size={12} color={colors.danger600}>
                          Berakhir {countDate} hari
                        </Text>
                      </View>
                    ) : null
                  ) : null}
                </View>
              </View>
            ) : null}
          </View>
        </View>
      </View>
      <Line marginHorizontal={20} marginVertical={15} />
    </TouchableOpacity>
  );
};

export default memo(VerticalBook);
