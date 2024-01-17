import { BookFilterState } from "api/book";
import { genericFilteredDataTableKeyFactory } from "common/api/genericFilteredDataTableKeyFactory";

export const BookKeyFactory = {
  ...genericFilteredDataTableKeyFactory<BookFilterState>("book"),
};
