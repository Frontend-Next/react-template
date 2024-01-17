import { DataTableReducerState } from "common/reducers/DataTableReducer/types";
import { genericKeyFactory } from "./genericKeyFactory";

export const genericFilteredDataTableKeyFactory = <SELECTED_FILTERS_TYPE>(
  domain: string,
) => ({
  ...genericKeyFactory(domain),
  dataForFilters: () =>
    [
      { ...genericKeyFactory(domain).list(), name: "data-for-filters" },
    ] as const,
  pageData: (tableData: DataTableReducerState, filter: SELECTED_FILTERS_TYPE) =>
    [
      {
        ...genericKeyFactory(domain).list(),
        name: "page-data",
        tableData,
        filter,
      },
    ] as const,
  dataCount: (filter: SELECTED_FILTERS_TYPE) =>
    [
      {
        ...genericKeyFactory(domain).list(),
        name: "data-count",
        filter,
      },
    ] as const,
});
