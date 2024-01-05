import { MultiSelect } from "primereact/multiselect";
import { Skeleton } from "primereact/skeleton";
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
    <Skeleton className="w-full md:w-20rem mr-2" />
  ) : (
    <MultiSelect
      value={value}
      options={options}
      onChange={(e) => onChangeHandler(e.value)}
      optionValue="id"
      optionLabel="value"
      placeholder={placeholder}
      maxSelectedLabels={3}
      className="w-full md:w-20rem mr-2"
    />
  );
};
