import { MultiStateButton } from "components/MultiStateButton";
import { PublicationGroup } from "constants/PublicationGroup";
import { FC } from "react";

interface LatestBooksFilterButtonProps {
  currentValue: PublicationGroup;
  onValueChangeHandler: (newValue: number) => void;
}

const LATEST_BOOKS_STATES = [
  { value: PublicationGroup.ONLY_OLD, label: "Only old" },
  { value: PublicationGroup.ALL, label: "All" },
  { value: PublicationGroup.ONLY_LATEST, label: "Only latest" },
];

export const LatestBooksFilterButton: FC<LatestBooksFilterButtonProps> = ({
  currentValue,
  onValueChangeHandler,
}) => {
  return (
    <MultiStateButton
      value={currentValue}
      states={LATEST_BOOKS_STATES}
      onValueChangeHandler={(newValue) => {
        if (typeof newValue === "number") onValueChangeHandler(newValue);
      }}
    />
  );
};
