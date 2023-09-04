import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { RestaurantsNavigator } from "./restaurants.navigator";
import { Text } from "react-native";

//Navigation ke liye
const Tab = createMaterialTopTabNavigator();
const Settings = () => <Text>Settings</Text>;
const Map = () => <Text>Map Screen</Text>;

//Icons Ke liye
const TAB_ICON = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  const size = 18;
  return {
    tabBarIcon: ({ color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    tabBarLabelStyle: { fontSize: 12 },
    tabBarItemStyle: { height: 55 },
    tabBarStyle: {
      height: 55,
      paddingTop: 2,
      marginTop: 1,
      borderColor: "black",
      borderTopWidth: 0.15,
    },
    tabBarActiveTintColor: "tomato",
    tabBarInactiveTintColor: "gray",
  };
};

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={createScreenOptions}>
        <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
        <Tab.Screen name="Map" component={Map} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
