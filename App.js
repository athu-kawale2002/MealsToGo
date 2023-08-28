import React from "react";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screens";
import { StatusBar } from "expo-status-bar";
import { Text, SafeAreaView } from "react-native";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/infrastructure/theme";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import SafeViewAndroid from "./src/utils/SafeViewAndroid";
import { Ionicons } from "@expo/vector-icons";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { NavigationContainer } from "@react-navigation/native";

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
  };
};

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        {/* <RestaurantsScreen /> */}
        <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
          <NavigationContainer>
            <Tab.Navigator
              screenOptions={createScreenOptions}
              tabBarOptions={{
                activeTintColor: "tomato",
                inactiveTintColor: "gray",
              }}
            >
              <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
              <Tab.Screen name="Map" component={Map} />
              <Tab.Screen name="Settings" component={Settings} />
            </Tab.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      </ThemeProvider>
      <StatusBar style="auto" />
    </>
  );
}
