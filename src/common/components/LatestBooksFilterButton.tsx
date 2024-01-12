import { MultiStateButton } from "common/components/MultiStateButton";
import { PublicationGroup } from "common/constants/PublicationGroup";
import { FC, useMemo } from "react";

interface LatestBooksFilterButtonProps {
  currentValue: PublicationGroup;
  onValueChangeHandler: (newValue: number) => void;
}

export const LatestBooksFilterButton: FC<LatestBooksFilterButtonProps> = ({
  currentValue,
  onValueChangeHandler,
}) => {
  const bookStates = useMemo(
    () => [
      { value: PublicationGroup.ONLY_OLD, label: "Only old" },
      { value: PublicationGroup.ALL, label: "All" },
      { value: PublicationGroup.ONLY_LATEST, label: "Only latest" },
    ],
    [],
  );

  return (
    <MultiStateButton
      key={`latest-books-${currentValue}`}
      value={currentValue}
      states={bookStates}
      onValueChangeHandler={(newValue) => {
        if (typeof newValue === "number") onValueChangeHandler(newValue);
      }}
    />
  );
};
