import { genericFilteredDataTableKeyFactory } from "common/api/genericFilteredDataTableKeyFactory";
import { BooksExtendedFilterState, BooksFilterState } from ".";

export const BookKeyFactory = {
  ...genericFilteredDataTableKeyFactory<
    BooksExtendedFilterState,
    BooksFilterState
  >("book"),
  bookById: (id: number) =>
    [{ ...BookKeyFactory.element(), name: "book-by-id", id }] as const,
};
