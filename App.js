import { StatusBar } from "expo-status-bar";
import { Provider, connect } from "react-redux";
import createStore from "./reducers/reducer";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Consts from "./utils/Constants";
import Timer from "./screens/Timer";
import Selection from "./screens/Selection";
import UserInput from "./screens/UserInput";

const component = (props) => {
  return (
    <View style={styles.container}>
      {props.currentScreen === Consts.SELECTION_SCREEN && <Selection />}
      {props.currentScreen === Consts.USER_INPUT_SCREEEN && <UserInput />}
      {props.currentScreen === Consts.TIMER_SCREEN && <Timer />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    marginVertical: 15,
  },
});

const mapStateToProps = (state) => {
  return {
    currentScreen: state.screen.currentScreen,
  };
};
const App = connect(mapStateToProps)(component);

export default () => {
  const store = createStore();
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
