import { FC, PropsWithChildren, createContext } from "react";

interface UIContextType {}

const UIContext = createContext<UIContextType | undefined>(undefined);

export const UIContextProvider: FC<PropsWithChildren> = ({ children }) => {
  return <UIContext.Provider value={{}}>{children}</UIContext.Provider>;
};
