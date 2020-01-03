import React from "react";
import ReactDOM from "react-dom";
import { compose, createStore } from "redux";
import { Provider } from "react-redux";
import App from "./components/App.js";
import reducer from "./reducers/index.js";
import persistState from 'redux-localstorage'

import './App.css';
const enhancer = compose(
  persistState(),
);
const store = createStore(reducer, enhancer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
