import { App } from "pages/App";
import { createBrowserRouter } from "react-router-dom";

export const routes = createBrowserRouter([
  {
    index: true,
    element: <App />,
  },
]);
