import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import SafeViewAndroid from "./src/utils/SafeViewAndroid";

export default function App() {
  return (
    <>
      <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
        <View style={styles.container1}>
          <Text>Search is here</Text>
          <StatusBar style="auto" />
        </View>
        <View style={styles.container2}>
          <Text>List is here</Text>
        </View>
        <StatusBar style="auto" />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container1: {
    backgroundColor: "lightgreen",
    padding: 16,
  },
  container2: {
    flex: 1,
    padding: 16,
    backgroundColor: "lightblue",
  },
});
