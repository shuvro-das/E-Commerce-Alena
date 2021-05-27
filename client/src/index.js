import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./Responsive.css";
import App from "./App";
import store from "./Store";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
