import React, { useState } from "react";
import { View, StyleSheet, useWindowDimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SM, XL } from "../constants/SPACING";
import { FONTS } from "../constants/FONTFAMILY";

const AgreementScreen = ({ navigation }: any) => {
  const [isActive, setIsActive] = useState(false);
  const { height } = useWindowDimensions();

  const HandleLogin = () => {
    setIsActive(true);
    if (isActive) {
      navigation.push("KitchenInfo");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
        <View style={{padding: SM,}}>
      <View
        style={{
            width: "100%",
            height: height * 0.50,
            backgroundColor: "#D9D9D9",
        }}
        ></View>

        </View>
    </SafeAreaView>
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

export default AgreementScreen;
