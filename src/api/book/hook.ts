import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import { Book } from "models/book";
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
  page: number,
  pageSize: number,
  authors: number[],
  categories: number[],
) => {
  return useQuery(
    BookQuery.bookTableDataQuery(
      isEnabled,
      page,
      pageSize,
      authors,
      categories,
    ),
  );
};

export const useSuspenseBookTableData = (
  isEnabled: boolean,
  page: number,
  pageSize: number,
  authors: number[],
  categories: number[],
) => {
  return useSuspenseQuery(
    BookQuery.bookTableDataQuery(
      isEnabled,
      page,
      pageSize,
      authors,
      categories,
    ),
  );
};

export const useBookById = (id: number) => {
  return useQuery(BookQuery.bookByIdQuery(id));
};

export const useSuspenseBookById = (id: number) => {
  return useSuspenseQuery(BookQuery.bookByIdQuery(id));
};
