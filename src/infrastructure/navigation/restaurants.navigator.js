import React from "react";

import {
  TransitionPresets,
  createStackNavigator,
} from "@react-navigation/stack";
import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screens";
import { RestaurantDetailsComponent } from "../../features/restaurants/screens/restaurants.details.screen";

const RestaurantsStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantsStack.Navigator
      screenOptions={{
        ...TransitionPresets.ScaleFromCenterAndroid,
        headerShown: false,
      }}
    >
      <RestaurantsStack.Screen
        name="Restaurants"
        component={RestaurantsScreen}
      />
      <RestaurantsStack.Screen
        name="RestaurantDetails"
        component={RestaurantDetailsComponent}
      />
    </RestaurantsStack.Navigator>
  );
};
