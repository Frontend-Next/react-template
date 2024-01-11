import { booksReducerInitializerFunction } from "../initializer";
import { BooksFilterReducerState } from "../types";

export const selectAll = (
  state: BooksFilterReducerState,
): BooksFilterReducerState => {
  if (!state.filterData?.bookDataForFilters) return { ...state };
  return booksReducerInitializerFunction(state.filterData.bookDataForFilters);
};
