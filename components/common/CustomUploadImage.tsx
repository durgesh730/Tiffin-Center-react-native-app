import React, { useRef } from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import * as DocumentPicker from "expo-document-picker";
import RBSheet from "@nonam4/react-native-bottom-sheet";
import { FontAwesome } from "@expo/vector-icons";
import { FONTS } from "../../constants/FONTFAMILY";
import { SM, XL } from "../../constants/SPACING";
import { color3, labelColor } from "../../constants/COLORS";

const CustomUploadImage = ({label}:any) => {
  const refRBSheet = useRef<RBSheet | null>(null);

  const pickDocument = async () => {
    await DocumentPicker.getDocumentAsync().then((res: any) => {
      console.log(res);
    });
  };

  const openBottomSheet = () => {
    refRBSheet.current?.open();
  };

  return (
    <View style={{ paddingTop: SM }}>
      <Text
        style={{
          fontSize: 12,
          fontFamily: FONTS.Medium,
          color: labelColor,
        }}
      >
        {label}
      </Text>
      <View style={styles.imageContainer}>
        <TouchableWithoutFeedback onPress={pickDocument}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
            }}
          >
            <FontAwesome name="upload" size={16} color="#9DA3AE" />
            <Text
              style={{
                fontWeight: "600",
                fontSize: 14,
                fontFamily: "Inter_600SemiBold",
                textDecorationLine: "underline",
              }}
            >
              Upload Image
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
          paddingTop: 2,
        }}
      >
        <Text
          style={{
            fontSize: 12,
            fontFamily: FONTS.Medium,
            paddingTop: 5,
            color: labelColor,
          }}
        >
          {" "}
          Assistive Text
        </Text>
        <TouchableWithoutFeedback>
          <Text
            style={{
              fontWeight: "600",
              fontSize: 12,
              fontFamily: "Inter_600SemiBold",
              textDecorationLine: "underline",
              color: color3,
            }}
          >
            Help Link
          </Text>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  addressContainer: {
    width: "100%",
    height: 50,
    borderWidth: 1.5,
    borderColor: "#6C727F",
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    fontFamily: FONTS.SemiBold,
    marginTop: 10,
  },

  heading: {
    fontFamily: FONTS.SemiBold,
    fontSize: 14,
    paddingTop: XL,
  },
  address: {
    fontFamily: FONTS.SemiBold,
    fontSize: 14,
    paddingTop: SM,
  },
  checkContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  imageContainer: {
    width: "100%",
    height: 50,
    borderWidth: 1.5,
    borderColor: "#6C727F",
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    fontFamily: FONTS.SemiBold,
    marginTop: 10,
  },
});

export default CustomUploadImage;
