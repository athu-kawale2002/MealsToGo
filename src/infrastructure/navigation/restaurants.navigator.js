import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screens";
import { Text } from "react-native";

const RestaurantsStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantsStack.Navigator screenOptions={{ headerShown: false }}>
      <RestaurantsStack.Screen
        name="Restaurants"
        component={RestaurantsScreen}
      />
      <RestaurantsStack.Screen
        name="RestaurantDetails"
        component={() => <Text>RestaurantDetails bro</Text>}
      />
    </RestaurantsStack.Navigator>
  );
};
