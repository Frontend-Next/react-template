import { dataTableReducer } from "common/reducers/DataTableReducer/reducer";
import {
  FilteredDataTableActionTypes,
  FilteredDataTableReducer,
  FilteredDataTableReducerActions,
  FilteredDataTableReducerState,
} from "common/reducers/FilteredDataTableReducer/types";

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
    case FilteredDataTableActionTypes.SetFiltersData:
      return { ...state };

    case FilteredDataTableActionTypes.SelectAll:
      return { ...state };

    case FilteredDataTableActionTypes.Clear:
      return { ...state };

    case FilteredDataTableActionTypes.Apply:
      return { ...state, applyTimestamp: Date.now() };

    default:
      return { ...state, ...dataTableReducer(state.tableData, action) };
  }
};
