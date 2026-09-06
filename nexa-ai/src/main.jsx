import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { CssBaseline } from "@mui/material";

import App from "./App";
import { store } from "./store/store";
import AppTheme from "./theme/AppTheme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppTheme>
        <CssBaseline />

        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AppTheme>
    </Provider>
  </React.StrictMode>
);