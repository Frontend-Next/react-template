import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SecurityContextProvider } from "contexts/SecurityContext";
import { FC, PropsWithChildren } from "react";

const queryClient = new QueryClient();

export const CoreProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <SecurityContextProvider>{children}</SecurityContextProvider>
    </QueryClientProvider>
  );
};
