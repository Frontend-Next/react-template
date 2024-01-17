import { FilterMultiSelectSkeleton } from "common/components/FilterMultiSelect/skeleton";
import { FilterRow } from "common/types/FilterRow";
import { MultiSelect } from "primereact/multiselect";
import { FC } from "react";

interface FilterMultiSelectProps {
  placeholder: string;
  value: number[] | undefined;
  options: FilterRow[] | undefined;
  onChangeHandler: (value: number[]) => void;
}

export const FilterMultiSelect: FC<FilterMultiSelectProps> = ({
  placeholder,
  value,
  options,
  onChangeHandler,
}) => {
  return !value || !options ? (
    <FilterMultiSelectSkeleton />
  ) : (
    <MultiSelect
      value={value}
      options={options}
      onChange={(e) => onChangeHandler(e.value)}
      optionValue="id"
      optionLabel="value"
      placeholder={placeholder}
      maxSelectedLabels={3}
      className="w-full md:w-20rem"
    />
  );
};
