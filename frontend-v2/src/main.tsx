import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "./styles/foundations/reset.css";
import "./styles/foundations/variables.css";
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);