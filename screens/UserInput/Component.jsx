import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { setTimerScreen } from "../../actions/actions";

export default (props) => {
  const onPress = () => {
    props.dispatch(setTimerScreen());
  };
  return (
    <View>
      <Text>User Input Screen</Text>
      <Button title={"Start Workout"} onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainScreen: {
    alignItems: "center",
    justifyContent: "center",
  },
});
