import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./slice/store.js";
import App from "./App.jsx";
import "./normalize.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   
         <Provider store={store}>
        <App />
      </Provider>
   
  </React.StrictMode>
);
