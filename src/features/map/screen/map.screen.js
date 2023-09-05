import React from "react";
import MapView from "react-native-maps";
import { styled } from "styled-components";
import { MapSearch } from "../components/map.search.component";

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;
export const MapScreen = () => {
  return (
    <>
      <MapSearch />
      <Map />
    </>
  );
};
