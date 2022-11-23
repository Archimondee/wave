import React from "react";
import type { ViewStyle } from "react-native";
import { FlatList } from "react-native-gesture-handler";

interface ListProps {
  data: any;
  renderItem: any;
  numColumns?: number;
  keyExtractor?: (item: any) => string;
  isShowVerticalIndicator?: boolean;
  isShowHorizontalIndicator?: boolean;
  children?: any;
  listKey?: string;
  contentContainerStyle?: ViewStyle;
  onEndReached?: any;
  onScroll?: () => void;
  headerComponent?: any;
  footerComponent?: any;
  ref?: any;
  listEmptyComponent?: any;
  onEndReachedThreshold?: any;
  innerRef?: any;
  scrollEnabled?: boolean;
}

export const VerticalList = (props: ListProps) => {
  const {
    data,
    renderItem,
    numColumns,
    keyExtractor,
    isShowVerticalIndicator,
    listKey,
    contentContainerStyle,
    onEndReached,
    onScroll,
    headerComponent,
    footerComponent,
    ref,
    listEmptyComponent,
    onEndReachedThreshold,
    scrollEnabled,
  } = props;
  return (
    <FlatList
      onScroll={onScroll}
      listKey={listKey}
      scrollEnabled={scrollEnabled}
      ref={ref}
      nestedScrollEnabled={true}
      initialNumToRender={10}
      showsVerticalScrollIndicator={isShowVerticalIndicator || false}
      horizontal={false}
      data={data}
      renderItem={renderItem}
      numColumns={numColumns}
      keyExtractor={keyExtractor}
      contentContainerStyle={contentContainerStyle}
      onEndReached={onEndReached}
      ListHeaderComponent={headerComponent}
      ListFooterComponent={footerComponent}
      ListEmptyComponent={listEmptyComponent}
      onEndReachedThreshold={onEndReachedThreshold}
    />
  );
};

export const HorizontalList = (props: ListProps) => {
  const {
    data,
    renderItem,
    numColumns,
    keyExtractor,
    isShowHorizontalIndicator,
    listKey,
    contentContainerStyle,

    innerRef,
  } = props;
  return (
    <FlatList
      ref={innerRef}
      listKey={listKey}
      nestedScrollEnabled={true}
      showsHorizontalScrollIndicator={isShowHorizontalIndicator || false}
      horizontal={true}
      data={data}
      renderItem={renderItem}
      numColumns={numColumns}
      keyExtractor={keyExtractor}
      contentContainerStyle={contentContainerStyle}
    />
  );
};

export const VirtualizedView = (props: any) => {
  return (
    <FlatList
      removeClippedSubviews={true}
      data={[]}
      ListEmptyComponent={null}
      keyExtractor={() => "dummy"}
      renderItem={null}
      ListHeaderComponent={() => (
        <React.Fragment>{props.children}</React.Fragment>
      )}
    />
  );
};
