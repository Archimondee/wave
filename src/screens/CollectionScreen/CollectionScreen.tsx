import { Header, SideBarText, VerticalList } from "components";
import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import globalStyles from "utils/GlobalStyles";
import { scaledHorizontal, scaledVertical } from "utils/ScaledService";

import BuyScreen from "./BuyScreen/BuyScreen";
import CommentScreen from "./CommentScreen/CommentScreen";
import ListScreen from "./ListScreen/ListScreen";
import ReadScreen from "./ReadScreen/ReadScreen";

const CollectionScreen = () => {
  const dataSideBar = [
    { id: 1, title: "Dibeli" },
    { id: 2, title: "Lanjut Baca" },
    { id: 3, title: "Disimpan" },
    { id: 4, title: "Komentar" },
    { id: 5, title: "" },
  ];
  const [selectedCategory, setSelectedCategory] = useState(1);

  const renderContent = () => {
    switch (selectedCategory) {
      case 0:
        return (
          <>
            <BuyScreen />
          </>
        );
      case 1:
        return (
          <>
            <ReadScreen />
          </>
        );
      case 2:
        return (
          <>
            <ListScreen />
          </>
        );
      case 3:
        return (
          <>
            <CommentScreen />
          </>
        );

      default:
        return <></>;
    }
  };

  return (
    <View style={globalStyles().topSafeArea}>
      <Header withSearchBar placeholder="Cari di koleksi" />
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          paddingRight: scaledHorizontal(20),
          marginTop: scaledVertical(40),
          paddingLeft: scaledHorizontal(20),
        }}
      >
        <View
          style={{
            width: "32%",
            borderRadius: 10,
          }}
        >
          <VerticalList
            //key={indexDate}
            scrollEnabled={false}
            data={dataSideBar}
            listKey={"grid-vertical"}
            keyExtractor={item => item?.id}
            renderItem={({ item, index }: { item: any; index: number }) => {
              return (
                <SideBarText
                  title={item.title}
                  index={index}
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                />
              );
            }}
            isShowVerticalIndicator={false}
          />
        </View>

        <ScrollView
          style={{
            marginLeft: scaledHorizontal(10),
            width: "68%",
          }}
          showsVerticalScrollIndicator={false}
        >
          {renderContent()}
        </ScrollView>
      </View>
    </View>
  );
};

export default CollectionScreen;
