import React, { useContext, useState } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { RestaurantsInfoCard } from "../components/restaurants-info-card.component";
import { styled } from "styled-components";
import { Spacer } from "../../../components/spacer/components.spacer";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { Search } from "../components/search.component";
import { FavouritesBar } from "../../../favourites/favourites-bar.component";
import { FavouritesContext } from "../../../services/favourites/favourites.context";

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

export const RestaurantsScreen = ({ navigation }) => {
  // console.log(navigation);
  const { restaurants, isLoading } = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false);
  // <ActivityIndicator animating={true} color={Colors.red800} />
  return (
    <>
      <BackGroundView>
        <Search
          isFavToggle={isToggled}
          onFavToggle={() => setIsToggled(!isToggled)}
        />
        {isToggled && (
          <FavouritesBar
            favourites={favourites}
            onNavigate={navigation.navigate}
          />
        )}
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
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() =>
                    navigation.navigate("RestaurantDetails", {
                      restaurant: item,
                    })
                  }
                >
                  <Spacer position="bottom" size="large">
                    <RestaurantsInfoCard restaurant={item} />
                  </Spacer>
                </TouchableOpacity>
              );
            }}
            keyExtractor={(item) => item.name}
          />
        </ListView>
      </BackGroundView>
    </>
  );
};
