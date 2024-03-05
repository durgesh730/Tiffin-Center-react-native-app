import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { TextInput } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import { labelColor } from "../../constants/COLORS";
import { FONTS } from "../../constants/FONTFAMILY";

const Analytics = () => {
  return (
    <View
      style={{
        paddingHorizontal: 10,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          gap: 0,
          width: "100%",
          paddingTop: 15,
        }}
      >
        <View style={{ width: "45%" }}>
          <Text
            style={{
              fontSize: 12,
              fontFamily: FONTS.Regular,
            }}
          >
            From
          </Text>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} />
            <Text
              style={{
                marginLeft: -20,
                zIndex: 2,
              }}
            >
              <AntDesign name="calendar" size={20} color="black" style={{}} />
            </Text>
          </View>
        </View>

        <View style={{ width: "45%" }}>
          <Text
            style={{
              fontSize: 12,
              fontFamily: FONTS.Regular,
            }}
          >
            To
          </Text>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} />
            <Text
              style={{
                marginLeft: -20,
                zIndex: 2,
              }}
            >
              <AntDesign name="calendar" size={20} color="black" style={{}} />
            </Text>
          </View>
        </View>
      </View>

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
                fontSize: 24,
                fontFamily: FONTS.Bold,
              }}
            >
              20
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
            Earning Lost
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
            No. of Orders Cancelled
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
                fontSize: 24,
                fontFamily: FONTS.Bold,
              }}
            >
              15
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 5,
    alignContent: "center",
  },
  input: {
    flex: 1,
    paddingLeft: 16,
    fontSize: 16,
    fontFamily: FONTS.Regular,
    backgroundColor: "#fff",
  },
});

export default Analytics;
