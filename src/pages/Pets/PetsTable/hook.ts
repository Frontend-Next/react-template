import { Pet } from "api/pets";
import { usePetCount, usePetPageData } from "api/pets/hook";
import { dataTableReducer } from "common/reducers/DataTableReducer/reducer";
import {
  DEFAULT_DATA_TABLE_REDUCER_STATE,
  DataTableReducer,
  DataTableReducerActions,
  DataTableReducerState,
} from "common/reducers/DataTableReducer/types";
import { Dispatch, useReducer } from "react";

interface UsePetsTableViewType extends DataTableReducerState {
  pageData: Pet[] | undefined;
  dataCount: number | undefined;
  dispatch: Dispatch<DataTableReducerActions>;
}

export const usePetsTableView = (): UsePetsTableViewType => {
  const [state, dispatch] = useReducer<DataTableReducer>(
    dataTableReducer,
    DEFAULT_DATA_TABLE_REDUCER_STATE,
  );
  const { data: pageData } = usePetPageData(state);
  const { data: dataCount } = usePetCount();

  return {
    page: state.page,
    pageSize: state.pageSize,
    pageData,
    dataCount,
    dispatch,
  };
};
