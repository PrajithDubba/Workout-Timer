import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Alert,
  Button,
} from "react-native";
import IntervalManager from "../../components/IntervalManager";
import {
  incrementRound,
  incrementInterval,
  setSelectionScreen,
} from "../../actions/actions";

export default (props) => {
  const [isWorkoutDone, setWorkoutDone] = useState(false);
  const onIntervalComplete = () => {
    if (props.currentInterval >= props.intervals) {
      if (props.currentRound >= props.rounds) {
        setWorkoutDone(true);
      } else {
        //update round.
        props.dispatch(incrementRound());
      }
    } else {
      //update interval
      props.dispatch(incrementInterval());
    }
  };

  const onCompleteButton = () => {
    props.dispatch(setSelectionScreen());
  };

  return (
    <View>
      {!isWorkoutDone ? (
        <View
          style={{
            ...styles.timerView,
            backgroundColor: props.mode === "WORK" ? "#90EE90" : "#FF4500",
          }}
        >
          <View style={styles.statsView}>
            <Text style={styles.text}>
              Round: {props.currentRound}/{props.rounds}
            </Text>
            <Text style={styles.text}>
              Interval: {props.currentInterval}/{props.intervals}
            </Text>
          </View>
          <IntervalManager onIntervalComplete={onIntervalComplete} />
        </View>
      ) : (
        <View>
          <Text>workout Complete</Text>
          <Button title="Okay" onPress={onCompleteButton} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  timerView: {
    height: "90%",
    width: Dimensions.get("window").width * 0.95,
    borderRadius: 10,
    color: "#fff",
  },

  statsView: {},
  text: {
    color: "#fff",
  },
});
