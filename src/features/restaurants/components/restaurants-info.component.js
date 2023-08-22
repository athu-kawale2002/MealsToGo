import React from "react";
import { View, Text } from "react-native";
import { Card, Button } from "react-native-paper";

export const RestaurantsInfo = (restaurant = {}) => {
  const {
    name = "Eagle Restaurant",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  return (
    <View>
      <Card>
        <Card.Content>
          <Text variant="titleLarge">{name}</Text>
        </Card.Content>
        <Card.Cover source={{ uri: photos[0] }} />
        <Card.Content>
          <Text variant="bodyMedium">{address}</Text>
        </Card.Content>
      </Card>
    </View>
  );
};
