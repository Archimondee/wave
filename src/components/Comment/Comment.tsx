import { Text, Line, StarRating } from "components";
import colors from "configs/colors";
import icons from "configs/icons";
import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import FastImage from "react-native-fast-image";
import type { CommentType } from "types/CommentTypes";

interface CommentProps {
  item: CommentType;
  onDelete?: (args1: number) => void;
  onReport?: (comment_id: number, user_id: number) => void;
}

const Comment = ({ item, onDelete, onReport }: CommentProps) => {
  return (
    <View key={item.id} style={{ flexDirection: "row" }}>
      <View style={styles.container}>
        <View style={{ flexDirection: "row" }}>
          <FastImage
            source={
              item?.user?.photo_profile ? item?.user?.photo_profile : icons.user
            }
            style={styles.image}
            resizeMode={"contain"}
          />
          <View style={styles.text}>
            <Text size={12} color={colors.neutral500}>
              {item?.user?.fullname}
            </Text>
            <StarRating rating={item.comment_rating} />
          </View>
        </View>

        <Text size={12} style={{ marginTop: 5 }} numberOfLines={3}>
          {item?.comment_content}
        </Text>
        {/* <TouchableOpacity
          style={{ alignSelf: "flex-end", marginTop: 10 }}
          onPress={() => setShowReport(true)}
        >
          <Text size={12} color={colors.danger500} type="bold">
            Laporkan
          </Text>
        </TouchableOpacity> */}
        <Line
          marginHorizontal={0}
          marginVertical={20}
          style={{ width: "110%" }}
        />
      </View>
      {item?.is_owned ? (
        <TouchableOpacity
          style={{ marginTop: 20, marginRight: 10 }}
          onPress={() => onDelete && onDelete(item.id)}
        >
          <FastImage
            // source={icons.trash}
            style={{ height: 18, width: 18 }}
            resizeMode={"contain"}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={{ marginTop: 20, marginRight: 10 }}
          onPress={() => onReport && onReport(item?.id, item?.user?.id)}
        >
          <FastImage
            // source={icons.ellipsis}
            style={{ height: 18, width: 18 }}
            tintColor={"black"}
            resizeMode={"contain"}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Comment;

const styles = StyleSheet.create({
  container: { flex: 1 },
  image: { height: 50, width: 50, borderRadius: 50 / 2 },
  text: { paddingLeft: 15, justifyContent: "center" },
});
