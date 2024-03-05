import React from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Button from "../components/common/Button";
import { color1, labelColor } from "../constants/COLORS";
import { FONTS } from "../constants/FONTFAMILY";
import { XL } from "../constants/SPACING";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const NotificationsScreen = () => {
  const handleAccept = () => {};

  const handleDeny = () => {};

  return (
    <ScrollView style={styles.container}>
      <SafeAreaView>
        <View
          style={{
            borderColor: labelColor,
            borderWidth: 1,
            borderRadius: 5,
            marginHorizontal: 10,
            marginVertical: 10,
          }}
        >
          <View
            style={{
              borderTopRightRadius: 5,
              backgroundColor: "#D2D5DA",
              paddingVertical: 10,
              paddingHorizontal: 10,
              borderTopLeftRadius: 5,
            }}
          >
            <Text
              style={{
                fontFamily: FONTS.Regular,
                fontSize: 12,
              }}
            >
              Order ID: 324567
            </Text>
          </View>

          <View
            style={{
              paddingHorizontal: 10,
              paddingBottom: 10,
            }}
          >
            <View
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
                paddingVertical: 10,
              }}
            >
              <Text
                style={{
                  fontFamily: FONTS.SemiBold,
                  fontSize: 12,
                }}
              >
                Economy Lunch Tiffin (x1)
              </Text>
              <Text
                style={{
                  fontFamily: FONTS.SemiBold,
                  fontSize: 12,
                }}
              >
                Rs 120
              </Text>
            </View>

            <View
              style={{
                display: "flex",
                flexDirection: "row",
                paddingBottom: 10,
                gap: 10,
              }}
            >
              <Text
                style={{
                  fontFamily: FONTS.Regular,
                  fontSize: 12,
                }}
              >
                .1 Veg Dish
              </Text>
              <Text
                style={{
                  fontFamily: FONTS.Regular,
                  fontSize: 12,
                }}
              >
                .1 dal
              </Text>
              <Text
                style={{
                  fontFamily: FONTS.Regular,
                  fontSize: 12,
                }}
              >
                .3 Roti
              </Text>
              <Text
                style={{
                  fontFamily: FONTS.Regular,
                  fontSize: 12,
                }}
              >
                .1 Rice
              </Text>
            </View>

            <View>
              <Text
                style={{
                  fontFamily: FONTS.SemiBold,
                  fontSize: 12,
                }}
              >
                Add Ons
              </Text>
            </View>

            <View
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
                paddingVertical: 5,
              }}
            >
              <Text
                style={{
                  fontFamily: FONTS.Regular,
                  fontSize: 12,
                }}
              >
                .Chaas (x1)
              </Text>
              <Text>Rs 10</Text>
            </View>

            <View
              style={{
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "row",
                paddingVertical: 10,
                gap: 20,
              }}
            >
              <Text
                style={{
                  fontFamily: FONTS.Regular,
                  fontSize: 12,
                }}
              >
                <Feather name="calendar" size={12} color="black" />
                Start Date
              </Text>
              <Text
                style={{
                  fontFamily: FONTS.Regular,
                  fontSize: 12,
                }}
              >
                <Feather name="calendar" size={12} color="black" />
                End Date
              </Text>
              <Text
                style={{
                  fontFamily: FONTS.Regular,
                  fontSize: 12,
                }}
              >
                {" "}
                <Feather name="calendar" size={12} color="black" />
                Total Date
              </Text>
            </View>

            <View
              style={{
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "row",
                gap: 20,
              }}
            >
              <Text
                style={{
                  fontFamily: FONTS.Regular,
                  fontSize: 12,
                }}
              >
                <Ionicons name="stopwatch-outline" size={12} color="black" />
                12:00 - 12:30
              </Text>
              <Text
                style={{
                  fontFamily: FONTS.Regular,
                  fontSize: 12,
                }}
              >
                <FontAwesome6 name="location-dot" size={12} color="black" />
                Ghatkopar | 2kms away
              </Text>
            </View>

            <View
              style={{
                backgroundColor: "#743EE4",
                paddingHorizontal: 10,
                paddingVertical: 5,
                marginVertical: 10,
                borderRadius:5
              }}
            >
              <Text
                style={{
                  fontFamily: FONTS.Regular,
                  fontSize: 12,
                  color: "white",
                }}
              >
                {" "}
                Make It less spicy
              </Text>
            </View>

            <View
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
                paddingVertical: 10,
                gap: 20,
              }}
            >
              <Text
                style={{
                  fontFamily: FONTS.Medium,
                  fontSize: 14,
                }}
              >
                ₹ Total Cost of the order
              </Text>
              <Text
                style={{
                  fontFamily: FONTS.Medium,
                  fontSize: 12,
                }}
              >
                Rs 10
              </Text>
            </View>

            <View
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
                paddingVertical: 10,
                gap: 20,
              }}
            >
              <Text
                style={{
                  fontFamily: FONTS.Regular,
                  fontSize: 12,
                  color: color1,
                }}
              >
                Assign Delivery Parter
              </Text>
              <Text>
                <MaterialCommunityIcons
                  name="greater-than"
                  size={14}
                  color={color1}
                />
              </Text>
            </View>

            <View
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
                gap: 10,
                width: "100%",
                alignItems: "center",
              }}
            >
              <TouchableOpacity onPress={handleDeny} style={styles.loginButton}>
                <Text style={styles.loginButtonText}>Deny</Text>
              </TouchableOpacity>

              <View
                style={{
                  width: "45%",
                }}
              >
                <Button
                  isActive={true}
                  handleSignInPress={handleAccept}
                  title="Accept"
                />
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: 32,
    fontWeight: "600",
    padding: XL,
    fontFamily: FONTS.SemiBold,
  },
  loginButtonText: {
    fontWeight: "600",
    fontSize: 14,
    fontFamily: FONTS.SemiBold,
    color: labelColor,
  },

  loginButton: {
    width: "45%",
    marginTop: 20,
    alignItems: "center",
    height: 50,
    justifyContent: "center",
    borderRadius: 10,
    marginHorizontal: "auto",
    borderWidth: 2,
    borderColor: labelColor,
  },
});

export default NotificationsScreen;
