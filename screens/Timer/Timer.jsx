import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions, Alert } from "react-native";
import IntervalManager from "../../components/IntervalManager";
import { incrementRound, incrementInterval } from "../../actions/actions";

export default (props) => {
  const onIntervalComplete = () => {
    if (props.currentInterval >= props.intervals) {
      //update rounds.
      if (props.currentRound >= props.rounds) {
        //workout complete
      } else {
        //update round.
        props.dispatch(incrementRound());
      }
    } else {
      //update interval
      props.dispatch(incrementInterval());
    }
  };
  return (
    <View>
      {!props.isWorkoutDone ? (
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
          <Text>Workout Done!!!!</Text>
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
