import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./App.css"; // keep your existing CSS

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// and extends the default theme with custom colors.
