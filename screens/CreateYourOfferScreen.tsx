import React, { useState } from "react";
import { SafeAreaView, ScrollView, View, Text, StyleSheet } from "react-native";
import { FONTS } from "../constants/FONTFAMILY";
import { XL } from "../constants/SPACING";
import Button from "../components/common/Button";
import DropDown from "react-native-paper-dropdown";

const CreateYourOfferScreen = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [gender, setGender] = useState("");

  const handleSignInPress = () => {};

  const genderList = [
    {
      label: "Male",
      value: "male",
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <SafeAreaView style={{ paddingVertical: 10, paddingHorizontal: 15 }}>
        <View
          style={{
            padding: 10,
            borderRadius: 10,
            borderColor: "#D2D5DA",
            borderWidth: 1,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <View>
              <Text
                style={{
                  fontFamily: FONTS.Regular,
                  fontSize: 12,
                }}
              >
                Dicount Percentage*
              </Text>
              <DropDown
                label={"Select %"}
                mode={"outlined"}
                visible={showDropDown}
                showDropDown={() => setShowDropDown(true)}
                onDismiss={() => setShowDropDown(false)}
                value={gender}
                setValue={setGender}
                list={genderList}
                multiSelect
              />
            </View>
            <View>
              <Text
                style={{
                  fontFamily: FONTS.Regular,
                  fontSize: 12,
                }}
              >
                On Orders Above*
              </Text>
              <DropDown
                label={"Enter Amount"}
                mode={"outlined"}
                visible={showDropDown}
                showDropDown={() => setShowDropDown(true)}
                onDismiss={() => setShowDropDown(false)}
                value={gender}
                setValue={setGender}
                list={genderList}
              />
            </View>
          </View>

          <View style={{ paddingVertical: 20 }}>
            <Text
              style={{
                fontFamily: FONTS.Regular,
                fontSize: 12,
              }}
            >
              Upper Limit*
            </Text>
            <DropDown
              label={"Enter Amount"}
              mode={"outlined"}
              visible={showDropDown}
              showDropDown={() => setShowDropDown(true)}
              onDismiss={() => setShowDropDown(false)}
              value={gender}
              setValue={setGender}
              list={genderList}
            />
          </View>

          <View>
            <Text
              style={{
                fontFamily: FONTS.Regular,
                fontSize: 12,
              }}
            >
              Meal Name*
            </Text>
            <DropDown
              label={"Meal Name"}
              mode={"outlined"}
              visible={showDropDown}
              showDropDown={() => setShowDropDown(true)}
              onDismiss={() => setShowDropDown(false)}
              value={gender}
              setValue={setGender}
              list={genderList}
            />
          </View>

          <View style={{ paddingVertical: 20 }}>
            <Text
              style={{
                fontFamily: FONTS.Regular,
                fontSize: 12,
              }}
            >
              Enter Offer Name*
            </Text>
            <DropDown
              label={"Offer Name"}
              mode={"outlined"}
              visible={showDropDown}
              showDropDown={() => setShowDropDown(true)}
              onDismiss={() => setShowDropDown(false)}
              value={gender}
              setValue={setGender}
              list={genderList}
            />
          </View>
        </View>

        <View>
          <Button
            isActive={true}
            handleSignInPress={handleSignInPress}
            title="Save Offer"
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

export default CreateYourOfferScreen;
