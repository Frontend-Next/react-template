import { FC, PropsWithChildren, createContext, useMemo } from "react";

interface UIContextType {}

const UIContext = createContext<UIContextType | undefined>(undefined);

export const UIContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const value = useMemo(() => ({}), []);
  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};
