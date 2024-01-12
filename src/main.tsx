import { AppRouter } from "common/components/AppRouter";
import { CoreProvider } from "common/components/providers/CoreProvider";
import { UIProvider } from "common/components/providers/UIProvider";
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
