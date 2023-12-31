import { Button } from "primereact/button";
import { FC } from "react";

interface FilterWrapperButtonsProps {
  applyHandler: () => void;
  selectAllHandler: () => void;
}

export const FilterWrapperButtons: FC<FilterWrapperButtonsProps> = ({
  applyHandler,
  selectAllHandler,
}) => {
  return (
    <>
      <Button label="Apply" onClick={applyHandler} className="mr-2" />
      <Button label="Select All" onClick={selectAllHandler} />
    </>
  );
};
