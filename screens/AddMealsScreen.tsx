import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Input from "../components/common/Input";
import { FONTS } from "../constants/FONTFAMILY";
import { SM, XL } from "../constants/SPACING";
import Button from "../components/common/Button";
import { borderColor, labelColor } from "../constants/COLORS";
import { RadioButton } from "react-native-paper";

const AddMealsScreen = ({ navigation }: any) => {
  const [value, onChangeText] = React.useState("Useless Multiline Placeholder");
  const [checked, setChecked] = React.useState("first");

  const handleSignInPress = () => {
    navigation.push('AddOns');
  };

  return (
    <ScrollView style={styles.container}>
      <SafeAreaView>
        <Text style={styles.heading}>Dietary Type</Text>

        <View
          style={{
            display: "flex",
            justifyContent: "flex-start",
            flexDirection: "row",
            alignItems: "center",
            gap: 20,
          }}
        >
          <View
            style={{
              paddingTop: SM,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <RadioButton
              value="first"
              status={checked === "first" ? "checked" : "unchecked"}
              onPress={() => setChecked("first")}
            />
            <Text style={{fontFamily:FONTS.Regular, color:labelColor}} >Veg</Text>
          </View>
          <View
            style={{
              paddingTop: SM,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <RadioButton
              value="first"
              status={checked === "first" ? "checked" : "unchecked"}
              onPress={() => setChecked("first")}
            />
            <Text style={{fontFamily:FONTS.Regular, color:labelColor}}>Non-Veg</Text>
          </View>
          <View
            style={{
              paddingTop: SM,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <RadioButton
              value="first"
              status={checked === "first" ? "checked" : "unchecked"}
              onPress={() => setChecked("first")}
            />
            <Text style={{fontFamily:FONTS.Regular, color:labelColor}}>Jain</Text>
          </View>
        </View>

        <Text style={styles.heading}>Meal Type</Text>

        <View
          style={{
            display: "flex",
            justifyContent: "flex-start",
            flexDirection: "row",
            alignItems: "center",
            gap: 20,
          }}
        >
          <View
            style={{
              paddingTop: SM,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <RadioButton
              value="first"
              status={checked === "first" ? "checked" : "unchecked"}
              onPress={() => setChecked("first")}
            />
            <Text style={{fontFamily:FONTS.Regular, color:labelColor}}>Breakfast</Text>
          </View>
          <View
            style={{
              paddingTop: SM,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <RadioButton
              value="first"
              status={checked === "first" ? "checked" : "unchecked"}
              onPress={() => setChecked("first")}
            />
            <Text style={{fontFamily:FONTS.Regular, color:labelColor}}>Lunch</Text>
          </View>
          <View
            style={{
              paddingTop: SM,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <RadioButton
              value="first"
              status={checked === "first" ? "checked" : "unchecked"}
              onPress={() => setChecked("first")}
            />
            <Text style={{fontFamily:FONTS.Regular, color:labelColor}}>Dinner</Text>
          </View>
        </View>

        <Text style={styles.address}>About the Meal</Text>

        <View style={{ paddingTop: SM }}>
          <Input label="Name of the Meal*" placeholder="Name of the Meal" />
        </View>

        <Text style={styles.address}>Description of menu</Text>
        <View
          style={{
            paddingHorizontal: 10,
            backgroundColor: "#fff",
            width: "100%",
            borderColor: borderColor,
            borderWidth: 1,
            borderRadius: 12,
            marginTop: 5,
          }}
        >
          <TextInput
            editable
            multiline
            numberOfLines={6}
            onChangeText={(text) => onChangeText(text)}
            value={value}
            placeholder="Description of menu"
            style={{ fontFamily: FONTS.Medium }}
          />
        </View>

        <View style={{ paddingTop: SM }}>
          <Input label="Price per meal*" placeholder="Price" />
        </View>

        <TouchableOpacity
          onPress={handleSignInPress}
          style={styles.SaveButton}
        >
          <Text style={styles.SaveButtonText}>Save and Add Another Meal</Text>
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
    color:"#9DA3AE"
  },
  
  SaveButton: {
    borderColor:"#D2D5DA",
    width: "100%",
    marginTop: 20,
    alignItems: "center",
    height: 50,
    justifyContent: "center",
    borderRadius: 10,
    borderWidth:1
  },
});

export default AddMealsScreen;
