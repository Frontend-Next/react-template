import { DataTableReducerState } from "common/reducers/DataTableReducer/types";
import { genericKeyFactory } from "./genericKeyFactory";

export const genericFilteredDataTableKeyFactory = <
  SELECTED_FILTERS_TYPE,
  SELECTED_AND_DATA_TABLE_FILTERS_TYPE extends DataTableReducerState,
>(
  domain: string,
) => ({
  ...genericKeyFactory(domain),
  dataForFilters: () =>
    [
      { ...genericKeyFactory(domain).list(), name: "data-for-filters" },
    ] as const,
  pageData: (filter: SELECTED_AND_DATA_TABLE_FILTERS_TYPE) =>
    [
      {
        ...genericKeyFactory(domain).list(),
        name: "table-data",
        ...filter,
      },
    ] as const,
  count: (extendedFilter: SELECTED_FILTERS_TYPE) =>
    [
      {
        ...genericKeyFactory(domain).list(),
        name: "count",
        ...extendedFilter,
      },
    ] as const,
});
