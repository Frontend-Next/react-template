import { booksReducerInitializerFunction } from "../initializer";
import { BooksFilterReducerState, SetFiltersDataAction } from "../types";

export const setFiltersData = (
  action: SetFiltersDataAction,
): BooksFilterReducerState => {
  return booksReducerInitializerFunction(action.payload);
};
