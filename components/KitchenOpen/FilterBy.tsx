import React from "react";
import { Text, View } from "react-native";
import CustomBottomSheet from "../common/CustomBottomSheet";
import { FONTS } from "../../constants/FONTFAMILY";
import { Checkbox } from "react-native-paper";
import { RadioButton } from "react-native-paper";
import Button from "../common/Button";

const FilterBy = ({ openBottomSheet, refRBSheet }: any) => {
  const [check, setCheck] = React.useState("first");
  const [checked, setChecked] = React.useState(false);

  const handleSignInPress = () => {};

  return (
    <CustomBottomSheet
      openBottomSheet={openBottomSheet}
      refRBSheet={refRBSheet}
    >
      <View
        style={{
          paddingHorizontal: 10,
          paddingVertical: 10,
        }}
      >
        <Text
          style={{
            fontFamily: FONTS.Bold,
            fontSize: 20,
          }}
        >
          Filter By
        </Text>

        <View style={{ paddingVertical: 10 }}>
          <Text
            style={{
              fontFamily: FONTS.Medium,
              fontSize: 14,
            }}
          >
            Location
          </Text>
        </View>

        {/* location filter first three */}
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Checkbox
              status={checked ? "checked" : "unchecked"}
              onPress={() => {
                setChecked(!checked);
              }}
            />
            <Text
              style={{
                fontFamily: FONTS.Regular,
                fontSize: 14,
              }}
            >
              Label
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Checkbox
              status={checked ? "checked" : "unchecked"}
              onPress={() => {
                setChecked(!checked);
              }}
            />
            <Text
              style={{
                fontFamily: FONTS.Regular,
                fontSize: 14,
              }}
            >
              Label
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Checkbox
              status={checked ? "checked" : "unchecked"}
              onPress={() => {
                setChecked(!checked);
              }}
            />
            <Text
              style={{
                fontFamily: FONTS.Regular,
                fontSize: 14,
              }}
            >
              Label
            </Text>
          </View>
        </View>

        {/* location filter sec three */}

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Checkbox
              status={checked ? "checked" : "unchecked"}
              onPress={() => {
                setChecked(!checked);
              }}
            />
            <Text
              style={{
                fontFamily: FONTS.Regular,
                fontSize: 14,
              }}
            >
              Label
            </Text>
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Checkbox
              status={checked ? "checked" : "unchecked"}
              onPress={() => {
                setChecked(!checked);
              }}
            />
            <Text
              style={{
                fontFamily: FONTS.Regular,
                fontSize: 14,
              }}
            >
              Label
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Checkbox
              status={checked ? "checked" : "unchecked"}
              onPress={() => {
                setChecked(!checked);
              }}
            />
            <Text
              style={{
                fontFamily: FONTS.Regular,
                fontSize: 14,
              }}
            >
              Label
            </Text>
          </View>
        </View>

        <View
          style={{
            backgroundColor: "#D9D9D9",
            height: 1,
            width: "100%",
            alignItems: "center",
            marginVertical: 10,
          }}
        ></View>

        <View style={{ paddingVertical: 10 }}>
          <Text
            style={{
              fontFamily: FONTS.Medium,
              fontSize: 14,
            }}
          >
            Order Type
          </Text>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                paddingVertical: 5,
              }}
            >
              <RadioButton
                value="first"
                status={check === "first" ? "checked" : "unchecked"}
                onPress={() => setCheck("first")}
              />
              <Text
                style={{
                  fontFamily: FONTS.Regular,
                  fontSize: 14,
                }}
              >
                Subscription
              </Text>
            </View>

            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                paddingVertical: 5,
              }}
            >
              <RadioButton
                value="first"
                status={check === "first" ? "checked" : "unchecked"}
                onPress={() => setCheck("first")}
              />
              <Text
                style={{
                  fontFamily: FONTS.Regular,
                  fontSize: 14,
                }}
              >
                One Time Order
              </Text>
            </View>
          </View>
        </View>

        {/* order  with cooking Instructions */}

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: 5,
          }}
        >
          <Checkbox
            status={checked ? "checked" : "unchecked"}
            onPress={() => {
              setChecked(!checked);
            }}
          />
          <Text
            style={{
              fontFamily: FONTS.Regular,
              fontSize: 14,
            }}
          >
            Show Orders With Cooking Instructions
          </Text>
        </View>

        <View style={{paddingTop:80}}>
          <Button isActive={true} title="Apply" handleSignInPress={handleSignInPress} />
        </View>
        <View style={{ paddingTop: 20 }}>
          <Text
            style={{
              fontFamily: FONTS.Bold,
              fontSize: 18,
              textAlign:"center"
            }}
          >
            Clear Filters
          </Text>
        </View>
      </View>
    </CustomBottomSheet>
  );
};

export default FilterBy;
