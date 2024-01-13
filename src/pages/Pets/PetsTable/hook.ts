import { Pet } from "api/pets";
import { usePetCount, usePetPageData } from "api/pets/hook";
import { dataTableReducer } from "common/reducers/DataTableReducer/reducer";
import {
  DEFAULT_DATA_TABLE_REDUCER_STATE,
  DataTableReducer,
  DataTableReducerActions,
} from "common/reducers/DataTableReducer/types";
import { Dispatch, useReducer } from "react";

type UsePetsTableViewType = {
  page: number;
  pageSize: number;
  pageData: Pet[] | undefined;
  count: number | undefined;
  isLoading: boolean;
  dispatch: Dispatch<DataTableReducerActions>;
};

export const usePetsTableView = (): UsePetsTableViewType => {
  const [state, dispatch] = useReducer<DataTableReducer>(
    dataTableReducer,
    DEFAULT_DATA_TABLE_REDUCER_STATE,
  );
  const { data: pageData, isLoading } = usePetPageData(state);
  const { data: count } = usePetCount();

  return {
    page: state.tableData.page,
    pageSize: state.tableData.pageSize,
    pageData,
    count,
    isLoading,
    dispatch,
  };
};
