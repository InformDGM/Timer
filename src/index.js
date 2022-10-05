import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import timerReducer from "./store/reducers/timer";
import lapsReducer from "./store/reducers/laps";

const rootReducer = combineReducers({
  tmr: timerReducer,
  lpr: lapsReducer,
});

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
