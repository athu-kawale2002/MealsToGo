import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import SafeViewAndroid from "../../../utils/SafeViewAndroid";
import { Searchbar } from "react-native-paper";
import { RestaurantsInfo } from "../components/restaurants-info.component";

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState(null);
  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <View style={styles.search}>
        <Searchbar
          style={styles.searchBar}
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>
      <View style={styles.List}>
        <RestaurantsInfo />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  search: {
    backgroundColor: "lightgreen",
    padding: 16,
  },
  List: {
    flex: 1,
    padding: 16,
    backgroundColor: "lightblue",
  },
  searchBar: {
    borderRadius: 7,
  },
});
