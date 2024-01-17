import { Book } from "api/book";
import { SetFiltersDataAction } from "common/reducers/FilteredDataTableReducer/types";
import { booksReducerInitializerFunction } from "pages/Books/FilterReducer/initializer";
import { BookFilterReducerState } from "pages/Books/FilterReducer/types";

export const setFiltersData = (
  action: SetFiltersDataAction,
): BookFilterReducerState => {
  return booksReducerInitializerFunction(action.payload as Book[]);
};
