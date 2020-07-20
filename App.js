import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import createStore from "./reducers/reducer";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Timer from "./screens/Timer";

export default function App() {
  const store = createStore();
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Timer />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    marginVertical: 15,
  },
});
