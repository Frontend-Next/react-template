import { BooksFilterReducerState, PageChangeAction } from "../types";

export const pageChange = (
  state: BooksFilterReducerState,
  action: PageChangeAction,
): BooksFilterReducerState => {
  return { ...state, tableData: { ...state.tableData, ...action.payload } };
};
