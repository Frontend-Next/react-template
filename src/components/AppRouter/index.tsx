import { FC, Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes";

export const AppRouter: FC = () => {
  return (
    <Suspense>
      <RouterProvider router={routes} />
    </Suspense>
  );
};
