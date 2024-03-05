import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import CustomTab from "../components/common/CustomTab";
import { XL } from "../constants/SPACING";
import EarningDue from "../components/Earning/EarningDue";
import Payout from "../components/Earning/Payout";
import Analytics from "../components/Earning/Analytics";

const EarningsScreen = () => {
  const [tab, setTab] = useState(0);

  const tabs = [
    {
      title: "Earning Due",
    },
    {
      title: "Payout",
    },
    {
      title: "Statistics",
    },
  ];

  const handleTabs = (index: number) => {
    setTab(index);
  };

  return (
    <ScrollView style={styles.container}>
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

      {tab == 0 && <EarningDue />}
      {tab == 1 && <Payout />}
      {tab == 2 && <Analytics />}
    </ScrollView>
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

export default EarningsScreen;
