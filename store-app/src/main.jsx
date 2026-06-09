import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import { Provider } from "react-redux";
import { store } from "./app/store";

import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import {
  SettingsProvider,
} from "./context/SettingsContext";

import "./index.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider
        client={queryClient}
      >
        <SettingsProvider>
          <App />
        </SettingsProvider>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);