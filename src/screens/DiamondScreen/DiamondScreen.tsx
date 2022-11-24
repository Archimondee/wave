import { DiamondCard, Header, Space, TabList } from "components";
import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import globalStyles from "utils/GlobalStyles";
import { scaledHorizontal } from "utils/ScaledService";

import GiftScreen from "./GiftScreen/GiftScreen";
import SuccessScreen from "./SuccessScreen/SuccessScreen";
import WaitingScreen from "./WaitingScreen/WaitingScreen";

const DiamondScreen = () => {
  const tabList = [
    { id: 1, title: "Menunggu" },
    { id: 2, title: "Berhasil" },
    { id: 3, title: "Hadiah" },
  ];

  const [selectedTab, setSelectedTab] = useState(0);

  const renderScreen = () => {
    switch (selectedTab) {
      case 0:
        return <WaitingScreen />;
      case 1:
        return <SuccessScreen />;
      case 2:
        return <GiftScreen />;
      default:
        return <WaitingScreen />;
    }
  };
  return (
    <View style={globalStyles().container}>
      <Header title="Berlian & Riwayat Transaksi" titleOn="left" />

      <ScrollView
        style={{ flex: 1, marginTop: scaledHorizontal(20) }}
        showsVerticalScrollIndicator={false}
      >
        <DiamondCard onPress={() => window.console.log("To topup")} />
        <Space height={20} />
        <TabList
          item={tabList}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />

        {renderScreen()}
      </ScrollView>
    </View>
  );
};

export default DiamondScreen;
