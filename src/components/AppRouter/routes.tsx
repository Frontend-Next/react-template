import { App } from "pages/App";
import { BooksList } from "pages/Books";
import { createBrowserRouter } from "react-router-dom";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "books",
        element: <BooksList />,
      },
    ],
  },
]);
