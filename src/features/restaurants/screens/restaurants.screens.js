import React from "react";
import { SafeAreaView } from "react-native";
import SafeViewAndroid from "../../../utils/SafeViewAndroid";
import { Searchbar } from "react-native-paper";
import { RestaurantsInfoCard } from "../components/restaurants-info-card.component";
import { styled } from "styled-components";

const SearchView = styled.View`
  padding: 16px;
`;

const ListView = styled.View`
  flex: 1;
  padding: 16px;
`;

const SearchBarTop = styled(Searchbar)`
  border-radius: 7px;
`;

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState(null);
  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <SearchView>
        <SearchBarTop
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </SearchView>
      <ListView>
        <RestaurantsInfoCard />
      </ListView>
    </SafeAreaView>
  );
};
