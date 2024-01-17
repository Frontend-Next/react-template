import { booksReducerInitializerFunction } from "pages/Books/FilterReducer/initializer";
import { BookFilterReducerState } from "pages/Books/FilterReducer/types";

export const selectAll = (
  state: BookFilterReducerState,
): BookFilterReducerState => {
  if (!state.filterData?.dataForFilters) return { ...state };
  return booksReducerInitializerFunction(state.filterData.dataForFilters);
};
