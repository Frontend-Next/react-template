import { dataTableReducer } from "common/reducers/DataTableReducer/reducer";
import {
  FilteredDataTableActionType,
  FilteredDataTableReducer,
  FilteredDataTableReducerActions,
  FilteredDataTableReducerState,
} from "./types";

export const filteredDataTableReducer: FilteredDataTableReducer = (
  state: FilteredDataTableReducerState,
  action: FilteredDataTableReducerActions,
): FilteredDataTableReducerState => {
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
      return { ...state, ...dataTableReducer(state, action) };
  }
};
