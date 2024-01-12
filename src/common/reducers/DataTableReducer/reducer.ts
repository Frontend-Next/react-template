import {
  DataTableActionType,
  DataTableReducer,
  DataTableReducerActions,
  DataTableReducerState,
} from "./types";

export const dataTableReducer: DataTableReducer = (
  state: DataTableReducerState,
  action: DataTableReducerActions,
): DataTableReducerState => {
  switch (action.type) {
    case DataTableActionType.PageChange:
      return { ...state, tableData: { ...state.tableData, ...action.payload } };
  }
};
