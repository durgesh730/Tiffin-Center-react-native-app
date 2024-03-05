import React from "react";
import { SafeAreaView, ScrollView, View, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { FONTS } from "../constants/FONTFAMILY";
import { XL } from "../constants/SPACING";
import Button from "../components/common/Button";

const OffersScreens = () => {
  const handleSignInPress = () => {};

  return (
    <ScrollView style={styles.container}>
      <SafeAreaView style={{ paddingVertical: 10, paddingHorizontal: 15 }}>
        <View>
          <Text
            style={{
              fontFamily: FONTS.SemiBold,
              fontSize: 16,
            }}
          >
            Ongoing Offers
          </Text>
        </View>

        <View
          style={{
            marginVertical: 10,
            backgroundColor: "#f5f0ff",
            padding: 10,
            borderRadius: 10,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                fontFamily: FONTS.Regular,
                fontSize: 14,
                backgroundColor: "#743EE4",
                color: "#fff",
                paddingHorizontal: 6,
                borderRadius: 5,
                paddingVertical: 4,
              }}
            >
              TRY New
            </Text>
            <Text>
              <FontAwesome name="edit" size={20} color="black" />
            </Text>
          </View>

          <View
            style={{
              paddingVertical: 10,
              display: "flex",
              flexDirection: "row",
              gap: 30,
            }}
          >
            <Text
              style={{
                fontFamily: FONTS.Bold,
                fontSize: 14,
              }}
            >
              20% Off
            </Text>
            <Text
              style={{
                fontFamily: FONTS.Regular,
                fontSize: 14,
              }}
            >
              On Orders Above Rs 2000
            </Text>
          </View>

          <View>
            <Text
              style={{
                fontFamily: FONTS.Regular,
                fontSize: 14,
                color: "#6C727F",
              }}
            >
              Upper Limit :Rs 75 Meal:South Indian Tiffin
            </Text>
          </View>
        </View>

        <View>
          <Button
            isActive={true}
            handleSignInPress={handleSignInPress}
            title="Create Your Own Offer"
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

export default OffersScreens;
