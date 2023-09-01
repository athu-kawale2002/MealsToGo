import React, { useContext } from "react";
import { FlatList } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { RestaurantsInfoCard } from "../components/restaurants-info-card.component";
import { styled } from "styled-components";
import { Spacer } from "../../../components/spacer/components.spacer";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { Search } from "../components/search.component";

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const BackGroundView = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.ui.torary};
`;

const Loading = styled(ActivityIndicator)`
  margin-right: 50%;
  margin-left: 50%;
  margin-top: 50%;
  margin-bottom: 50%;
`;
const LoadingContainer = styled.View`
  position: "absolute";
`;

const ListView = styled.View`
  margin-bottom: ${(props) => props.theme.space[5]};
`;

export const RestaurantsScreen = () => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);
  // <ActivityIndicator animating={true} color={Colors.red800} />
  return (
    <>
      <BackGroundView>
        <Search />
        <ListView>
          {isLoading && (
            <LoadingContainer>
              <Loading size={55} animating={true} color={"#686868"} />
            </LoadingContainer>
          )}
          <RestaurantList
            key={({ item }) => {
              return { item };
            }}
            data={restaurants}
            renderItem={({ item }) => {
              return (
                <Spacer position="bottom" size="large">
                  <RestaurantsInfoCard restaurant={item} />
                </Spacer>
              );
            }}
            keyExtractor={(item) => item.name}
          />
        </ListView>
      </BackGroundView>
    </>
  );
};
