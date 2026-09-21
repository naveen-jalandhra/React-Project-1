import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App.jsx";
import { BrowserRouter } from "react-router";
import { StoreContextFnc } from "./Context/StoreContext.jsx";

createRoot(document.getElementById("root")).render(
  <StoreContextFnc>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StoreContextFnc>,
);
