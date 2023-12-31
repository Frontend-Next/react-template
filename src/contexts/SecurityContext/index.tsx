import { FC, PropsWithChildren, createContext, useContext } from "react";

interface SecurityContextType {}

const SecurityContext = createContext<SecurityContextType | undefined>(
  undefined,
);

export const SecurityContextProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  return (
    <SecurityContext.Provider value={{}}>{children}</SecurityContext.Provider>
  );
};

export const useSecurityContext = (): SecurityContextType => {
  const securityContext = useContext(SecurityContext);

  if (!securityContext)
    throw new Error("useSecurityContext must be used within SecurityContext");
  else return securityContext;
};
