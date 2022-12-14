import { Text } from "components";
import colors from "configs/colors";
import icons from "configs/icons";
import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import FastImage from "react-native-fast-image";
// import { useDispatch } from "react-redux";
import { scaledHorizontal, scaledVertical } from "utils/ScaledService";

// import {
//   removeRecentSearch,
//   removeStringRecentSearch,
// } from "../../store/persist/actions";

interface LastSearchComponentProps {
  item: any;
  index: number;
  onClickSearch: (args1: string) => void;
}

const LastSearchComponent = ({
  item,
  index,
  onClickSearch,
}: LastSearchComponentProps) => {
  // const dispatch: any = useDispatch();
  const removeAllData = () => {
    // dispatch(removeRecentSearch());
  };
  const removeString = (text: string) => {
    window.console.log(text);
    // dispatch(removeStringRecentSearch(text));
  };
  return (
    <View style={styles.container} key={index}>
      {index === 0 ? (
        <View style={styles.containerTop}>
          <Text color={colors.neutral500} size={14} type={"bold"}>
            Terakhir Dicari
          </Text>

          <TouchableOpacity onPress={removeAllData}>
            <Text color={colors.danger500} size={12} type={"bold"}>
              Hapus Semua
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <></>
      )}

      <View style={styles.containerBottom} key={index}>
        <TouchableOpacity
          onPress={() => onClickSearch(item.data)}
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <FastImage
            source={icons.time}
            style={{ height: 16, width: 16, marginRight: scaledHorizontal(10) }}
            resizeMode="contain"
          />
          <Text color={colors.neutral400} size={14}>
            {item.data}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => removeString(item.data)}>
          <FastImage
            source={icons.xmark}
            style={{ height: 16, width: 16, marginTop: scaledVertical(5) }}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LastSearchComponent;

const styles = StyleSheet.create({
  container: {
    marginTop: scaledVertical(35),
  },
  containerTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: scaledHorizontal(20),
    paddingBottom: scaledVertical(20),
  },
  containerBottom: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: scaledHorizontal(20),
    paddingTop: scaledVertical(10),
  },
});
