import { SplitButton } from "primereact/splitbutton";
import { FC, useCallback, useMemo, useState } from "react";

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
  const [activeState, setActiveState] = useState(
    value !== undefined ? value : states[0].value,
  );

  const activeStateIndex = useMemo(() => {
    const index = states.findIndex((element) => element.value === activeState);
    return index;
  }, [states, activeState]);

  const setActiveStateHandler = useCallback(
    (newActiveState: typeof activeState): void => {
      setActiveState(newActiveState);
      if (onValueChangeHandler) onValueChangeHandler(newActiveState);
    },
    [setActiveState, onValueChangeHandler],
  );

  const items = useMemo(
    () =>
      states.map((state) => ({
        label: state.label,
        command: () => setActiveStateHandler(state.value),
      })),
    [states, setActiveStateHandler],
  );

  const setNextActiveState = (): void => {
    setActiveState((prevState) => {
      const index = states.findIndex((element) => element.value === prevState);

      const newValue = states[index + 1 >= states.length ? 0 : index + 1].value;

      if (onValueChangeHandler) onValueChangeHandler(newValue);

      return newValue;
    });
  };

  return (
    <SplitButton
      label={states[activeStateIndex].label}
      onClick={setNextActiveState}
      model={items}
    />
  );
};

MultiStateButton.defaultProps = {
  value: undefined,
  onValueChangeHandler: undefined,
};
