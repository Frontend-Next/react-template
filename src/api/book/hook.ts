import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import { Book, BooksExtendedFilterState, BooksFilterState } from ".";
import { BookQuery } from "./query";

export const useBookDataForFilters = (
  selectFunction: (books: Book[]) => Book[],
) => {
  return useQuery(BookQuery.bookDataForFiltersQuery(selectFunction));
};

export const useSuspenseBookDataForFilters = (
  selectFunction: (books: Book[]) => Book[],
) => {
  return useSuspenseQuery(BookQuery.bookDataForFiltersQuery(selectFunction));
};

export const useBookTableData = (
  isEnabled: boolean,
  filter: BooksFilterState,
) => {
  return useQuery(BookQuery.bookTableDataQuery(isEnabled, filter));
};

export const useSuspenseBookTableData = (
  isEnabled: boolean,
  filter: BooksFilterState,
) => {
  return useSuspenseQuery(BookQuery.bookTableDataQuery(isEnabled, filter));
};

export const useBookCount = (
  isEnabled: boolean,
  extendedFilter: BooksExtendedFilterState,
) => {
  return useQuery(BookQuery.bookCountQuery(isEnabled, extendedFilter));
};

export const useSuspenseBookCount = (
  isEnabled: boolean,
  extendedFilter: BooksExtendedFilterState,
) => {
  return useSuspenseQuery(BookQuery.bookCountQuery(isEnabled, extendedFilter));
};

export const useBookById = (id: number) => {
  return useQuery(BookQuery.bookByIdQuery(id));
};

export const useSuspenseBookById = (id: number) => {
  return useSuspenseQuery(BookQuery.bookByIdQuery(id));
};
