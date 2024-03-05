import React, { useRef, useState } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import { Checkbox, Switch } from "react-native-paper";
import { Feather } from "@expo/vector-icons";
import DateDays from "../components/KitchenOpen/DateDays";
import CustomTab from "../components/common/CustomTab";
import { SM, XL } from "../constants/SPACING";
import EconomyLunchCard from "../components/KitchenOpen/EconomyLunchCard";
import { FONTS } from "../constants/FONTFAMILY";
import { color1 } from "../constants/COLORS";
import OrderCards from "../components/KitchenOpen/OrderCards";
import CustomBottomSheet from "../components/common/CustomBottomSheet";
import RBSheet from "@nonam4/react-native-bottom-sheet";
import FilterBy from "../components/KitchenOpen/FilterBy";

const KitchenOpenScreen = ({ navigation }: any) => {
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

  const [checked, setChecked] = React.useState(false);
  const refRBSheet = useRef<RBSheet | null>(null);

  const openBottomSheet = () => {
    refRBSheet.current?.open();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.heading}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 40,
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
          style={{ paddingTop: 20 }}
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

      <ScrollView style={{ marginTop: SM, paddingHorizontal: 10 }}>
        <View>
          <EconomyLunchCard />
        </View>

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
              backgroundColor: color1,
              color: "white",
              paddingHorizontal: 10,
              paddingVertical: 5,
              borderRadius: 50,
            }}
          >
            Preparing
          </Text>
          <Text
            style={{
              fontFamily: FONTS.Regular,
              backgroundColor: "#9DA3AE",
              color: "#4D5562",
              paddingHorizontal: 10,
              paddingVertical: 5,
              borderRadius: 50,
            }}
          >
            Ready
          </Text>
          <Text
            style={{
              fontFamily: FONTS.Regular,
              backgroundColor: "#9DA3AE",
              color: "#4D5562",
              paddingHorizontal: 10,
              paddingVertical: 5,
              borderRadius: 50,
            }}
          >
            Delivered
          </Text>
        </View>

        <View
          style={{
            paddingHorizontal: 10,
            paddingVertical: 0,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontFamily: FONTS.Medium,
            }}
          >
            Showing 10 Orders
          </Text>
          <TouchableWithoutFeedback onPress={openBottomSheet}>
            <View
              style={{
                paddingHorizontal: 12,
                paddingVertical: 6,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#9DA3AE",
                borderRadius: 50,
              }}
            >
              <Text
                style={{
                  fontFamily: FONTS.Regular,
                  fontSize: 12,
                }}
              >
                i
              </Text>
              <Text
                style={{
                  fontFamily: FONTS.Regular,
                  fontSize: 12,
                  paddingLeft: 5,
                }}
              >
                Filter
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>

        <FilterBy refRBSheet={refRBSheet} openBottomSheet={openBottomSheet} />

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: 10,
            paddingHorizontal: 4,
          }}
        >
          <Checkbox
            status={checked ? "checked" : "unchecked"}
            onPress={() => {
              setChecked(!checked);
            }}
          />
          <Text
            style={{
              fontFamily: FONTS.Medium,
              fontSize: 14,
              paddingLeft: 5,
            }}
          >
            Select All
          </Text>
        </View>

        <View>
          <View>
            <OrderCards />
          </View>
          <View style={{ paddingTop: 10 }}>
            <OrderCards />
          </View>
          <View style={{ paddingTop: 10 }}>
            <OrderCards />
          </View>
          <View style={{ paddingTop: 10 }}>
            <OrderCards />
          </View>
          <View style={{ paddingTop: 10 }}>
            <OrderCards />
          </View>
          <View style={{ paddingTop: 10 }}>
            <OrderCards />
          </View>
          <View style={{ paddingTop: 10 }}>
            <OrderCards />
          </View>
          <View style={{ paddingTop: 10 }}>
            <OrderCards />
          </View>
          <View style={{ paddingTop: 10, paddingBottom: 30 }}>
            <OrderCards />
          </View>
        </View>
      </ScrollView>
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

export default KitchenOpenScreen;
