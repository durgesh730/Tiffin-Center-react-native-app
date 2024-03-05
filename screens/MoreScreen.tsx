import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FONTS } from "../constants/FONTFAMILY";
import { Entypo } from "@expo/vector-icons";

const MoreScreens = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          paddingVertical: 10,
          paddingHorizontal: 10,
        }}
      >
        <Text
          style={{
            fontFamily: FONTS.SemiBold,
            paddingHorizontal: 10,
            paddingVertical: 5,
            borderRadius: 50,
            fontSize: 14,
          }}
        >
          Profile
        </Text>
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingVertical: 10,
          paddingHorizontal: 15,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text>
            <AntDesign name="gift" size={24} color="black" />
          </Text>
          <Text
            style={{
              fontFamily: FONTS.Medium,
              paddingHorizontal: 10,
              paddingVertical: 5,
              borderRadius: 50,
              fontSize: 12,
            }}
          >
            Kitchen Info
          </Text>
        </View>
        <Text>
          <MaterialCommunityIcons name="greater-than" size={24} color="black" />
        </Text>
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingVertical: 10,
          paddingHorizontal: 15,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text>
            <Entypo name="notification" size={24} color="black" />
          </Text>
          <Text
            style={{
              fontFamily: FONTS.Medium,
              paddingHorizontal: 10,
              paddingVertical: 5,
              borderRadius: 50,
              fontSize: 12,
            }}
          >
            Notifictions
          </Text>
        </View>

        <Text>
          <MaterialCommunityIcons name="greater-than" size={24} color="black" />
        </Text>
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingVertical: 10,
          paddingHorizontal: 15,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text>
            <MaterialCommunityIcons
              name="human-male-board-poll"
              size={24}
              color="black"
            />
          </Text>
          <Text
            style={{
              fontFamily: FONTS.Medium,
              paddingHorizontal: 10,
              paddingVertical: 5,
              borderRadius: 50,
              fontSize: 12,
            }}
          >
            Manage Meals
          </Text>
        </View>
        <Text>
          <MaterialCommunityIcons name="greater-than" size={24} color="black" />
        </Text>
      </View>

      <Text
        style={{
          fontFamily: FONTS.SemiBold,
          paddingHorizontal: 10,
          paddingVertical: 5,
          borderRadius: 50,
          fontSize: 14,
        }}
      >
        Delivery Partner
      </Text>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingVertical: 10,
          paddingHorizontal: 15,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text>
            <MaterialCommunityIcons
              name="human-male-board-poll"
              size={24}
              color="black"
            />
          </Text>
          <Text
            style={{
              fontFamily: FONTS.Medium,
              paddingHorizontal: 10,
              paddingVertical: 5,
              borderRadius: 50,
              fontSize: 12,
            }}
          >
            Add Delivery Partner
          </Text>
        </View>
        <Text>
          <MaterialCommunityIcons name="greater-than" size={24} color="black" />
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
});

export default MoreScreens;
