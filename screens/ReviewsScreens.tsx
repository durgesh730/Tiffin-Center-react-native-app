import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { FONTS } from "../constants/FONTFAMILY";
import ReviewsCard from "../components/ReviewsCard";

const ReviewsScreens = () => {
  return (
    <ScrollView style={styles.container}>
      <SafeAreaView
        style={{
          paddingHorizontal: 10,
        }}
      >
        <Text
          style={{
            fontFamily: FONTS.Medium,
            fontSize: 12,
            paddingTop: 10,
          }}
        >
          Overall Rating
        </Text>

        <Text
          style={{
            fontFamily: FONTS.Bold,
            fontSize: 32,
          }}
        >
          3.8
        </Text>

        <View
          style={{
            backgroundColor: "#D9D9D9",
            height: 1,
            width: "100%",
            alignItems: "center",
            marginVertical:10
          }}
        ></View>

        <View style={{ paddingTop: 10 }}>
          <ReviewsCard />
        </View>

        <View style={{ paddingTop: 10 }}>
          <ReviewsCard />
        </View>

        <View style={{ paddingTop: 10 }}>
          <ReviewsCard />
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
      // position:"ab"
    },
    safeArea: {
      backgroundColor: "white",
      paddingBottom: 10,
    },
    section: {
      paddingVertical: 16,
    },
    title: {
      fontSize: 16,
      marginBottom: 8,
    },
    scrollContainer: {
      flexDirection: "row",
      justifyContent: "space-around",
    },
  });

export default ReviewsScreens;
