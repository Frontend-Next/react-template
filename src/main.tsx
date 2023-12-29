import { AppRouter } from "components/AppRouter";
import { UIProvider } from "components/UIProvider";
import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UIProvider>
      <AppRouter />
    </UIProvider>
  </React.StrictMode>,
);
