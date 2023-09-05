import React, { useContext, useEffect, useState } from "react";
import { styled } from "styled-components";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../../services/location/location.context";
const SearchView = styled.View`
  position: absolute;
  z-index: 999;
  width: 100%;
  padding: 20px;
`;

const SearchBarTop = styled(Searchbar)`
  border-radius: 5px;
  border-color: black;
  border-width: 0.6px;
  height: 55px;
  justify-content: center;
  text-align: center;
  background-color: transparent;
`;

export const MapSearch = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);
  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);
  return (
    <SearchView>
      <SearchBarTop
        lightTheme
        icon="map"
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
