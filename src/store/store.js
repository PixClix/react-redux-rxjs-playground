import { createStore, applyMiddleware, combineReducers } from "redux";
import { createEpicMiddleware } from "redux-observable";

import logger from "redux-logger";
import rootEpic from "../epics/epic";

// default theme
import blue from '../themes/blue';

const countReducer = (state = 0, action) => {
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

const themeReducer = (state = blue, action) => {
  switch (action.type) {
      case "SWITCHTHEME": {
          const newTheme = require(`../themes/${action.payload}.js`).default;
          console.log(newTheme);
          return newTheme;
      }
      default: {
        return state;
      }
  }
};

const epicMiddleware = createEpicMiddleware(rootEpic);

const combinedReducers = combineReducers({ count: countReducer, theme: themeReducer });

const store = createStore(combinedReducers, applyMiddleware(logger, epicMiddleware));

export const countSelector = state => state.count;

export const themeSelector = state => state.theme;

export const incrementCount = number => ({
  type: "INCREMENT",
  payload: number
});

export const switchTheme = name => ({
    type: "SWITCHTHEME",
    payload: name
});

export default store;
