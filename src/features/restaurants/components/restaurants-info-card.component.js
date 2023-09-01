import React from "react";
import { View } from "react-native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
// import { Spacer } from "../../../components/spacer/components.spacer";
import {
  Title,
  Address,
  Rating,
  Section,
  SectionEnd,
  TempClose,
  SpaceView,
  Image15,
  BoderCard,
  CardCover,
} from "./restaurants-info-card.styles";

export const RestaurantsInfoCard = ({ restaurant }) => {
  // console.log(restaurant);
  const {
    name = "Eagle Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    vicinity = "100 some random street", //address is also called as vicinity
    isOpenNow = true,
    placeId,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <View>
      <BoderCard elevation={7}>
        <CardCover source={{ uri: photos[0] }} />
        <Card.Content>
          <Title variant="bodyMedium">{name}</Title>
          <Section>
            <Rating>
              {ratingArray.map((_, i) => (
                <SvgXml
                  key={`star-${placeId}-${i}`}
                  xml={star}
                  width={20}
                  height={20}
                />
              ))}
            </Rating>
            <SectionEnd>
              {isClosedTemporarily && (
                <TempClose variant="label">CLOSED TEMPORARILY</TempClose>
              )}
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
              <SpaceView />
              <Image15 source={{ uri: icon }} />
            </SectionEnd>
          </Section>
          <Address>{vicinity}</Address>
        </Card.Content>
      </BoderCard>
    </View>
  );
};
