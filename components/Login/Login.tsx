import React from "react";
import { Text, View } from "react-native";
import InputWithIcon from "../common/InputWithIcon";
import { labelColor } from "../../constants/COLORS";
import { FONTS } from "../../constants/FONTFAMILY";
import { Feather } from "@expo/vector-icons";

const Login = () => {
  return (
    <View>
      <Text
        style={{
          fontSize: 14,
          color: labelColor,
          marginBottom: 6,
          fontFamily: FONTS.SemiBold,
        }}
      >
        Phone Number
      </Text>
      <InputWithIcon
        Icon={<Feather name="phone" size={24} color={"#D2D5DA"} />}
        placeholder="Phone Number"
      />
    </View>
  );
};

export default Login;
