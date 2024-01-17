import { SetFiltersDataAction } from "common/reducers/FilteredDataTableReducer/types";
import { booksReducerInitializerFunction } from "../initializer";
import { BookFilterReducerState } from "../types";

export const setFiltersData = (
  action: SetFiltersDataAction,
): BookFilterReducerState => {
  return booksReducerInitializerFunction(action.payload);
};
