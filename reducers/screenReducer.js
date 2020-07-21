import * as Consts from "../utils/Constants";

const initialState = {
  currentScreen: Consts.SELECTION_SCREEN,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Consts.SELECTION_SCREEN: {
      return {
        ...state,
        currentScreen: Consts.SELECTION_SCREEN,
      };
    }

    case Consts.USER_INPUT_SCREEEN: {
      return {
        ...state,
        currentScreen: Consts.USER_INPUT_SCREEEN,
      };
    }

    case Consts.TIMER_SCREEN: {
      return {
        ...state,
        currentScreen: Consts.TIMER_SCREEN,
      };
    }

    default:
      return {
        ...state,
      };
  }
};
