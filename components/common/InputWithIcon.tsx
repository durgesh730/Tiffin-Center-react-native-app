import React from "react";
import { StyleSheet, View, TextInput, TextInputProps } from "react-native";
import { borderColor } from "../../constants/COLORS";
import { FONTS } from "../../constants/FONTFAMILY";

interface InputWithIconProps extends TextInputProps {
  Icon?: JSX.Element;
}

const InputWithIcon: React.FC<InputWithIconProps> = ({
  Icon,
  ...textInputProps
}) => {
  return (
    <View style={styles.inputContainer}>
      {Icon && Icon}
      <TextInput style={styles.input} {...textInputProps} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: borderColor,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    marginLeft: 8,
    fontSize:16,
    fontFamily:FONTS.Regular,
    color:""
  },
});

export default InputWithIcon;
