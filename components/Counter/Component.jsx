import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet } from "react-native";
import { setStatusBarNetworkActivityIndicatorVisible } from "expo-status-bar";

export default (props) => {
  const [count, updateCount] = useState(props.counter);
  const [isTimerON, setTimerON] = useState(false);
  let timer = useRef();

  useEffect(() => {
    if (!isTimerON) {
      if (count && count > 1) {
        setTimerON(true);
        timer.current = setInterval(() => {
          updateCount((count) => count - 1);
        }, 1000);
      }
    } else if (count <= 1) {
      setTimerON(false);
      clearInterval(timer.current);
      setTimeout(() => {
        props.onCounterComplete();
      }, 1000);
    }
  }, [count]);

  useEffect(() => {
    updateCount(props.counter);
  }, [props.counter]);

  return (
    <View style={styles.counterView}>
      <Text style={styles.modeText}>{props.mode}</Text>
      <Text style={styles.text}>{count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#fff",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 150,
  },
  modeText: {
    color: "#fff",
  },
  counterView: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  work: {
    backgroundColor: "#90EE90",
  },
  rest: {
    backgroundColor: "#FF4500",
  },
});
