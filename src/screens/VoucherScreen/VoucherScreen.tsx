import { Header, Space, VerticalList, VoucherList } from "components";

import React from "react";
import { View } from "react-native";
import globalStyles from "utils/GlobalStyles";
import { scaledHorizontal } from "utils/ScaledService";

const VoucherScreen = () => {
  const dataVoucher = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];

  return (
    <View style={globalStyles().topSafeArea}>
      <Header title="Voucher Kamu" titleOn="left" withBackIcon />

      <Space height={20} />

      <VerticalList
        //key={indexDate}
        scrollEnabled={false}
        data={dataVoucher}
        listKey={"grid-vertical"}
        keyExtractor={item => item?.id}
        renderItem={({ item, index }: { item: any; index: number }) => {
          window.console.log("data", item);
          return <VoucherList index={index} />;
        }}
        isShowVerticalIndicator={false}
      />

      <View style={{ marginHorizontal: scaledHorizontal(20) }}></View>
    </View>
  );
};

export default VoucherScreen;
