import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import GoogleAnalytics from "./assets/GoogleAnalytics";

const trackingId = "G-CHBDZXTKFK";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleAnalytics trackingId={trackingId} />
    <App />
  </React.StrictMode>
);
