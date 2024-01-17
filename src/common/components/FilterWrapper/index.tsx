import { FilterWrapperButtons } from "common/components/FilterWrapper/buttons";
import { Toolbar } from "primereact/toolbar";
import { FC, PropsWithChildren } from "react";

interface FilterWrapperProps {
  applyHandler: () => void;
  selectAllHandler: () => void;
}

export const FilterWrapper: FC<PropsWithChildren<FilterWrapperProps>> = ({
  children,
  applyHandler,
  selectAllHandler,
}) => {
  const filterElements = (
    <div className="flex flex-column gap-2">{children}</div>
  );

  return (
    <Toolbar
      className="align-items-start"
      pt={{
        start: {
          className: "w-10",
        },
      }}
      start={filterElements}
      end={
        <FilterWrapperButtons
          applyHandler={applyHandler}
          selectAllHandler={selectAllHandler}
        />
      }
    />
  );
};
