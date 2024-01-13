import { useQuery } from "@tanstack/react-query";
import { BooksExtendedFilterState, BooksFilterState } from ".";
import { BookQuery } from "./query";

export const useBookDataForFilters = () => {
  return useQuery(BookQuery.bookDataForFiltersQuery());
};

// export const useSuspenseBookDataForFilters = () => {
//   return useSuspenseQuery(BookQuery.bookDataForFiltersQuery());
// };

export const useBookTableData = (
  isEnabled: boolean,
  filter: BooksFilterState,
) => {
  return useQuery(BookQuery.bookTableDataQuery(isEnabled, filter));
};

// export const useSuspenseBookTableData = (
//   isEnabled: boolean,
//   filter: BooksFilterState,
// ) => {
//   return useSuspenseQuery(BookQuery.bookTableDataQuery(isEnabled, filter));
// };

export const useBookCount = (
  isEnabled: boolean,
  extendedFilter: BooksExtendedFilterState,
) => {
  return useQuery(BookQuery.bookCountQuery(isEnabled, extendedFilter));
};

// export const useSuspenseBookCount = (
//   isEnabled: boolean,
//   extendedFilter: BooksExtendedFilterState,
// ) => {
//   return useSuspenseQuery(BookQuery.bookCountQuery(isEnabled, extendedFilter));
// };

export const useBookById = (id: number) => {
  return useQuery(BookQuery.bookByIdQuery(id));
};

// export const useSuspenseBookById = (id: number) => {
//   return useSuspenseQuery(BookQuery.bookByIdQuery(id));
// };
