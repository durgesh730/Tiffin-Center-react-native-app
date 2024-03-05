import React from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TextInputProps,
  Text,
} from "react-native";
import { FONTS } from "../../constants/FONTFAMILY";
import { borderColor, labelColor } from "../../constants/COLORS";

interface InputWithIconProps extends TextInputProps {
  label?: string;
}

const Input: React.FC<InputWithIconProps> = ({ label, ...textInputProps }) => {
  return (
    <View>
      <Text
        style={{
          fontSize: 12,
          fontFamily: FONTS.Medium,
          color: labelColor,
        }}
      >
        {label}
      </Text>
      <TextInput style={styles.input} {...textInputProps} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    width: "100%",
    borderColor: borderColor,
    borderWidth: 1,
    borderRadius: 12,
    paddingVertical: 10,
    fontFamily: FONTS.Medium,
    marginTop: 5,
  },
});

export default Input;
