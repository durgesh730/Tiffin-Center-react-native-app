import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  TouchableWithoutFeedback,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MD, XL } from "../constants/SPACING";

import Button from "../components/common/Button";
import { color3 } from "../constants/COLORS";
import { FONTS } from "../constants/FONTFAMILY";
import Login from "../components/Login/Login";
import Otp from "../components/Login/Otp";

const LoginScreen = ({ navigation }: any) => {
  const [isActive, setIsActive] = useState(false);
  const { height, width } = useWindowDimensions();
 
  const HandleLogin = () => {
    setIsActive(true);
    if (isActive) {
      navigation.push("Lets Start Screen");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Log in</Text>
      <View
        style={{
          width: "100%",
          height: height * 0.18,
          backgroundColor: "#999",
        }}
      ></View>
      <View
        style={{
          padding: MD,
          height: "100%",
        }}
      >
        {!isActive ? <Login /> : <Otp />}

        <Button
          isActive={isActive}
          handleSignInPress={HandleLogin}
          title="Log In"
        />

        <View
          style={{
            position: "absolute",
            top: height * 0.6,
            left: width * 0.25,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 12,
              fontFamily: "Inter_500Medium",
            }}
          >
            Don't have an account?{" "}
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
                Sign Up?
              </Text>
            </TouchableWithoutFeedback>
          </Text>
        </View>
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
    fontSize: 32,
    fontWeight: "600",
    padding: XL,
    fontFamily: FONTS.SemiBold,
  },
});

export default LoginScreen;
