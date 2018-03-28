import { createStore, applyMiddleware } from "redux";
import { createEpicMiddleware } from "redux-observable";

import logger from "redux-logger";
import rootEpic from "../epics/epic";

const reducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT": {
      return state + action.payload;
    }
    case "DOUBLED_INCREMENT": {
      return state + action.payload;
    }
    default: {
      return state;
    }
  }
};

const epicMiddleware = createEpicMiddleware(rootEpic);

const store = createStore(reducer, applyMiddleware(logger, epicMiddleware));

export const countSelector = state => state;

export const incrementCount = number => ({
  type: "INCREMENT",
  payload: number
});

export default store;
