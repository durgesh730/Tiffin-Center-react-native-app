import React from "react";
import { View, Text } from "react-native";
import { labelColor } from "../../../constants/COLORS";
import { FONTS } from "../../../constants/FONTFAMILY";

const Daily = () => {
  return (
    <View
      style={{
        paddingHorizontal: 20,
      }}
    >
      <View
        style={{
          paddingVertical: 10,
        }}
      >
        <Text
          style={{
            fontSize: 12,
            fontFamily: FONTS.Regular,
          }}
        >
          Mon, 01 dec
        </Text>
      </View>

      <View
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          width: "100%",
          gap: 20,
        }}
      >
        <View
          style={{
            width: "45%",
          }}
        >
          <Text
            style={{
              fontSize: 12,
              fontFamily: FONTS.Regular,
              paddingBottom: 4,
            }}
          >
            Today's Earning
          </Text>
          <View
            style={{
              borderWidth: 1,
              borderColor: labelColor,
              display: "flex",
              justifyContent: "center",
              alignItems: "baseline",
              flexDirection: "row",
              paddingVertical: 10,
              borderRadius: 5,
            }}
          >
            <Text
              style={{
                fontSize: 12,
                fontFamily: FONTS.Light,
              }}
            >
              Rs
            </Text>
            <Text
              style={{
                fontSize: 24,
                fontFamily: FONTS.Bold,
              }}
            >
              2000
            </Text>
          </View>
        </View>

        <View
          style={{
            width: "45%",
          }}
        >
          <Text
            style={{
              fontSize: 12,
              fontFamily: FONTS.Regular,
              paddingBottom: 4,
            }}
          >
            Today's Earning
          </Text>
          <View
            style={{
              borderWidth: 1,
              borderColor: labelColor,
              display: "flex",
              justifyContent: "center",
              alignItems: "baseline",
              flexDirection: "row",
              paddingVertical: 10,
              borderRadius: 5,
            }}
          >
            <Text
              style={{
                fontSize: 12,
                fontFamily: FONTS.Light,
              }}
            >
              Rs
            </Text>
            <Text
              style={{
                fontSize: 24,
                fontFamily: FONTS.Bold,
              }}
            >
              2000
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          width: "100%",
          gap: 20,
          paddingTop: 20,
        }}
      >
        <View
          style={{
            width: "45%",
          }}
        >
          <Text
            style={{
              fontSize: 12,
              fontFamily: FONTS.Regular,
              paddingBottom: 4,
            }}
          >
            Today's Earning
          </Text>
          <View
            style={{
              borderWidth: 1,
              borderColor: labelColor,
              display: "flex",
              justifyContent: "center",
              alignItems: "baseline",
              flexDirection: "row",
              paddingVertical: 10,
              borderRadius: 5,
            }}
          >
            <Text
              style={{
                fontSize: 12,
                fontFamily: FONTS.Light,
              }}
            >
              Rs
            </Text>
            <Text
              style={{
                fontSize: 24,
                fontFamily: FONTS.Bold,
              }}
            >
              2000
            </Text>
          </View>
        </View>

        <View
          style={{
            width: "45%",
          }}
        >
          <Text
            style={{
              fontSize: 12,
              fontFamily: FONTS.Regular,
              paddingBottom: 4,
            }}
          >
            Today's Earning
          </Text>
          <View
            style={{
              borderWidth: 1,
              borderColor: labelColor,
              display: "flex",
              justifyContent: "center",
              alignItems: "baseline",
              flexDirection: "row",
              paddingVertical: 10,
              borderRadius: 5,
            }}
          >
            <Text
              style={{
                fontSize: 12,
                fontFamily: FONTS.Light,
              }}
            >
              Rs
            </Text>
            <Text
              style={{
                fontSize: 24,
                fontFamily: FONTS.Bold,
              }}
            >
              2000
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          paddingTop: 20,
        }}
      >
        <Text
          style={{
            fontSize: 14,
            fontFamily: FONTS.SemiBold,
            paddingBottom: 4,
          }}
        >
          Most ordered Meals
        </Text>
        <View
          style={{
            borderWidth: 1,
            borderColor: labelColor,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 15,
            paddingHorizontal: 10,
            borderRadius: 5,
          }}
        >
          <Text
            style={{
              fontSize: 12,
              fontFamily: FONTS.Regular,
            }}
          >
            South Indian Breakfast
          </Text>

          <Text
            style={{
              fontSize: 12,
              fontFamily: FONTS.Regular,
              color: "#3C7E44",
            }}
          >
            5 orders
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Daily;
