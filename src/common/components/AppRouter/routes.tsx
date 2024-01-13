import { App } from "pages/App";
import { BooksList } from "pages/Books";
import { Demo } from "pages/Demo";
import { PetsList } from "pages/Pets";
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
      {
        path: "demo",
        element: <Demo />,
      },
      {
        path: "pets",
        element: <PetsList />,
      },
    ],
  },
]);
