import { dataTableReducer } from "common/reducers/DataTableReducer/reducer";
import {
  FilteredDataTableActionType,
  FilteredDataTableReducer,
  FilteredDataTableReducerActions,
  FilteredDataTableReducerState,
} from "./types";

export const filteredDataTableReducer: FilteredDataTableReducer = <
  SELECTED_FILTERS_TYPE,
  FILTERS_DATA_TYPE,
>(
  state: FilteredDataTableReducerState<
    SELECTED_FILTERS_TYPE,
    FILTERS_DATA_TYPE
  >,
  action: FilteredDataTableReducerActions,
): FilteredDataTableReducerState<SELECTED_FILTERS_TYPE, FILTERS_DATA_TYPE> => {
  switch (action.type) {
    case FilteredDataTableActionType.SetFiltersData:
      return { ...state };

    case FilteredDataTableActionType.SelectAll:
      return { ...state };

    case FilteredDataTableActionType.Clear:
      return { ...state };

    case FilteredDataTableActionType.Apply:
      return { ...state, applyTimestamp: Date.now() };

    default:
      return { ...state, ...dataTableReducer(state.tableData, action) };
  }
};
