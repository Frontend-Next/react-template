import { routes } from "common/components/AppRouter/routes";
import { ProgressSpinner } from "primereact/progressspinner";
import { FC, Suspense } from "react";
import { RouterProvider } from "react-router-dom";

export const AppRouter: FC = () => {
  return (
    <Suspense fallback={<ProgressSpinner />}>
      <RouterProvider router={routes} />
    </Suspense>
  );
};
