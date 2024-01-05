import { UseQueryOptions } from "@tanstack/react-query";
import { Book } from "models/book";
import { BookClient } from "./client";
import { BookKeyFactory } from "./keyFactory";

const bookDataForFiltersQuery = (
  selectFunction: (books: Book[]) => Book[],
): UseQueryOptions<Book[]> => ({
  queryKey: BookKeyFactory.dataForFilters(),
  queryFn: BookClient.fetchBookDataForFilters,
  staleTime: Infinity,
  select: selectFunction,
  notifyOnChangeProps: [],
});

const bookTableDataQuery = (
  isEnabled: boolean,
  page: number,
  pageSize: number,
  authors: number[],
  categories: number[],
): UseQueryOptions<Book[]> => ({
  queryKey: BookKeyFactory.tableData(page, pageSize, authors, categories),
  queryFn: BookClient.fetchBookTableData,
  enabled: isEnabled,
});

const bookByIdQuery = (id: number): UseQueryOptions<Book> => ({
  queryKey: BookKeyFactory.bookById(id),
  queryFn: BookClient.fetchBookById,
});

export const BookQuery = {
  bookDataForFiltersQuery,
  bookTableDataQuery,
  bookByIdQuery,
};
