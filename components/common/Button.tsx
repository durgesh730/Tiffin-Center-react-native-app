import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { btnTextColor, color1, disableColor } from "../../constants/COLORS";
import { FONTS } from "../../constants/FONTFAMILY";

interface ButtonType {
  title: string;
  handleSignInPress: () => void;
  isActive?: boolean;
}

const Button = ({ title, handleSignInPress, isActive }: ButtonType) => {
  return (
    <TouchableOpacity
      onPress={handleSignInPress}
      style={[
        styles.loginButton,
        {
          backgroundColor: isActive ? color1 : disableColor,
        },
      ]}
    >
      <Text
        style={[
          styles.loginButtonText,
          {
            color: isActive ? "#fff" : btnTextColor,
          },
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  loginButtonText: {
    fontWeight: "600",
    fontSize: 14,
    fontFamily: FONTS.SemiBold,
  },
  
  loginButton: {
    width: "100%",
    marginTop: 20,
    alignItems: "center",
    height: 50,
    justifyContent: "center",
    borderRadius: 10,
    marginHorizontal: "auto",
  },
});

export default Button;
