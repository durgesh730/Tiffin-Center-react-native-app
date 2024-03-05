import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, View, Text } from "react-native";
import { FONTS } from "../constants/FONTFAMILY";
import { XL } from "../constants/SPACING";
import Input from "../components/common/Input";
import Button from "../components/common/Button";
import { Entypo } from '@expo/vector-icons';

const AddDeliveryPartnerScreen = () => {
  const handleSignInPress = () => {};

  return (
    <>
      <ScrollView style={styles.container}>
        <SafeAreaView
          style={{
            paddingHorizontal: 10,
            paddingVertical: 10,
          }}
        >
          <View>
            <Input label="Name of Delivery Partner" />
          </View>
          <View style={{
            paddingTop:10
          }} >
            <Input label="Phone Number" />
          </View>

          <View>
            <Button
              title="Send Invite"
              isActive={true}
              handleSignInPress={handleSignInPress}
            />
          </View>

          <View
            style={{
              paddingHorizontal: 10,
              paddingTop:40
            }}
          >
            <Text
              style={{
                fontFamily: FONTS.SemiBold,
                fontSize: 14,
                textAlign:"center"
              }}
            >
              Add More
              <Entypo name="plus" size={24} color="black" />
            </Text>
          </View>
        </SafeAreaView>
      </ScrollView>
    </>
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

export default AddDeliveryPartnerScreen;
