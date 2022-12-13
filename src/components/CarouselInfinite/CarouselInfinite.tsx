import color from "configs/colors";
import React from "react";
import { View, FlatList, Animated, useWindowDimensions } from "react-native";
import type { HighlightType } from "types/NovelTypes";
import { scaledHorizontal, widthPercentage } from "utils/ScaledService";

import { VerticalList } from "../List/List";
import NovelGrid from "../NovelGrid/NovelGrid";

interface CarouselInfiniteProps {
  dataCarousel: any;
}

const CarouselInfinite = ({ dataCarousel }: CarouselInfiniteProps) => {
  const { width } = useWindowDimensions();
  const scrollX = new Animated.Value(0);
  const position = Animated.divide(scrollX, width);
  return (
    <View
      style={{
        marginBottom: -15,
        marginLeft: scaledHorizontal(-22),
        paddingHorizontal: scaledHorizontal(20),
      }}
    >
      <FlatList
        data={dataCarousel}
        //ref={flatList}
        keyExtractor={(item, index) => `key${index}-${item}`}
        horizontal
        pagingEnabled
        scrollEnabled
        listKey="dataCarousel"
        snapToAlignment="center"
        scrollEventThrottle={16}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }: { item: any; index: number }) => {
          return (
            <View
              style={{
                width: widthPercentage(100) - 20,
                flex: 1,
                paddingLeft: scaledHorizontal(20),
              }}
              key={index}
            >
              <VerticalList
                key={"_"}
                data={item}
                listKey={"grid-big"}
                numColumns={2}
                keyExtractor={item => item?.id}
                renderItem={({
                  item,
                  index,
                }: {
                  item: HighlightType;
                  index: number;
                }) => {
                  return <NovelGrid index={index} item={item.novel} />;
                }}
                isShowVerticalIndicator={false}
                scrollEnabled={false}
              />
            </View>
          );
        }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false },
        )}
      />
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        {dataCarousel.map((_: any, i: number) => {
          const opacity = position.interpolate({
            inputRange: [i - 1, i, i + 1],
            outputRange: [0.3, 1, 0.3],
            extrapolate: "clamp",
          });

          return (
            <Animated.View
              key={i}
              style={{
                opacity,
                height: 10,
                width: 10,
                backgroundColor: color.primary500,
                margin: 8,
                borderRadius: 5,
              }}
            />
          );
        })}
      </View>
    </View>
  );
};

export default CarouselInfinite;
