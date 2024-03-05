import React from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import { color1, labelColor } from "../../constants/COLORS";
import { FONTS } from "../../constants/FONTFAMILY";

interface CustomTabProps {
  item: {
    title: string;
  };
  handleSelect: () => void;
  index: number;
  selected: boolean;
  setSelectedOption: (index: number) => void;
}

const CustomTab: React.FC<CustomTabProps> = ({
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
          margin: "auto",
          alignItems:"center"
        }}
      >
        <Text
          style={{
            color: selected ? color1 : labelColor,
            fontSize: 12,
            fontFamily: FONTS.Medium,
            margin: "auto",
            alignItems:"center"

          }}
        >
          {item.title}
        </Text>
        <View
          style={{
            backgroundColor: selected ? color1 : "white",
            height: 4,
            width: 40,
            marginTop:5,
            alignItems:"center"
          }}
        ></View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CustomTab;
