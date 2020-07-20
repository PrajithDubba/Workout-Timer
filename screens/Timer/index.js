import Component from "./Timer";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    intervals: state.timer.intervals,
    rounds: state.timer.rounds,
    currentRound: state.timer.currentRound,
    currentInterval: state.timer.currentInterval,
    isWorkoutDone: state.timer.isWorkoutDone,
    mode: state.timer.mode,
  };
};

export default connect(mapStateToProps)(Component);
