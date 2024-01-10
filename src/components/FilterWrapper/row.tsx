import { FC, PropsWithChildren } from "react";

export const FilterWrapperRow: FC<PropsWithChildren> = ({ children }) => {
  return <div className="flex flex-row flex-wrap gap-2">{children}</div>;
};
