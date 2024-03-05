import React from "react";
import { View, ScrollView, Text } from "react-native";
import { SM } from "../../constants/SPACING";
import { FONTS } from "../../constants/FONTFAMILY";
import { labelColor } from "../../constants/COLORS";
import { Checkbox } from "react-native-paper";
import OrderCards from "./OrderCards";

const Delivered = () => {
  const [checked, setChecked] = React.useState(false);

  return (
    <View>
      <ScrollView style={{ marginTop: SM }}>
        <ScrollView horizontal={true}>
          <View
            style={{
              paddingTop: 15,
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 15,
              marginLeft: 10,
              paddingBottom: 15,
            }}
          >
            <Text
              style={{
                fontFamily: FONTS.Regular,
                backgroundColor: labelColor,
                color: "white",
                paddingHorizontal: 20,
                paddingVertical: 5,
                borderRadius: 50,
              }}
            >
              Filter
            </Text>
            <Text
              style={{
                fontFamily: FONTS.Regular,
                backgroundColor: labelColor,
                color: "white",
                paddingHorizontal: 20,
                paddingVertical: 5,
                borderRadius: 50,
              }}
            >
              Orders with Add Ons
            </Text>
            <Text
              style={{
                fontFamily: FONTS.Regular,
                backgroundColor: labelColor,
                color: "white",
                paddingHorizontal: 20,
                paddingVertical: 5,
                borderRadius: 50,
              }}
            >
              Dietary Type
            </Text>
          </View>
        </ScrollView>

        <View
          style={{
            paddingHorizontal: 10,
            paddingVertical: 0,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontFamily: FONTS.Medium,
            }}
          >
            Showing 10 Orders
          </Text>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              paddingVertical: 10,
              paddingHorizontal: 4,
            }}
          >
            <Checkbox
              status={checked ? "checked" : "unchecked"}
              onPress={() => {
                setChecked(!checked);
              }}
            />
            <Text
              style={{
                fontFamily: FONTS.Medium,
                fontSize: 14,
                paddingLeft: 5,
              }}
            >
              Select All
            </Text>
          </View>
        </View>

        <View
          style={{
            paddingHorizontal: 10,
          }}
        >
          <View>
            <OrderCards />
          </View>
          <View style={{ paddingTop: 10 }}>
            <OrderCards />
          </View>
          <View style={{ paddingTop: 10 }}>
            <OrderCards />
          </View>
          <View style={{ paddingTop: 10 }}>
            <OrderCards />
          </View>
          <View style={{ paddingTop: 10 }}>
            <OrderCards />
          </View>
          <View style={{ paddingTop: 10 }}>
            <OrderCards />
          </View>
          <View style={{ paddingTop: 10 }}>
            <OrderCards />
          </View>
          <View style={{ paddingTop: 10 }}>
            <OrderCards />
          </View>
          <View style={{ paddingTop: 10, paddingBottom: 30 }}>
            <OrderCards />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Delivered;
