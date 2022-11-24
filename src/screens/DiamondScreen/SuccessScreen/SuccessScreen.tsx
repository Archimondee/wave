import { DiamondList, Space, Text, VerticalList } from "components";
import color from "configs/colors";
import React from "react";
import { View, StyleSheet } from "react-native";
import { scaledHorizontal, scaledVertical } from "utils/ScaledService";

const SuccessScreen = () => {
  const dataTest = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
  ];
  return (
    <View style={styles.container}>
      <View
        style={{
          paddingVertical: scaledVertical(20),
          paddingHorizontal: scaledHorizontal(20),
        }}
      >
        <Text
          color={color.neutral400}
          size={14}
          type={"bold"}
          style={{ paddingVertical: scaledVertical(20) }}
        >
          Januari
        </Text>
        <Space height={10} />
        <VerticalList
          scrollEnabled={false}
          data={dataTest}
          listKey={"grid-vertical"}
          keyExtractor={item => item?.id}
          renderItem={({ item, index }: { item: any; index: number }) => {
            window.console.log("data", item, index);
            return <DiamondList index={index} />;
          }}
          isShowVerticalIndicator={false}
        />
      </View>

      {/* <View style={{ alignItems: "center", marginTop: scaledVertical(80) }}>
        <Image
          source={images.walletEmpty}
          style={{ height: 280, width: 280 }}
        />
        <Text size={14} color={color.neutral400}>
          Belum ada riwayat transaksi
        </Text>
      </View> */}
    </View>
  );
};

export default SuccessScreen;

const styles = StyleSheet.create({
  container: { flex: 1 },
});
