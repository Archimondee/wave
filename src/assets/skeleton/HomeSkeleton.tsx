import React from "react";
import { View } from "react-native";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import { scaledHorizontal, scaledVertical } from "utils/ScaledService";

const fakeData: any = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
];

export const HomeCategoryListSkeleton = () => {
  return (
    <SkeletonPlaceholder>
      <View style={{ flexDirection: "row", marginVertical: 10 }}>
        {fakeData.map((_: any, index: number) => {
          return (
            <View
              key={index}
              style={{
                height: 30,
                width: 100,
                borderRadius: 15,
                marginLeft: 15,
                marginRight:
                  index === fakeData.length - 1 ? scaledHorizontal(20) : 0,
              }}
            />
          );
        })}
      </View>
    </SkeletonPlaceholder>
  );
};

export const HomeBookListVerticalSkeleton = () => {
  return (
    <SkeletonPlaceholder>
      {fakeData.map((_: any, index: number) => {
        return (
          <View
            key={index}
            style={{
              marginHorizontal: 20,
              marginVertical: 20,
              flexDirection: "row",
            }}
          >
            <View
              style={{
                height: scaledVertical(210),
                width: scaledHorizontal(90),
                borderRadius: 10,
              }}
            />
            <View style={{ paddingLeft: 15 }}>
              <View
                style={{
                  height: 25,
                  width: scaledHorizontal(120),
                  borderRadius: 10,
                }}
              />
              <View
                style={{
                  marginTop: 15,
                  height: 10,
                  width: scaledHorizontal(300),
                  borderRadius: 10,
                }}
              />
              <View
                style={{
                  marginTop: 5,
                  height: 10,
                  width: scaledHorizontal(250),
                  borderRadius: 10,
                }}
              />
              <View
                style={{
                  marginTop: 5,
                  height: 10,
                  width: scaledHorizontal(280),
                  borderRadius: 10,
                }}
              />
              <View
                style={{
                  height: 20,
                  width: scaledHorizontal(80),
                  borderRadius: 10,
                  marginTop: 15,
                }}
              />
            </View>
          </View>
        );
      })}
    </SkeletonPlaceholder>
  );
};

interface BookListProps {
  type: "big" | "small";
}

export const HomeBookListSmallSkeleton = ({ type }: BookListProps) => {
  return (
    <SkeletonPlaceholder>
      <View style={{ flexDirection: "row", marginVertical: 10 }}>
        {fakeData.map((_: any, index: number) => {
          return (
            <View
              key={index}
              style={{
                paddingLeft: 15,
                paddingRight:
                  index === fakeData.length - 1 ? scaledHorizontal(20) : 0,
              }}
            >
              <View
                key={index}
                style={{
                  height:
                    type === "big" ? scaledVertical(410) : scaledVertical(310),
                  width:
                    type === "big"
                      ? scaledHorizontal(170)
                      : scaledHorizontal(130),
                  borderRadius: 10,
                }}
              />
              <View
                style={{
                  height: 10,
                  width:
                    type === "big"
                      ? scaledHorizontal(150)
                      : scaledHorizontal(120),
                  marginTop: 5,
                }}
              />
              <View
                style={{
                  height: 10,
                  width:
                    type === "big"
                      ? scaledHorizontal(100)
                      : scaledHorizontal(80),
                  marginTop: 5,
                }}
              />
              <View
                style={{
                  marginTop: 5,
                  borderRadius: 16,
                  height: scaledVertical(40),
                  width: scaledHorizontal(80),
                }}
              />
            </View>
          );
        })}
      </View>
    </SkeletonPlaceholder>
  );
};

