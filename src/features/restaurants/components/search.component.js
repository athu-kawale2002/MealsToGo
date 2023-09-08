import React, { useContext, useState, useEffect } from "react";
import { styled } from "styled-components";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../../services/location/location.context";
const SearchView = styled.View`
  padding: ${(props) => props.theme.space[2]};
  border-color: grey;
  border-bottom-width: 0.19px;
`;

const SearchBarTop = styled(Searchbar)`
  border-radius: ${(props) => props.theme.space[2]};
  height: 55px;
`;

export const Search = ({ isFavToggle, onFavToggle }) => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);
  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);
  return (
    <SearchView>
      <SearchBarTop
        icon={isFavToggle ? "heart" : "heart-outline"}
        onIconPress={onFavToggle}
        lightTheme
        placeholder="Search for a location"
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
        // value={searchQuery}
      />
    </SearchView>
  );
};
