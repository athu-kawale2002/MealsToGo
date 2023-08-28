import React from "react";
import { FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantsInfoCard } from "../components/restaurants-info-card.component";
import { styled } from "styled-components";
import { Spacer } from "../../../components/spacer/components.spacer";

const SearchView = styled.View`
  padding: ${(props) => props.theme.space[2]};
  border-color: grey;
  border-bottom-width: 0.19px;
`;

const SearchBarTop = styled(Searchbar)`
  border-radius: ${(props) => props.theme.space[2]};
  height: 55px;
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const BackGroundView = styled.View`
  background-color: ${(props) => props.theme.colors.ui.torary};
`;

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState(null);
  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <>
      <BackGroundView>
        <SearchView>
          <SearchBarTop
            lightTheme
            placeholder="Search Something . . ."
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
        </SearchView>
        <RestaurantList
          data={[
            { name: 1 },
            { name: 2 },
            { name: 3 },
            { name: 4 },
            { name: 5 },
            { name: 6 },
            { name: 7 },
            { name: 8 },
            { name: 9 },
            { name: 10 },
            { name: 11 },
            { name: 12 },
            { name: 13 },
            { name: 14 },
          ]}
          renderItem={() => (
            <Spacer position="bottom" size="large">
              <RestaurantsInfoCard />
            </Spacer>
          )}
          keyExtractor={(item) => item.name}
        />
      </BackGroundView>
    </>
  );
};
