import { Book, BookFilterState } from "api/book";
import { useBookDataCount, useBookPageData } from "api/book/hook";
import { DataTableReducerState } from "common/reducers/DataTableReducer/types";
import { BookListContextType } from "pages/Books/Context";
import { useBooksListContext } from "pages/Books/Context/hook";
import { DEFAULT_BOOK_FILTER_REDUCER_STATE } from "pages/Books/FilterReducer/types";
import { useMemo } from "react";

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
    // only recalculate memo after timestamp or tableData change
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
