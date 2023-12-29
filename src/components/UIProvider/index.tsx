import "primeflex/primeflex.css";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { FC, PropsWithChildren } from "react";

export const UIProvider: FC<PropsWithChildren> = ({ children }) => (
  <PrimeReactProvider>{children}</PrimeReactProvider>
);
