import { DiamondWaitingCard, Space, Text, VerticalList } from "components";
import color from "configs/colors";
import icons from "configs/icons";
import images from "configs/images";
import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { scaledHorizontal, scaledVertical } from "utils/ScaledService";

const WaitingScreen = () => {
  const dataTest = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
  ];
  return (
    <View>
      {/* <View
        style={{
          alignItems: "center",
          flex: 1,
        }}
      >
        <Image
          source={images.walletEmpty}
          style={{ height: 280, width: 280 }}
        />
        <Text size={14} color={color.neutral400}>
          Belum ada riwayat transaksi
        </Text>
      </View> */}

      <VerticalList
        scrollEnabled={false}
        data={dataTest}
        listKey={"grid-vertical"}
        keyExtractor={item => item?.id}
        renderItem={({ item, index }: { item: any; index: number }) => {
          window.console.log("data", item, index);
          return <DiamondWaitingCard index={index} />;
        }}
        isShowVerticalIndicator={false}
        contentContainerStyle={{ paddingTop: scaledVertical(40) }}
      />
    </View>
  );
};

export default WaitingScreen;
