import { ProgressSpinner } from "primereact/progressspinner";
import { FC, Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes";

export const AppRouter: FC = () => {
  return (
    <Suspense fallback={<ProgressSpinner />}>
      <RouterProvider router={routes} />
    </Suspense>
  );
};
