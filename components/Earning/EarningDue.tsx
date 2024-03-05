import React from "react";
import { Text, View } from "react-native";
import { FONTS } from "../../constants/FONTFAMILY";
import { color1 } from "../../constants/COLORS";
import Daily from "./SubEarningComponent/Daily";

const EarningDue = () => {
  return (
    <View>
      <View
        style={{
          paddingHorizontal: 10,
          paddingTop: 15,
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: 20,
          paddingBottom: 15,
        }}
      >
        <Text
          style={{
            fontFamily: FONTS.Medium,
            color: "#4D5562",
            paddingHorizontal: 10,
            paddingVertical: 5,
            borderRadius: 50,
            backgroundColor: "#ebebeb",
          }}
        >
          Daily
        </Text>
        <Text
          style={{
            fontFamily: FONTS.Medium,
            color: "#fff",
            paddingHorizontal: 20,
            paddingVertical: 5,
            borderRadius: 50,
            backgroundColor: color1,
          }}
        >
          Weekly
        </Text>
        <Text
          style={{
            fontFamily: FONTS.Medium,
            color: "#4D5562",
            paddingHorizontal: 10,
            paddingVertical: 5,
            borderRadius: 50,
            backgroundColor: "#ebebeb",
          }}
        >
          Monthly
        </Text>
      </View>

      <Daily/>
      
    </View>
  );
};

export default EarningDue;
