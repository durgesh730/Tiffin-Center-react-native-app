import React from "react";
import { View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { labelColor } from "../constants/COLORS";
import { FONTS } from "../constants/FONTFAMILY";

const ReviewsCard = () => {
  return (
    <View
      style={{
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 5,
        borderColor: labelColor,
        borderWidth: 1,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: 10,
          paddingBottom: 5,
        }}
      >
        <Text>
          <Feather name="star" size={16} color="black" />
          <Feather name="star" size={16} color="black" />
          <Feather name="star" size={16} color="black" />
          <Feather name="star" size={16} color="black" />
        </Text>

        <View
          style={{
            backgroundColor: labelColor,
            height: 10,
            width: 2,
            alignItems: "center",
          }}
        ></View>

        <Text
          style={{
            fontFamily: FONTS.Medium,
            fontSize: 12,
          }}
        >
          Dec 01, 2023
        </Text>
      </View>

      <View>
        <Text
          style={{
            fontFamily: FONTS.Regular,
            fontSize: 12,
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem qui
          sed et vero beatae accusantium dolorum earum inventore similique aut
          facere quibusdam
        </Text>
      </View>

      <View style={{ paddingTop: 10 }}>
        <Text
          style={{
            fontFamily: FONTS.Medium,
            fontSize: 14,
          }}
        >
          Durgesh chaudhary
        </Text>
      </View>
    </View>
  );
};

export default ReviewsCard;
