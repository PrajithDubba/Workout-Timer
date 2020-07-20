import * as Consts from "../utils/Constants";

const initialState = {
  rounds: 3,
  currentRound: 1,
  intervals: 2,
  currentInterval: 1,
  workTime: 10,
  restTime: 5,
  mode: "WORK",
  isWorkoutDone: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Consts.INCREMENT_INTERVAL: {
      return {
        ...state,
        currentInterval: state.currentInterval + 1,
        mode: "WORK",
      };
    }
    case Consts.INCREMENT_ROUND: {
      return {
        ...state,
        currentRound: state.currentRound + 1,
        currentInterval: 1,
        mode: "WORK",
      };
    }
    case Consts.SET_REST_MODE: {
      return {
        ...state,
        mode: "REST",
      };
    }
    case Consts.SET_WORK_MODE: {
      return {
        ...state,
        mode: "WORK",
      };
    }
    default: {
      return state;
    }
  }
};
