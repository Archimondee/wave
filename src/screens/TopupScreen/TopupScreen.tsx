import { Header, Space, Text, TopupList, VerticalList } from "components";
import color from "configs/colors";
import images from "configs/images";
import React from "react";
import { View, Image, ScrollView } from "react-native";
import globalStyles from "utils/GlobalStyles";
import NavigationService from "utils/NavigationService";
import { scaledHorizontal, scaledVertical } from "utils/ScaledService";

const TopupScreen = () => {
  const dataTest = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
  ];
  return (
    <View style={globalStyles().topSafeArea}>
      <Header title="Top Up Berlian" titleOn="left" withBackIcon />

      <ScrollView
        style={{ flex: 1, marginTop: scaledVertical(20) }}
        showsVerticalScrollIndicator={false}
      >
        <Space height={20} />
        <View
          style={{
            backgroundColor: color.neutral50,
            flexDirection: "row",
            marginHorizontal: scaledHorizontal(20),

            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,

            elevation: 3,
            paddingVertical: scaledHorizontal(10),
            borderRadius: 10,
          }}
        >
          <Image
            source={images.diamondGrey}
            style={{
              height: 53,
              width: 53,
              marginLeft: scaledHorizontal(-7),
            }}
            resizeMode={"contain"}
            //resizeMode={"contain"}
          />

          <View
            style={{
              flexDirection: "row",
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              textAlign="center"
              size={24}
              color={color.neutral500}
              type={"bold"}
            >
              14
            </Text>
            <Text size={14} color={color.neutral400} style={{ marginLeft: 5 }}>
              {" "}
              Berlian
            </Text>
          </View>
        </View>
        <Space height={20} />
        <VerticalList
          scrollEnabled={false}
          data={dataTest}
          listKey={"grid-vertical"}
          keyExtractor={item => item?.id}
          renderItem={({ item, index }: { item: any; index: number }) => {
            window.console.log("data", item, index);
            return (
              <TopupList
                index={index}
                onPress={() =>
                  NavigationService.navigate("PaymentConfirmScreen")
                }
              />
            );
          }}
          isShowVerticalIndicator={false}
          contentContainerStyle={{ paddingTop: scaledVertical(40) }}
        />
        <Space height={50} />
      </ScrollView>
    </View>
  );
};

export default TopupScreen;
