import { UseQueryOptions } from "@tanstack/react-query";
import { PublicationGroup } from "constants/PublicationGroup";
import { Book } from "models/book";
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
  page: number,
  pageSize: number,
  authors: number[],
  categories: number[],
  publicationGroup: PublicationGroup,
): UseQueryOptions<Book[]> => ({
  queryKey: BookKeyFactory.tableData(
    page,
    pageSize,
    authors,
    categories,
    publicationGroup,
  ),
  queryFn: BookClient.fetchTableData,
  enabled: isEnabled,
});

const bookByIdQuery = (id: number): UseQueryOptions<Book> => ({
  queryKey: BookKeyFactory.bookById(id),
  queryFn: BookClient.fetchById,
});

export const BookQuery = {
  bookDataForFiltersQuery,
  bookTableDataQuery,
  bookByIdQuery,
};
