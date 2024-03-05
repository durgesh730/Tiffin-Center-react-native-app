import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableWithoutFeedback } from "react-native";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import {
  borderColor,
  color2,
  color3,
  labelColor,
} from "../../constants/COLORS";
import { FONTS } from "../../constants/FONTFAMILY";

const CELL_COUNT = 4;

const Otp = () => {
  const [enableMask, setEnableMask] = useState(false);
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const renderCell = ({ index, symbol, isFocused }: any) => {
    let textChild = null;

    if (symbol) {
      textChild = enableMask ? "•" : symbol;
    } else if (isFocused) {
      textChild = <Cursor />;
    }

    return (
      <Text
        key={index}
        style={[styles.cell, isFocused && styles.focusCell]}
        onLayout={getCellOnLayoutHandler(index)}
      >
        {textChild}
      </Text>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Enter OTP <Text style={styles.star}>*</Text>{" "}
      </Text>
      <View style={styles.fieldRow}>
        <CodeField
          ref={ref}
          {...props}
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={renderCell}
        />
      </View>
      <View style={styles.assistive}>
        <Text
          style={{
            fontSize: 12,
            fontFamily: FONTS.Medium,
            paddingLeft: 8,
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
      <Text
        style={{
          fontSize: 12,
          fontFamily: FONTS.Medium,
          paddingLeft: 14,
          paddingTop: 5,
          color: color2,
        }}
      >
        Error Text
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: -10,
  },
  root: {
    padding: 20,
    minHeight: 300,
  },
  title: {
    fontSize: 14,
    fontFamily: FONTS.SemiBold,
    paddingLeft: 10,
    paddingBottom: 5,
  },
  fieldRow: {
    flexDirection: "row",
  },
  cell: {
    width: 55,
    height: 55,
    lineHeight: 55,
    fontSize: 16,
    fontWeight: "200",
    textAlign: "center",
    marginLeft: 8,
    borderRadius: 8,
    borderColor: borderColor,
    borderWidth: 1,
    fontFamily: FONTS.Medium,
  },
  toggle: {
    width: 55,
    height: 55,
    lineHeight: 55,
    fontSize: 24,
    textAlign: "center",
  },
  focusCell: {
    borderColor: "#000",
  },
  star: {
    color: color2,
  },
  assistive: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default Otp;
