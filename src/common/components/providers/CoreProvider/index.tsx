import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { SecurityContextProvider } from "common/contexts/SecurityContext";
import { FC, PropsWithChildren } from "react";

const queryClient = new QueryClient();

export const CoreProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <SecurityContextProvider>{children}</SecurityContextProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
