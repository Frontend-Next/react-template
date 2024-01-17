import { Book, BookFilterState } from "api/book";
import { useBookDataCount, useBookPageData } from "api/book/hook";
import { DataTableReducerState } from "common/reducers/DataTableReducer/types";
import { BookListContextType } from "pages/Books/Context";
import { useMemo } from "react";
import { useBooksListContext } from "../Context/hook";
import { DEFAULT_BOOK_FILTER_REDUCER_STATE } from "../FilterReducer/types";

interface UseBooksTableViewType extends BookListContextType {
  pageData: Book[] | undefined;
  dataCount: number | undefined;
}

export const useBooksTableView = (): UseBooksTableViewType => {
  const { filterState, dispatch } = useBooksListContext();

  const { isPageDataLoadEnabled, tableData, selectedFilters } = useMemo<{
    isPageDataLoadEnabled: boolean;
    tableData: DataTableReducerState;
    selectedFilters: BookFilterState;
  }>(() => {
    if (filterState.applyTimestamp && filterState.selectedFilters) {
      return {
        isPageDataLoadEnabled: true,
        tableData: { ...filterState.tableData },
        selectedFilters: { ...filterState.selectedFilters },
      };
    }

    return {
      isPageDataLoadEnabled: false,
      tableData: { ...DEFAULT_BOOK_FILTER_REDUCER_STATE.tableData },
      selectedFilters: { ...DEFAULT_BOOK_FILTER_REDUCER_STATE.selectedFilters },
    };
  }, [filterState.applyTimestamp, filterState.tableData]);

  const { data: pageData } = useBookPageData(
    isPageDataLoadEnabled,
    tableData,
    selectedFilters,
  );

  const { data: dataCount } = useBookDataCount(
    isPageDataLoadEnabled,
    selectedFilters,
  );

  return { filterState, dispatch, pageData, dataCount };
};
