import { DataTableReducerState } from "common/reducers/DataTableReducer/types";

export interface DataTableFilterState<EXTENDED_FILTERS_TYPE = void>
  extends DataTableReducerState {
  selectedFilters: EXTENDED_FILTERS_TYPE;
  applyTimestamp?: number;
}
