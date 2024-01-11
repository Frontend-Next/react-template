import { UseQueryOptions } from "@tanstack/react-query";
import { Book, BooksExtendedFilterState, BooksFilterState } from ".";
import { BookClient } from "./client";
import { BookKeyFactory } from "./keyFactory";

const bookDataForFiltersQuery = (
  selectFunction: (books: Book[]) => Book[],
): UseQueryOptions<Book[]> => ({
  queryKey: BookKeyFactory.dataForFilters(),
  queryFn: BookClient.fetchDataForFilters,
  staleTime: Infinity,
  select: selectFunction,
  notifyOnChangeProps: [],
});

const bookTableDataQuery = (
  isEnabled: boolean,
  filter: BooksFilterState,
): UseQueryOptions<Book[]> => ({
  queryKey: BookKeyFactory.tableData(filter),
  queryFn: BookClient.fetchTableData,
  enabled: isEnabled,
});

const bookCountQuery = (
  isEnabled: boolean,
  extendedFilter: BooksExtendedFilterState,
): UseQueryOptions<number> => ({
  queryKey: BookKeyFactory.count(extendedFilter),
  queryFn: BookClient.fetchCount,
  enabled: isEnabled,
});

const bookByIdQuery = (id: number): UseQueryOptions<Book> => ({
  queryKey: BookKeyFactory.bookById(id),
  queryFn: BookClient.fetchById,
});

export const BookQuery = {
  bookDataForFiltersQuery,
  bookTableDataQuery,
  bookCountQuery,
  bookByIdQuery,
};
