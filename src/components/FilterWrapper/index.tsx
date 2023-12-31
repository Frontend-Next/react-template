import { Toolbar } from "primereact/toolbar";
import { FC, PropsWithChildren } from "react";
import { FilterWrapperButtons } from "./buttons";

interface FilterWrapperProps {
  applyHandler: () => void;
  selectAllHandler: () => void;
}

export const FilterWrapper: FC<PropsWithChildren<FilterWrapperProps>> = ({
  children,
  applyHandler,
  selectAllHandler,
}) => {
  return (
    <Toolbar
      start={children}
      end={
        <FilterWrapperButtons
          applyHandler={applyHandler}
          selectAllHandler={selectAllHandler}
        />
      }
    />
  );
};
