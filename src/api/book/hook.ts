import { useQuery } from "@tanstack/react-query";
import { BookFilterState } from "api/book";
import { DataTableReducerState } from "common/reducers/DataTableReducer/types";
import { BookQuery } from "./query";

export const useBookDataForFilters = () => {
  return useQuery(BookQuery.dataForFiltersQuery());
};

export const useBookPageData = (
  isEnabled: boolean,
  dataTable: DataTableReducerState,
  filter: BookFilterState,
) => {
  return useQuery(BookQuery.pageDataQuery(isEnabled, dataTable, filter));
};

export const useBookDataCount = (
  isEnabled: boolean,
  extendedFilter: BookFilterState,
) => {
  return useQuery(BookQuery.dataCountQuery(isEnabled, extendedFilter));
};
