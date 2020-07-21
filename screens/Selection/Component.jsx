import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { setUserInputScreen } from "../../actions/actions";

export default (props) => {
  const onPress = () => {
    props.dispatch(setUserInputScreen());
  };

  return (
    <View style={styles.mainView}>
      <Text>Welcome to THE Workout APP!!</Text>
      <Text>Select a Workout</Text>
      <View style={styles.buttonView}>
        <Button title={"HIIT Timer"} onPress={onPress} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  mainView: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  buttonView: {
    margin: 5,
  },
});
