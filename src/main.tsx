import { AppRouter } from "components/AppRouter";
import { CoreProvider } from "components/providers/CoreProvider";
import { UIProvider } from "components/providers/UIProvider";
import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CoreProvider>
      <UIProvider>
        <AppRouter />
      </UIProvider>
    </CoreProvider>
  </React.StrictMode>,
);
