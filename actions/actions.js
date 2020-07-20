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
