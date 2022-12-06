import {
  Button,
  CarouselInfinite,
  Header,
  ListPrizeDay,
  Space,
  Text,
  Title,
} from "components";
import images from "configs/images";
import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Image,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import Modal from "react-native-modal";
import globalStyles from "utils/GlobalStyles";
import NavigationService from "utils/NavigationService";
import { scaledHorizontal, scaledVertical } from "utils/ScaledService";

import styles from "./HomeScreenStyles";

const HomeScreen = () => {
  const [showPrize, setShowPrize] = useState(false);
  const { width } = useWindowDimensions();

  const day = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
  ];

  const novel = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { id: 10 },
  ];

  const restructureArray = () => {
    let totalList = 3;
    let totalData = 6;
    let newArray = [];
    let i = 0;
    for (i = 0; i < totalList; i++) {
      if (
        novel.slice(
          i === 0 ? 0 : totalData * i,
          i === 0 ? 6 : totalData * (i + 1),
        ).length > 0
      ) {
        newArray.push(
          novel.slice(
            i === 0 ? 0 : totalData * i,
            i === 0 ? 6 : totalData * (i + 1),
          ),
        );
      }
    }

    return newArray;
  };

  return (
    <View style={globalStyles().topSafeArea}>
      <Header
        withGiftIcon
        withNotificationIcon
        withSearchBar
        isNavigateSearchScreen
        placeholder="Cari judul novel"
        onPressGiftIcon={() => setShowPrize(true)}
      />
      <ScrollView style={{ flex: 1, paddingHorizontal: scaledHorizontal(20) }}>
        <TouchableOpacity
          onPress={() => NavigationService.navigate("NovelScreen")}
        >
          <Text>Go to detail</Text>
        </TouchableOpacity>
        <Space height={20} />
        <Title title="Chapter Baru Setiap Hari" />
        <Space height={20} />
        <CarouselInfinite dataCarousel={restructureArray()} />
      </ScrollView>

      <Modal
        animationIn="slideInUp"
        animationOut="slideOutDown"
        isVisible={showPrize}
        onDismiss={() => setShowPrize(false)}
        onBackdropPress={() => setShowPrize(false)}
        onBackButtonPress={() => setShowPrize(false)}
        useNativeDriver={false}
        useNativeDriverForBackdrop={false}
        //backdropColor={"transparent"}
        style={styles.containerModal}
      >
        <View style={styles.container}>
          <Image
            source={images.badge}
            style={[styles.imageBig, { width: width }]}
          />
          <Space height={70} />
          <View style={styles.containerFlex}>
            {day.map((item, index) => {
              window.console.log("data", item);
              return <ListPrizeDay index={index} key={index} />;
            })}
          </View>
          <Space height={20} />
          <Button
            title="Ambil"
            style={{ paddingVertical: scaledVertical(25) }}
          />

          {/* <TouchableOpacity
            onPress={() => setShowPrize(false)}
            style={styles.containerClose}
          >
            <Image
              source={icons.xcircleBlack}
              style={{ height: 40, width: 40 }}
              resizeMode={"contain"}
            />
          </TouchableOpacity> */}
        </View>
      </Modal>
    </View>
  );
};

export default HomeScreen;
