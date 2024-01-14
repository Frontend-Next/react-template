import {
  DEFAULT_DATA_TABLE_REDUCER_STATE,
  DataTableActionType,
  DataTableReducerState,
} from "../DataTableReducer/types";

export interface FilteredDataTableReducerState<
  SELECTED_FILTERS_TYPE = void,
  FILTERS_DATA_TYPE = void,
> extends DataTableReducerState {
  selectedFilters?: SELECTED_FILTERS_TYPE;
  filterData?: FILTERS_DATA_TYPE;
  applyTimestamp?: number;
}

export const DEFAULT_FILTERED_DATA_TABLE_REDUCER_STATE: FilteredDataTableReducerState =
  {
    ...DEFAULT_DATA_TABLE_REDUCER_STATE,
  };

export type FilteredDataTableReducer = (
  state: FilteredDataTableReducerState,
  action: FilteredDataTableReducerActions,
) => FilteredDataTableReducerState;

enum FilteredDataTableActionsEnum {
  SetFiltersData = "SET_FILTERS_DATA",
  SelectAll = "SELECT_ALL",
  Clear = "CLEAR",
  Apply = "APPLY",
}

export const FilteredDataTableActionType = {
  ...DataTableActionType,
  ...FilteredDataTableActionsEnum,
};
export type FilteredDataTableActionType = typeof FilteredDataTableActionType;

type SetFiltersDataAction = {
  type: FilteredDataTableActionType["SetFiltersData"];
  payload: any[];
};

type SelectAllAction = {
  type: FilteredDataTableActionType["SelectAll"];
};

type ClearAction = {
  type: FilteredDataTableActionType["Clear"];
};

type ApplyAction = {
  type: FilteredDataTableActionType["Apply"];
};

export type FilteredDataTableReducerActions =
  | SetFiltersDataAction
  | SelectAllAction
  | ClearAction
  | ApplyAction;
