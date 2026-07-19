import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import { initializeTheme } from "@/utils/theme";

import "@/styles/global.css";

initializeTheme();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);