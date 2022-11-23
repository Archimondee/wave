import { DiamondCard, Header, Space, TabList } from "components";
import React, { useState } from "react";
import { View } from "react-native";
import globalStyles from "utils/GlobalStyles";

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
    <View style={globalStyles().topSafeArea}>
      <Header title="Berlian & Riwayat Transaksi" titleOn="left" />
      <Space height={20} />

      <DiamondCard onPress={() => window.console.log("To topup")} />
      <Space height={20} />
      <TabList
        item={tabList}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />

      {renderScreen()}
    </View>
  );
};

export default DiamondScreen;
