import React from "react";
import { createRoot } from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "tachyons";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import logger from "redux-logger";
import { combineReducers } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";

import "./index.css";
import { searchReducer, requestRobotsReducer } from "./container/reducer";
import Appp from "./container/AppHooksRedux";
// import App from "./container/App";

const rootReducer = combineReducers({ requestRobotsReducer, searchReducer });

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunk).concat(logger),
});
const root = createRoot(document.getElementById("root"));
root.render(
  <div className="tc">
    <Provider store={store}>
      <Appp />
    </Provider>
  </div>
);
// const root = createRoot(document.getElementById("root"));
// root.render(
//   <div className="tc">
//     <App />
//   </div>
// );

reportWebVitals();
