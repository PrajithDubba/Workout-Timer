import { combineReducers, createStore, applyMiddleware } from "redux";
import timerReducer from "./TimerReducer";
import screenReducer from "./screenReducer";

const rootReducer = combineReducers({
  timer: timerReducer,
  screen: screenReducer,
});

const logger = (store) => (next) => (action) => {
  console.log("Dispatching action: ", action);
  let result = next(action);
  console.log("next state: ", store.getState());
  return result;
};

const createAppStore = () => {
  return createStore(rootReducer, applyMiddleware(logger));
};

export default createAppStore;