export const CarouselBookSkeleton = () => {
  return (
    <SkeletonPlaceholder>
      <View>
        <View style={{ flexDirection: "column" }}>
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                marginVertical: 10,
                marginHorizontal: scaledHorizontal(20),
                flexDirection: "row",
              }}
            >
              <View style={{ height: 100, width: 70, borderRadius: 10 }}></View>
              <View style={{ height: 95 }}>
                <View
                  style={{
                    height: 10,
                    width: 80,
                    marginLeft: 10,
                    marginTop: 5,
                    borderRadius: 10,
                  }}
                ></View>
                <View
                  style={{
                    height: 10,
                    width: 80,
                    marginLeft: 10,
                    marginTop: 5,
                    borderRadius: 10,
                  }}
                ></View>
                <View
                  style={{
                    height: 10,
                    width: 50,
                    marginLeft: 10,
                    marginTop: 5,
                    borderRadius: 10,
                  }}
                ></View>

                <View
                  style={{
                    height: 10,
                    width: 50,
                    marginLeft: 10,

                    borderRadius: 10,
                    marginTop: scaledVertical(80),
                  }}
                ></View>
              </View>
            </View>
            <View
              style={{
                marginVertical: 10,
                marginHorizontal: scaledHorizontal(20),
                flexDirection: "row",
              }}
            >
              <View style={{ height: 100, width: 70, borderRadius: 10 }}></View>
              <View style={{ height: 95 }}>
                <View
                  style={{
                    height: 10,
                    width: 80,
                    marginLeft: 10,
                    marginTop: 5,
                    borderRadius: 10,
                  }}
                ></View>
                <View
                  style={{
                    height: 10,
                    width: 80,
                    marginLeft: 10,
                    marginTop: 5,
                    borderRadius: 10,
                  }}
                ></View>
                <View
                  style={{
                    height: 10,
                    width: 50,
                    marginLeft: 10,
                    marginTop: 5,
                    borderRadius: 10,
                  }}
                ></View>

                <View
                  style={{
                    height: 10,
                    width: 50,
                    marginLeft: 10,

                    borderRadius: 10,
                    marginTop: scaledVertical(80),
                  }}
                ></View>
              </View>
            </View>
          </View>
        </View>
        <View style={{ flexDirection: "column" }}>
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                marginVertical: 10,
                marginHorizontal: scaledHorizontal(20),
                flexDirection: "row",
              }}
            >
              <View style={{ height: 100, width: 70, borderRadius: 10 }}></View>
              <View style={{ height: 95 }}>
                <View
                  style={{
                    height: 10,
                    width: 80,
                    marginLeft: 10,
                    marginTop: 5,
                    borderRadius: 10,
                  }}
                ></View>
                <View
                  style={{
                    height: 10,
                    width: 80,
                    marginLeft: 10,
                    marginTop: 5,
                    borderRadius: 10,
                  }}
                ></View>
                <View
                  style={{
                    height: 10,
                    width: 50,
                    marginLeft: 10,
                    marginTop: 5,
                    borderRadius: 10,
                  }}
                ></View>

                <View
                  style={{
                    height: 10,
                    width: 50,
                    marginLeft: 10,

                    borderRadius: 10,
                    marginTop: scaledVertical(80),
                  }}
                ></View>
              </View>
            </View>
            <View
              style={{
                marginVertical: 10,
                marginHorizontal: scaledHorizontal(20),
                flexDirection: "row",
              }}
            >
              <View style={{ height: 100, width: 70, borderRadius: 10 }}></View>
              <View style={{ height: 95 }}>
                <View
                  style={{
                    height: 10,
                    width: 80,
                    marginLeft: 10,
                    marginTop: 5,
                    borderRadius: 10,
                  }}
                ></View>
                <View
                  style={{
                    height: 10,
                    width: 80,
                    marginLeft: 10,
                    marginTop: 5,
                    borderRadius: 10,
                  }}
                ></View>
                <View
                  style={{
                    height: 10,
                    width: 50,
                    marginLeft: 10,
                    marginTop: 5,
                    borderRadius: 10,
                  }}
                ></View>

                <View
                  style={{
                    height: 10,
                    width: 50,
                    marginLeft: 10,

                    borderRadius: 10,
                    marginTop: scaledVertical(80),
                  }}
                ></View>
              </View>
            </View>
          </View>
        </View>
        <View style={{ flexDirection: "column" }}>
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                marginVertical: 10,
                marginHorizontal: scaledHorizontal(20),
                flexDirection: "row",
              }}
            >
              <View style={{ height: 100, width: 70, borderRadius: 10 }}></View>
              <View style={{ height: 95 }}>
                <View
                  style={{
                    height: 10,
                    width: 80,
                    marginLeft: 10,
                    marginTop: 5,
                    borderRadius: 10,
                  }}
                ></View>
                <View
                  style={{
                    height: 10,
                    width: 80,
                    marginLeft: 10,
                    marginTop: 5,
                    borderRadius: 10,
                  }}
                ></View>
                <View
                  style={{
                    height: 10,
                    width: 50,
                    marginLeft: 10,
                    marginTop: 5,
                    borderRadius: 10,
                  }}
                ></View>

                <View
                  style={{
                    height: 10,
                    width: 50,
                    marginLeft: 10,

                    borderRadius: 10,
                    marginTop: scaledVertical(80),
                  }}
                ></View>
              </View>
            </View>
            <View
              style={{
                marginVertical: 10,
                marginHorizontal: scaledHorizontal(20),
                flexDirection: "row",
              }}
            >
              <View style={{ height: 100, width: 70, borderRadius: 10 }}></View>
              <View style={{ height: 95 }}>
                <View
                  style={{
                    height: 10,
                    width: 80,
                    marginLeft: 10,
                    marginTop: 5,
                    borderRadius: 10,
                  }}
                ></View>
                <View
                  style={{
                    height: 10,
                    width: 80,
                    marginLeft: 10,
                    marginTop: 5,
                    borderRadius: 10,
                  }}
                ></View>
                <View
                  style={{
                    height: 10,
                    width: 50,
                    marginLeft: 10,
                    marginTop: 5,
                    borderRadius: 10,
                  }}
                ></View>

                <View
                  style={{
                    height: 10,
                    width: 50,
                    marginLeft: 10,

                    borderRadius: 10,
                    marginTop: scaledVertical(80),
                  }}
                ></View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SkeletonPlaceholder>
  );
};
