import React from "react";
import { Text, View } from "react-native";
import { color1 } from "../../constants/COLORS";
import { FONTS } from "../../constants/FONTFAMILY";

const OrderCards = () => {
  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: "#D2D5DA",
        borderRadius: 10,
        // padding:10
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingVertical: 10,
          paddingHorizontal: 10,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            // padding: SM,
          }}
        >
          <Text style={{ fontFamily: FONTS.Regular }}>
            Economy Lunch Tiffin
          </Text>
          <Text
            style={{
              backgroundColor: color1,
              marginLeft: 10,
              fontSize: 16,
              borderRadius: 100,
              paddingHorizontal: 10,
              color: "white",
              paddingVertical: 4,
            }}
          >
            12
          </Text>
        </View>
        <Text style={{ fontFamily: FONTS.Regular }}>E</Text>
      </View>

      <View
        style={{
          backgroundColor: "#D9D9D9",
          height: 1,
          width: "100%",
          alignItems: "center",
        }}
      ></View>

      <View style={{ paddingHorizontal: 10, paddingVertical: 10 }}>
        <Text style={{ fontFamily: FONTS.Medium }}>Menu</Text>
        <View
          style={{
            display: "flex",
            justifyContent: "flex-start",
            flexWrap: "wrap",
            flexDirection: "row",
            gap: 10,
          }}
        >
          <Text style={{ fontFamily: FONTS.Regular, fontSize: 12 }}>
            .1 Veg Dish(x12)
          </Text>
          <Text style={{ fontFamily: FONTS.Regular, fontSize: 12 }}>
            .1 Dal(x12)
          </Text>
          <Text style={{ fontFamily: FONTS.Regular, fontSize: 12 }}>
            .3 Rotis(x12)
          </Text>
          <Text style={{ fontFamily: FONTS.Regular, fontSize: 12 }}>
            .1 Veg Dish(x12)
          </Text>
          <Text style={{ fontFamily: FONTS.Regular, fontSize: 12 }}>
            .1 Veg Dish(x12)
          </Text>
        </View>
      </View>

      <View style={{ paddingHorizontal: 10, paddingVertical: 10 }}>
        <Text style={{ fontFamily: FONTS.Medium }}>Add on</Text>
        <View
          style={{
            display: "flex",
            justifyContent: "flex-start",
            flexWrap: "wrap",
            flexDirection: "row",
            gap: 10,
          }}
        >
          <Text style={{ fontFamily: FONTS.Regular, fontSize: 12 }}>
            .1 Veg Dish(x12)
          </Text>
        </View>
      </View>
    </View>
  );
};

export default OrderCards;
