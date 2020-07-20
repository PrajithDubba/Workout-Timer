import Component from "./Counter";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    mode: state.timer.mode,
  };
};

export default connect(mapStateToProps)(Component);
