import React from "react";
import { View } from "react-native";
import { Card } from "react-native-paper";
import { styled } from "styled-components";

const Title = styled.Text`
  padding-top: 10px;
`;

export const RestaurantsInfoCard = (restaurant = {}) => {
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
      <Card elevation={7}>
        <Card.Cover source={{ uri: photos[0] }} />
        <Card.Content>
          <Title variant="bodyMedium">{address}</Title>
        </Card.Content>
      </Card>
    </View>
  );
};
