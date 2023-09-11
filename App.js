import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/infrastructure/theme";
import SafeViewAndroid from "./src/utils/SafeViewAndroid";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { Navigation } from "./src/infrastructure/navigation";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

const firebaseConfig = {
  apiKey: "AIzaSyCIEn2MTvyqlPm9I5aWNAV-rY2_YJV5kes",
  authDomain: "mealstogo-31813.firebaseapp.com",
  projectId: "mealstogo-31813",
  storageBucket: "mealstogo-31813.appspot.com",
  messagingSenderId: "1023169438108",
  appId: "1:1023169438108:web:48ab8e186eaf565b332859",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

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
          <AuthenticationContextProvider>
            <FavouritesContextProvider>
              <LocationContextProvider>
                <RestaurantsContextProvider>
                  <Navigation />
                </RestaurantsContextProvider>
              </LocationContextProvider>
            </FavouritesContextProvider>
          </AuthenticationContextProvider>
        </SafeAreaView>
      </ThemeProvider>
      <StatusBar style="auto" />
    </>
  );
}
