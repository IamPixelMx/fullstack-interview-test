import React from "react";
import ReactDOM from "react-dom";
import { AppProvider } from "store";
import { RouterProvider } from "router";
import App from "./App";
import "common/styles/style.scss";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <RouterProvider>
        <App />
      </RouterProvider>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
