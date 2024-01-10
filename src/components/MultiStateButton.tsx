import { Button } from "primereact/button";
import { FC, useMemo, useState } from "react";

interface MultiStateButtonProps {
  states: MultiStateButtonStatesElement[];
  value?: MultiStateButtonStatesElement["value"];
  onValueChangeHandler?: (
    newValue: MultiStateButtonStatesElement["value"],
  ) => void;
}

interface MultiStateButtonStatesElement {
  value: string | number;
  label: string;
}

export const MultiStateButton: FC<MultiStateButtonProps> = ({
  states,
  value,
  onValueChangeHandler,
}) => {
  const [buttonStates] = useState(states);
  const [activeState, setActiveState] = useState(
    value !== undefined ? value : states[0].value,
  );

  const activeStateIndex = useMemo(() => {
    const index = buttonStates.findIndex(
      (element) => element.value === activeState,
    );
    return index;
  }, [buttonStates, activeState]);

  const setNextActiveState = () => {
    setActiveState((prevState) => {
      const index = buttonStates.findIndex(
        (element) => element.value === prevState,
      );

      const newValue =
        buttonStates[index + 1 >= buttonStates.length ? 0 : index + 1].value;

      if (onValueChangeHandler) onValueChangeHandler(newValue);

      return newValue;
    });
  };

  return (
    <Button
      label={buttonStates[activeStateIndex].label}
      onClick={() => setNextActiveState()}
    />
  );
};
