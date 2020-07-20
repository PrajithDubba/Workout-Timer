import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import Counter from "../Counter";
import * as Consts from "../../utils/Constants";
import { setRestMode } from "../../actions/actions";
export default (props) => {
  const onCounterComplete = () => {
    if (props.mode === Consts.WORK) {
      props.dispatch(setRestMode());
    } else {
      props.onIntervalComplete();
    }
  };

  return (
    <Counter
      counter={props.mode === "WORK" ? props.work : props.rest}
      onCounterComplete={onCounterComplete}
    />
  );
};

const styles = StyleSheet.create({});
