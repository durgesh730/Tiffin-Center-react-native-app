import React from "react";
import { SafeAreaView, ScrollView, View, Text, StyleSheet } from "react-native";
import { FONTS } from "../constants/FONTFAMILY";
import { XL } from "../constants/SPACING";
import Button from "../components/common/Button";
import { FontAwesome6 } from "@expo/vector-icons";

const MyMealsScreen = () => {
  const handleSignInPress = () => {};

  return (
    <ScrollView style={styles.container}>
      <SafeAreaView style={{ paddingVertical: 10, paddingHorizontal: 15 }}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingVertical: 10,
          }}
        >
          <Text
            style={{
              fontFamily: FONTS.Regular,
              fontSize: 14,
            }}
          >
            South India Meal
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
            }}
          >
            <Text
              style={{
                fontFamily: FONTS.Medium,
                fontSize: 14,
              }}
            >
              Edit
            </Text>
            <Text>
              <FontAwesome6 name="greater-than" size={20} color="#c4c4c4" />
            </Text>
          </View>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingVertical: 10,
          }}
        >
          <Text
            style={{
              fontFamily: FONTS.Regular,
              fontSize: 14,
            }}
          >
            South India Meal
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
            }}
          >
            <Text
              style={{
                fontFamily: FONTS.Medium,
                fontSize: 14,
              }}
            >
              Edit
            </Text>
            <Text>
              <FontAwesome6 name="greater-than" size={20} color="#c4c4c4" />
            </Text>
          </View>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingVertical: 10,
          }}
        >
          <Text
            style={{
              fontFamily: FONTS.Regular,
              fontSize: 14,
            }}
          >
            South India Meal
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
            }}
          >
            <Text
              style={{
                fontFamily: FONTS.Medium,
                fontSize: 14,
              }}
            >
              Edit
            </Text>
            <Text>
              <FontAwesome6 name="greater-than" size={20} color="#c4c4c4" />
            </Text>
          </View>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingVertical: 10,
          }}
        >
          <Text
            style={{
              fontFamily: FONTS.Regular,
              fontSize: 14,
            }}
          >
            South India Meal
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
            }}
          >
            <Text
              style={{
                fontFamily: FONTS.Medium,
                fontSize: 14,
              }}
            >
              Edit
            </Text>
            <Text>
              <FontAwesome6 name="greater-than" size={20} color="#c4c4c4" />
            </Text>
          </View>
        </View>

        <View
          style={{
            paddingTop: 400,
          }}
        >
          <Button
            isActive={true}
            handleSignInPress={handleSignInPress}
            title="Save And Proceed"
          />
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
});

export default MyMealsScreen;
