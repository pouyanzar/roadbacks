import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
const contaier = document.getElementById("root");
if (!contaier) {
  throw new Error("Root container missing in index.html");
}
const root = ReactDOM.createRoot(contaier!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
