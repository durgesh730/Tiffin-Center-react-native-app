import React, { useState } from "react";
import { View, Text } from "react-native";
import { Slider } from "react-native-range-slider-expo";
import { color1 } from "../../constants/COLORS";

export default function CustomSlider() {
  const [value, setValue] = useState();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Slider
        min={0}
        max={100}
        step={5}
        valueOnChange={(value: any) => setValue(value)}
        initialValue={0}
        knobColor={color1}
        inRangeBarColor="#F3F4F6"
        outOfRangeBarColor={color1}
      />
    </View>
  );
}
