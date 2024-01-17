import {
  DataTableActionType,
  DataTableReducerActions,
  DataTableReducerState,
} from "common/reducers/DataTableReducer/types";

export interface FilteredDataTableReducerState<
  SELECTED_FILTERS_TYPE,
  FILTERS_DATA_TYPE,
> {
  tableData: DataTableReducerState;
  selectedFilters?: SELECTED_FILTERS_TYPE;
  filterData?: FILTERS_DATA_TYPE;
  applyTimestamp?: number;
}

export type FilteredDataTableReducer = <
  SELECTED_FILTERS_TYPE,
  FILTERS_DATA_TYPE,
>(
  state: FilteredDataTableReducerState<
    SELECTED_FILTERS_TYPE,
    FILTERS_DATA_TYPE
  >,
  action: FilteredDataTableReducerActions,
) => FilteredDataTableReducerState<SELECTED_FILTERS_TYPE, FILTERS_DATA_TYPE>;

enum FilteredDataTableActionsEnum {
  SetFiltersData = "SET_FILTERS_DATA",
  SelectAll = "SELECT_ALL",
  Clear = "CLEAR",
  Apply = "APPLY",
}

export const FilteredDataTableActionTypes = {
  ...DataTableActionType,
  ...FilteredDataTableActionsEnum,
};
type FilteredDataTableActionType = typeof FilteredDataTableActionTypes;

export type SetFiltersDataAction = {
  type: FilteredDataTableActionType["SetFiltersData"];
  payload: object[];
};

export type SelectAllAction = {
  type: FilteredDataTableActionType["SelectAll"];
};

export type ClearAction = {
  type: FilteredDataTableActionType["Clear"];
};

export type ApplyAction = {
  type: FilteredDataTableActionType["Apply"];
};

export type FilteredDataTableReducerActions =
  | DataTableReducerActions
  | SetFiltersDataAction
  | SelectAllAction
  | ClearAction
  | ApplyAction;
