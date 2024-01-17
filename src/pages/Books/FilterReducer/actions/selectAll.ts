import { booksReducerInitializerFunction } from "../initializer";
import { BookFilterReducerState } from "../types";

export const selectAll = (
  state: BookFilterReducerState,
): BookFilterReducerState => {
  if (!state.filterData?.dataForFilters) return { ...state };
  return booksReducerInitializerFunction(state.filterData.dataForFilters);
};
