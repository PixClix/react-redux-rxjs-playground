import { combineEpics } from "redux-observable";

const WAIT_IN_MS = 1000;
const MULTIPLICATION_FACTOR = 2;

const clickEpic = (action$, store) =>
  action$
    .ofType("INCREMENT")
    .delay(WAIT_IN_MS)
    .map(action => ({
      type: "DOUBLED_INCREMENT",
      payload: store.getState() * MULTIPLICATION_FACTOR
    }));

const rootEpic = combineEpics(clickEpic);

export default rootEpic;
