import React, { useRef } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import Input from "../components/common/Input";
import { FONTS } from "../constants/FONTFAMILY";
import { MD, SM, XL } from "../constants/SPACING";
import { Checkbox } from "react-native-paper";
import { color1, color3, labelColor } from "../constants/COLORS";
import * as DocumentPicker from "expo-document-picker";
import Button from "../components/common/Button";
import { FontAwesome } from "@expo/vector-icons";
import RBSheet from "@nonam4/react-native-bottom-sheet";
import Address from "../components/RestaurantInfo/Address";
import CustomSlider from "../components/common/CustomSlider";

const KitchenInfoScreen = ({ navigation }: any) => {
  const [checked, setChecked] = React.useState(false);
  const refRBSheet = useRef<RBSheet | null>(null);

  const pickDocument = async () => {
    await DocumentPicker.getDocumentAsync().then((res: any) => {
      console.log(res);
    });
  };

  const openBottomSheet = () => {
    refRBSheet.current?.open();
  };

  const handleSignInPress = () => {
    navigation.push("KitchenDoucuments");
  };

  return (
    <ScrollView style={styles.container}>
      <SafeAreaView>
        <Text style={styles.heading}>Basic Details</Text>

        <View style={{ paddingTop: SM }}>
          <Input label="Name Of Kitchen*" placeholder="Name of Kitchen" />
        </View>

        <View style={{ paddingTop: SM }}>
          <Input
            label="Description of the kitchen*"
            placeholder="Description"
          />
        </View>

        <View style={{ paddingTop: SM }}>
          <Text style={styles.address}>Address</Text>
          <View style={styles.addressContainer}>
            <Text
              onPress={openBottomSheet}
              style={{ fontFamily: FONTS.Medium, color: "#6C727F" }}
            >
              Add Address
            </Text>

            <Address
              openBottomSheet={openBottomSheet}
              refRBSheet={refRBSheet}
            />
          </View>
        </View>

        <View>
          <Text
            style={{
              fontSize: 12,
              fontFamily: FONTS.Medium,
              color: labelColor,
              paddingTop: 12,
            }}
          >
            Range for free delivery
          </Text>
          <CustomSlider />
        </View>

        <View style={{ paddingTop: SM }}>
          <Input
            label="After Specified range Cost Per Km*"
            placeholder="Cost/km"
          />
        </View>

        <View style={{ paddingTop: SM }}>
          <Text style={styles.address}>Contact Details</Text>
          <View style={{ paddingTop: MD }}>
            <Input label="Phone Number*" placeholder="Phone Number" />
          </View>
        </View>

        <View style={{ paddingTop: SM }}>
          <Text style={styles.address}>Working Days</Text>
          <View
            style={{
              flexDirection: "row",
              gap: 5,
              flexWrap: "wrap",
              paddingTop: SM,
            }}
          >
            <View style={styles.checkContainer}>
              <Checkbox
                status={checked ? "checked" : "unchecked"}
                onPress={() => {
                  setChecked(!checked);
                }}
                color={color1}
              />
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: FONTS.Medium,
                  color: labelColor,
                }}
              >
                Monday
              </Text>
            </View>
            <View style={styles.checkContainer}>
              <Checkbox
                status={checked ? "checked" : "unchecked"}
                onPress={() => {
                  setChecked(!checked);
                }}
                color={color1}
              />
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: FONTS.Medium,
                  color: labelColor,
                }}
              >
                Tuesday
              </Text>
            </View>
            <View style={styles.checkContainer}>
              <Checkbox
                status={checked ? "checked" : "unchecked"}
                onPress={() => {
                  setChecked(!checked);
                }}
                color={color1}
              />
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: FONTS.Medium,
                  color: labelColor,
                }}
              >
                Wednesday
              </Text>
            </View>
            <View style={styles.checkContainer}>
              <Checkbox
                status={checked ? "checked" : "unchecked"}
                onPress={() => {
                  setChecked(!checked);
                }}
                color={color1}
              />
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: FONTS.Medium,
                  color: labelColor,
                }}
              >
                Thrusday
              </Text>
            </View>
            <View style={styles.checkContainer}>
              <Checkbox
                status={checked ? "checked" : "unchecked"}
                onPress={() => {
                  setChecked(!checked);
                }}
                color={color1}
              />
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: FONTS.Medium,
                  color: labelColor,
                }}
              >
                Friday
              </Text>
            </View>
            <View style={styles.checkContainer}>
              <Checkbox
                status={checked ? "checked" : "unchecked"}
                onPress={() => {
                  setChecked(!checked);
                }}
                color={color1}
              />
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: FONTS.Medium,
                  color: labelColor,
                }}
              >
                Saturday
              </Text>
            </View>
            <View style={styles.checkContainer}>
              <Checkbox
                status={checked ? "checked" : "unchecked"}
                onPress={() => {
                  setChecked(!checked);
                }}
                color={color1}
              />
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: FONTS.Medium,
                  color: labelColor,
                }}
              >
                Sunday
              </Text>
            </View>
          </View>
        </View>

        <View style={{ paddingVertical: SM }}>
          <Text style={styles.address}>Working Hours</Text>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              gap: 10,
            }}
          >
            <View style={{ paddingTop: MD, width: "48%" }}>
              <Input placeholder="Opening Time" />
            </View>
            <View style={{ paddingTop: MD, width: "48%" }}>
              <Input placeholder="Closing Time" />
            </View>
          </View>
        </View>

        <View style={{ paddingTop: SM }}>
          <Text style={styles.address}>Advance Notice</Text>
          <View style={{ paddingTop: MD }}>
            <Input
              label="The amount of advanced time for accepting orders*"
              placeholder="Hours"
            />
          </View>
        </View>

        <View style={{ paddingTop: SM, paddingBottom: 150 }}>
          <Text style={styles.address}>Images of the Kitchen</Text>
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

        <View style={{ paddingBottom: 50 }}>
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

export default KitchenInfoScreen;
