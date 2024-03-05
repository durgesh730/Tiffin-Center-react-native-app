import React, { useState } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text,
  StatusBar,
} from "react-native";
import { Switch } from "react-native-paper";
import { Feather } from "@expo/vector-icons";
import DateDays from "../components/KitchenOpen/DateDays";
import CustomTab from "../components/common/CustomTab";
import { XL } from "../constants/SPACING";
import EconomyLunchCard from "../components/KitchenOpen/EconomyLunchCard";
import { FONTS } from "../constants/FONTFAMILY";
import { color1 } from "../constants/COLORS";
import Pareparing from "../components/KitchenOpen/Pareparing";
import Ready from "../components/KitchenOpen/Ready";
import Delivered from "../components/KitchenOpen/Delivered";

const KitchenOpenLunchScreen = ({ navigation }: any) => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(true);
  const [selectedCardIndex, setSelectedCardIndex] = useState(0);
  const [tab, setTab] = useState(0);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  const days = [
    {
      title: "WED",
      description: "12",
    },
    {
      title: "WED",
      description: "12",
    },
    {
      title: "WED",
      description: "12",
    },
    {
      title: "WED",
      description: "12",
    },
    {
      title: "WED",
      description: "12",
    },
    {
      title: "WED",
      description: "12",
    },
    {
      title: "WED",
      description: "12",
    },
  ];

  const tabs = [
    {
      title: "Preparing",
    },
    {
      title: "Ready",
    },
    {
      title: "Delivered",
    },
  ];

  const handleMealTypeSelect = (index: number) => {
    setSelectedCardIndex(index);
  };

  const handleTabs = (index: number) => {
    setTab(index);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={styles.heading}>
        <View style={{ backgroundColor: "#f5f0ff", marginTop:5 }}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
            <View style={{ paddingRight: 20 }}>
              <Feather name="bell" size={24} color="black" />
            </View>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ paddingTop: 10 }}
          >
            <View style={styles.scrollContainer}>
              {days.map((item, index) => (
                <DateDays
                  key={index}
                  item={item}
                  handleSelect={() => handleMealTypeSelect(index)}
                  selected={selectedCardIndex === index}
                  index={index}
                  setSelectedOption={setSelectedCardIndex}
                />
              ))}
            </View>
          </ScrollView>

          <View
            style={{
              paddingHorizontal: 10,
              paddingTop: 15,
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 20,
              paddingBottom: 15,
            }}
          >
            <Text
              style={{
                fontFamily: FONTS.Regular,
                color: "#4D5562",
                paddingHorizontal: 10,
                paddingVertical: 5,
                borderRadius: 50,
              }}
            >
              Breakfast
            </Text>
            <Text
              style={{
                fontFamily: FONTS.Regular,
                color: color1,
                paddingHorizontal: 20,
                paddingVertical: 5,
                borderRadius: 4,
                borderWidth: 1,
                borderColor: color1,
                backgroundColor: "#fff",
              }}
            >
              Lunch
            </Text>
            <Text
              style={{
                fontFamily: FONTS.Regular,
                color: "#4D5562",
                paddingHorizontal: 10,
                paddingVertical: 5,
                borderRadius: 50,
              }}
            >
              Dinner
            </Text>
          </View>

          <View
            style={{
              paddingHorizontal: 10,
              paddingBottom: 10,
            }}
          >
            <EconomyLunchCard />
          </View>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ paddingTop: 20 }}
        >
          <View style={styles.TabContainer}>
            {tabs.map((item, index) => (
              <CustomTab
                key={index}
                item={item}
                handleSelect={() => handleTabs(index)}
                selected={tab === index}
                index={index}
                setSelectedOption={setTab}
              />
            ))}
          </View>
        </ScrollView>

        <View
          style={{
            backgroundColor: "#D9D9D9",
            height: 1,
            width: "100%",
            alignItems: "center",
          }}
        ></View>
      </View>

      {tab == 0 && <Pareparing />}
      {tab == 1 && <Ready />}
      {tab == 2 && <Delivered />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  heading: {
    // position:"ab"
  },
  safeArea: {
    backgroundColor: "white",
    paddingBottom: 10,
  },
  section: {
    paddingVertical: 16,
  },
  title: {
    fontSize: 16,
    marginBottom: 8,
  },
  scrollContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  TabContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    margin: "auto",
    gap: 50,
    alignItems: "center",
    paddingHorizontal: XL,
  },
});

export default KitchenOpenLunchScreen;
