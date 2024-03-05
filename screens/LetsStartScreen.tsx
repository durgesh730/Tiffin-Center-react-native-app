import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  TouchableWithoutFeedback,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FONTS } from "../constants/FONTFAMILY";
import StepIndicator from "react-native-step-indicator";
import { color1 } from "../constants/COLORS";
import Button from "../components/common/Button";

const CustomStep = ({ label, info, edit, isActive }: any) => (
  <View style={styles.stepContainer}>
    <Text style={[styles.stepLabel, isActive && styles.activeStepLabel]}>
      {label}
    </Text>

    <View style={{ paddingLeft: 10 }}>
      <Text style={{ fontSize: 14, fontFamily: FONTS.Medium, paddingTop: 5 }}>
        {info}
      </Text>
      <TouchableWithoutFeedback>
        <View>
          {edit && (
            <Text
              style={{
                fontSize: 14,
                fontFamily: FONTS.Bold,
                color: color1,
                paddingTop: 5,
              }}
            >
              {edit}
            </Text>
          )}
        </View>
      </TouchableWithoutFeedback>
    </View>
  </View>
);

const LetsStartScreen = ({ navigation }: any) => {
  const yourCustomStyles = {
    stepIndicatorSize: 30,
    currentStepIndicatorSize: 30,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeWidth: 2,

    stepStrokeCurrentColor: color1,

    stepStrokeUnFinishedColor: "#D1D5DB",
    stepStrokeFinishedColor: color1,

    separatorUnFinishedColor: "#D1D5DB",
    separatorFinishedColor: color1,

    stepIndicatorFinishedColor: "white",
    stepIndicatorUnFinishedColor: "white",
    stepIndicatorCurrentColor: "white",

    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: "white",
    stepIndicatorLabelFinishedColor: "white",
    stepIndicatorLabelUnFinishedColor: "black",
  };

  const { height } = useWindowDimensions();
  const handleSignInPress = () => {
    navigation.push("KitchenOpenLunchScreen");
  };
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { label: "Step 01", info: "Kitchen Info", edit: "Edit" },
    { label: "Step 02", info: "Restaurant Documents", edit: "Edit" },
    { label: "Step 03", info: "Menu Set-up" },
    { label: "Step 04", info: "Add Add-Ons" },
    { label: "Step 05", info: "Contract         " },
  ];

  const handleStepPress = (step: number) => {
    setCurrentStep(step);
    if (step == 0) {
      navigation.push("KitchenInfo");
    }
    if (step == 1) {
      navigation.push("KitchenDoucuments");
    }
    if (step == 2) {
      navigation.push("KitchenDoucuments");
    }
    if (step == 3) {
      navigation.push("AddOns");
    }
  };

  const renderStepIndicator = ({ position, stepStatus }: any) => {
    const backgroundColor =
      stepStatus === "finished" || stepStatus === "current" ? color1 : "white";

    return (
      <View
        style={{
          width: 10,
          height: 10,
          borderRadius: 100,
          backgroundColor,
        }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Let's get you Started</Text>
      <View
        style={{
          width: "100%",
          height: height * 0.18,
          backgroundColor: "#999",
        }}
      ></View>

      <View
        style={{
          flex: 1,
          width: 200,
          paddingLeft: 20,
        }}
      >
        <StepIndicator
          stepCount={steps.length}
          customStyles={yourCustomStyles}
          currentPosition={currentStep}
          labels={steps.map((step) => step.label)}
          onPress={(step) => handleStepPress(step)}
          direction="vertical"
          renderStepIndicator={renderStepIndicator}
          renderLabel={({ position, stepStatus }) => (
            <CustomStep
              label={steps[position].label}
              info={steps[position].info}
              edit={steps[position].edit}
              isActive={stepStatus === "current" || stepStatus === "finished"}
            />
          )}
        />
      </View>

      <View style={{ paddingVertical: 20, paddingHorizontal: 20 }}>
        <Button
          isActive={true}
          handleSignInPress={handleSignInPress}
          title="Proceed"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: 24,
    fontWeight: "600",
    fontFamily: FONTS.SemiBold,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  stepContainer: {
    paddingVertical: 0,
    paddingLeft: 10,
  },
  stepLabel: {
    fontSize: 14,
    fontFamily: FONTS.Regular,
    paddingLeft: 10,
    color: "gray",
  },
  activeStepLabel: {
    color: "gray",
  },
});

export default LetsStartScreen;
