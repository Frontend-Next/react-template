import { UseQueryOptions } from "@tanstack/react-query";
import { Book, BooksExtendedFilterState, BooksFilterState } from ".";
import { BookClient } from "./client";
import { BookKeyFactory } from "./keyFactory";

const bookDataForFiltersQuery = (): UseQueryOptions<Book[]> => ({
  queryKey: BookKeyFactory.dataForFilters(),
  queryFn: BookClient.fetchDataForFilters,
  staleTime: Infinity,
});

const bookTableDataQuery = (
  isEnabled: boolean,
  filter: BooksFilterState,
): UseQueryOptions<Book[]> => ({
  queryKey: BookKeyFactory.pageData(filter),
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
