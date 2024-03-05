import React from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import { labelColor } from "../../constants/COLORS";
import { FONTS } from "../../constants/FONTFAMILY";

interface DateDaysProps {
  item: {
    title: string;
    description: string;
  };
  handleSelect: () => void;
  index: number;
  selected: boolean;
  setSelectedOption: (index: number) => void;
}

const DateDays: React.FC<DateDaysProps> = ({
  item,
  handleSelect,
  index,
  selected,
  setSelectedOption,
}) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        setSelectedOption(index);
        handleSelect();
      }}
    >
      <View
        style={{
          width: 60,
          height: 60,
          backgroundColor: selected ? "#743EE4" : "#f5f0ff",
          borderRadius: 8,
          marginVertical: 2,
          marginHorizontal: 5,
          padding: 8,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: selected ? "white" : labelColor,
            fontSize: 12,
            fontFamily: FONTS.Medium,
            paddingTop: 2,
          }}
        >
          {item.title}
        </Text>
        <Text
          style={{
            fontSize: 12,
            color: selected ? "white" : labelColor,
            paddingTop: 2,
            fontFamily: FONTS.Medium,
          }}
        >
          {item.description}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default DateDays;
