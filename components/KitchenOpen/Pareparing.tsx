import React from "react";
import { View, ScrollView, Text } from "react-native";
import { SM } from "../../constants/SPACING";
import { FONTS } from "../../constants/FONTFAMILY";
import { Checkbox } from "react-native-paper";
import OrderCards from "./OrderCards";
import { Feather } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";

const Pareparing = () => {
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
                backgroundColor: "#d4d4d4",
                color: "#4D5562",
                paddingHorizontal: 20,
                paddingVertical: 5,
                borderRadius: 50,
                borderWidth: 1,
                borderColor: "#4D5562",
              }}
            >
              <Text>
                <Feather name="filter" size={14} color="#4D5562" />
              </Text>
              <Text>Filter</Text>
            </Text>

            <View
              style={{
                backgroundColor: "#d4d4d4",
                paddingHorizontal: 15,
                paddingVertical: 5,
                borderRadius: 50,
                borderWidth: 1,
                borderColor: "#4D5562",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 10,
              }}
            >
              <Text style={{ color: "#4D5562", fontFamily: FONTS.Regular }}>
                Orders with Add Ons
              </Text>
              <Text style={{ color: "#4D5562", fontFamily: FONTS.Regular }}>
                <SimpleLineIcons name="arrow-down" size={14} color="black" />
              </Text>
            </View>

            <Text
              style={{
                fontFamily: FONTS.Regular,
                backgroundColor: "#d4d4d4",
                color: "#4D5562",
                paddingHorizontal: 20,
                paddingVertical: 5,
                borderRadius: 50,
                borderWidth: 1,
                borderColor: "#4D5562",
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
            paddingBottom:450
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

export default Pareparing;
