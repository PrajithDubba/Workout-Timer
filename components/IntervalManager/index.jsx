import Component from "./Component";
import { connect } from "react-redux";
import { setRestMode } from "../../actions/actions";
const mapStateToProps = (state) => {
  return {
    work: state.timer.workTime,
    rest: state.timer.restTime,
    mode: state.timer.mode,
  };
};

export default connect(mapStateToProps)(Component);
