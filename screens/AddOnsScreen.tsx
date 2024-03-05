import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Input from "../components/common/Input";
import { FONTS } from "../constants/FONTFAMILY";
import { SM, XL } from "../constants/SPACING";
import Button from "../components/common/Button";

const AddOnsScreen = ({ navigation }: any) => {

  const handleSignInPress = () => {
    navigation.push('Agreement');
  };

  return (
    <ScrollView style={styles.container}>
      <SafeAreaView>
        <Text style={styles.heading}>Add Ons</Text>
        <View style={{ paddingTop: SM }}>
          <Input label="Item Name*" placeholder="Name of the Meal" />
        </View>

        <View style={{ paddingTop: SM }}>
          <Input label="Price*" placeholder="Price" />
        </View>

        <TouchableOpacity
          onPress={handleSignInPress}
          style={styles.SaveButton}
        >
          <Text style={styles.SaveButtonText}>Add More</Text>
        </TouchableOpacity>

        <View style={{ paddingBottom: 50, paddingTop: 150 }}>
          <Button
            title={"Save and Proceed"}
            handleSignInPress={handleSignInPress}
            isActive={false}
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
    paddingHorizontal: 15,
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
  SaveButtonText: {
    fontWeight: "600",
    fontSize: 14,
    fontFamily: FONTS.SemiBold,
  },
  
  SaveButton: {
    width: "100%",
    marginTop: 20,
    alignItems: "center",
    height: 50,
    justifyContent: "center",
  },
});

export default AddOnsScreen;
