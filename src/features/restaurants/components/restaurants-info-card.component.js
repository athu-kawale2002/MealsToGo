import React from "react";
import { View, Image } from "react-native";
import { Card } from "react-native-paper";
import { styled } from "styled-components";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";

const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  padding-top: ${(props) => props.theme.space[2]};
  font-size: ${(props) => props.theme.fontSizes.body};
`;

const Address = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.caption};
  font-family: ${(props) => props.theme.fonts.body};
`;

const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[1]};
  padding-bottom: ${(props) => props.theme.space[1]};
`;

const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;

const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

const TempClose = styled.Text`
  color: red;
  padding-right: 10px;
  padding-bottom: 2.5px;
`;

const SpaceView = styled.View`
  padding-left: 10px;
`;

export const RestaurantsInfoCard = (restaurant = {}) => {
  const {
    name = "Eagle Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <View>
      <Card elevation={7}>
        <Card.Cover source={{ uri: photos[0] }} />
        <Card.Content>
          <Title variant="bodyMedium">{name}</Title>
          <Section>
            <Rating>
              {ratingArray.map(() => (
                <SvgXml xml={star} width={20} height={20} />
              ))}
            </Rating>
            <SectionEnd>
              {isClosedTemporarily && (
                <TempClose variant="label">CLOSED TEMPORARILY</TempClose>
              )}
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
              <SpaceView />
              <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
            </SectionEnd>
          </Section>
          <Address>{address}</Address>
        </Card.Content>
      </Card>
    </View>
  );
};
