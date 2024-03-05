import React from "react";
import { View, Text } from "react-native";
import CustomBottomSheet from "../common/CustomBottomSheet";
import { FONTS } from "../../constants/FONTFAMILY";
import Input from "../common/Input";
import { MD } from "../../constants/SPACING";
import Button from "../common/Button";

const Address = ({ openBottomSheet, refRBSheet }: any) => {
  const handleSignInPress = () => {};

  return (
    <View>
      <CustomBottomSheet
        openBottomSheet={openBottomSheet}
        refRBSheet={refRBSheet}
      >
        <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
          <Text style={{ fontFamily: FONTS.Bold, fontSize: 20 }}>
            Enter Address Details
          </Text>

          <View style={{ paddingTop: MD }}>
            <Input
              label="House Number, Floor Number *"
              placeholder="House Number, Floor Number"
            />
          </View>
          <View style={{ paddingTop: MD }}>
            <Input label="Tower/Block*" placeholder="Tower/Block" />
          </View>
          <View style={{ paddingTop: MD }}>
            <Input label="Nearby Landmark*" placeholder="Nearby Landmark" />
          </View>
          <View style={{ paddingTop: MD }}>
            <Input label="City*" placeholder="City" />
          </View>
          <View style={{ paddingTop: MD }}>
            <Input label="Pincode*" placeholder="State" />
          </View>

          <Button
            isActive={false}
            title="save Address"
            handleSignInPress={handleSignInPress}
          />
        </View>
      </CustomBottomSheet>
    </View>
  );
};

export default Address;
