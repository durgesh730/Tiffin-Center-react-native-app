import React from "react";
import { Text, View } from "react-native";
import { labelColor } from "../../constants/COLORS";
import { FONTS } from "../../constants/FONTFAMILY";
import { FontAwesome6 } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const Payout = () => {
  return (
    <View
      style={{
        paddingVertical: 15,
        paddingHorizontal: 10,
      }}
    >
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
          <FontAwesome6 name="less-than" size={20} color={labelColor} />
        </Text>

        <Text
          style={{
            fontSize: 14,
            fontFamily: FONTS.Medium,
          }}
        >
          2000
        </Text>

        <Text
          style={{
            fontSize: 12,
            fontFamily: FONTS.Regular,
          }}
        >
          <FontAwesome6 name="less-than" size={20} color={labelColor} />
        </Text>
      </View>

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
          marginTop: 15,
        }}
      >
        <Text
          style={{
            fontSize: 12,
            fontFamily: FONTS.Regular,
          }}
        >
          <FontAwesome6 name="less-than" size={20} color={labelColor} />
        </Text>

        <Text
          style={{
            fontSize: 14,
            fontFamily: FONTS.Medium,
          }}
        >
          October
        </Text>

        <Text
          style={{
            fontSize: 12,
            fontFamily: FONTS.Regular,
          }}
        >
          <FontAwesome6 name="less-than" size={20} color={labelColor} />
        </Text>
      </View>

      <View
        style={{
          backgroundColor: "#743EE4",
          marginTop: 10,
          paddingVertical:6,
          paddingHorizontal:10,
          borderRadius:5
        }}
      >
        <Text
          style={{
            fontSize: 12,
            fontFamily: FONTS.Regular,
            color:"#fff"
          }}
        >
          Payout Will be done on 31st Oct, 2024
        </Text>
      </View>

      <View
        style={{
          paddingTop: 20,
        }}
      >
        <Text
          style={{
            fontSize: 12,
            fontFamily: FONTS.Regular,
            paddingBottom: 4,
          }}
        >
          Payout
        </Text>
        <View
          style={{
            borderWidth: 1,
            borderColor: labelColor,
            display: "flex",
            alignItems: "baseline",
            flexDirection: "row",
            paddingVertical: 10,
            borderRadius: 5,
            paddingLeft: 20,
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
              fontSize: 26,
              fontFamily: FONTS.Bold,
            }}
          >
            2000
          </Text>
        </View>
      </View>

      <View
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          paddingTop: 10,
          gap: 10,
        }}
      >
        <Text>
          <Feather name="download" size={20} color={labelColor} />
        </Text>

        <Text
          style={{
            fontSize: 12,
            fontFamily: FONTS.Regular,
          }}
        >
          Download Summay
        </Text>
      </View>
    </View>
  );
};

export default Payout;
