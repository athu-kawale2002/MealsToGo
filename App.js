import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import SafeViewAndroid from "./src/utils/SafeViewAndroid";
import { Searchbar } from "react-native-paper";

export default function App() {
  const [searchQuery, setSearchQuery] = React.useState(null);
  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <>
      <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
        <View style={styles.search}>
          <Searchbar
            style={styles.searchBar}
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
          <StatusBar style="auto" />
        </View>
        <View style={styles.List}>
          <Text>List</Text>
        </View>
        <StatusBar style="auto" />
      </SafeAreaView>
    </>
  );
}

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
