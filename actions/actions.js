import * as Consts from "../utils/Constants";

export const incrementRound = () => {
  return {
    type: Consts.INCREMENT_ROUND,
  };
};

export const incrementInterval = () => {
  return {
    type: Consts.INCREMENT_INTERVAL,
  };
};

export const setRestMode = () => {
  return {
    type: Consts.SET_REST_MODE,
  };
};

export const setSelectionScreen = () => {
  return {
    type: Consts.SELECTION_SCREEN,
  };
};

export const setUserInputScreen = () => {
  return {
    type: Consts.USER_INPUT_SCREEEN,
  };
};

export const setTimerScreen = () => {
  return {
    type: Consts.TIMER_SCREEN,
  };
};
