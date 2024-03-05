import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import LoginScreen from "../screens/LoginScreen";
import KitchenInfoScreen from "../screens/KitchenInfoScreen";
import KitchenDocuments from "../screens/KitchenDocuments";
import AddMealsScreen from "../screens/AddMealsScreen";
import AddOnsScreen from "../screens/AddOnsScreen";
import AgreementScreen from "../screens/AgreementScreen";
import KitchenOpenScreen from "../screens/KitchenOpenScreen";
import KitchenOpenLunchScreen from "../screens/KitchenOpenLunchScreen";
import EarningsScreen from "../screens/EarningsScreen";
import ReviewsScreens from "../screens/ReviewsScreens";
import NotificationsScreen from "../screens/NotificationsScreen";
import MoreScreens from "../screens/MoreScreen";
import AddDeliveryPartnerScreen from "../screens/AddDeliveryPartnerScreen";
import OffersScreens from "../screens/OffersScreens";
import CreateYourOfferScreen from "../screens/CreateYourOfferScreen";
import MyMealsScreen from "../screens/MyMealsScreen";
import LetsStartScreen from "../screens/LetsStartScreen";

const HomeNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Lets Start Screen"
        component={LetsStartScreen}
      />
      <Stack.Screen
        options={{ headerShown: true }}
        name="KitchenInfo"
        component={KitchenInfoScreen}
      />
      <Stack.Screen
        options={{ headerShown: true }}
        name="KitchenDoucuments"
        component={KitchenDocuments}
      />
      <Stack.Screen
        options={{ headerShown: true }}
        name="AddMeals"
        component={AddMealsScreen}
      />

      <Stack.Screen
        options={{ headerShown: true }}
        name="AddOns"
        component={AddOnsScreen}
      />
      <Stack.Screen
        options={{ headerShown: true }}
        name="Agreement"
        component={AgreementScreen}
      />

      <Stack.Screen
        options={{ headerShown: false }}
        name="KitchenOpen"
        component={KitchenOpenScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="KitchenOpenLunchScreen"
        component={KitchenOpenLunchScreen}
      />

      {/* <Stack.Screen
        options={{ headerShown: true }}
        name="Earning"
        component={EarningsScreen}
      /> */}
      {/* <Stack.Screen
        options={{ headerShown: true }}
        name="Earning"
        component={ReviewsScreens}
      /> */}

      {/* <Stack.Screen
        options={{ headerShown: true }}
        name="Notifictions"
        component={NotificationsScreen}
      /> */}
      {/* <Stack.Screen
        options={{ headerShown: true }}
        name="Notifictions"
        component={MoreScreens}
      /> */}
      {/* <Stack.Screen
        options={{ headerShown: true }}
        name="Add Delivery Partner"
        component={AddDeliveryPartnerScreen}
      /> */}

      {/* <Stack.Screen
        options={{ headerShown: true }}
        name="Add Delivery Partner"
        component={OffersScreens}
      /> */}
      {/* <Stack.Screen
        options={{ headerShown: true }}
        name="Add Delivery Partner"
        component={CreateYourOfferScreen}
      /> */}
      {/* <Stack.Screen
        options={{ headerShown: true }}
        name="My Meals"
        component={MyMealsScreen}
      /> */}
      {/* <Stack.Screen
        options={{ headerShown: true }}
        name="My Meals"
        component={MyMealsScreen}
      /> */}
      {/* <Stack.Screen
        options={{ headerShown: false }}
        name="My Meals"
        component={LetsStartScreen}
      /> */}
    </Stack.Navigator>
  );
};

export default HomeNavigation;
