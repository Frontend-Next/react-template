import { UseQueryOptions } from "@tanstack/react-query";
import { Book, BookFilterState } from "api/book";
import { DataTableReducerState } from "common/reducers/DataTableReducer/types";
import { BookClient } from "./client";
import { BookKeyFactory } from "./keyFactory";

const dataForFiltersQuery = (): UseQueryOptions<Book[]> => ({
  queryKey: BookKeyFactory.dataForFilters(),
  queryFn: BookClient.provideDataForFilters,
  staleTime: Infinity,
});

const pageDataQuery = (
  isEnabled: boolean,
  dataTable: DataTableReducerState,
  filter: BookFilterState,
): UseQueryOptions<Book[]> => ({
  queryKey: BookKeyFactory.pageData(dataTable, filter),
  queryFn: BookClient.providePageData,
  enabled: isEnabled,
});

const dataCountQuery = (
  isEnabled: boolean,
  filter: BookFilterState,
): UseQueryOptions<number> => ({
  queryKey: BookKeyFactory.dataCount(filter),
  queryFn: BookClient.provideDataCount,
  enabled: isEnabled,
});

export const BookQuery = {
  dataForFiltersQuery,
  pageDataQuery,
  dataCountQuery,
};
