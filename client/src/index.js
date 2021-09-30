import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import store from "./lib/store";
import { Provider } from 'react-redux';
import App from "./components/App";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

