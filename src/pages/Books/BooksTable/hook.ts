import { Book, BooksFilterState } from "api/book";
import { useBookCount, useBookTableData } from "api/book/hook";
import {
  DEFAULT_PAGE,
  DEFAULT_PAGE_SIZE,
} from "common/constants/TableDefaults";
import { Dispatch, useMemo } from "react";
import { useBooksListContext } from "../Context/hook";
import {
  BooksFilterActions,
  DEFAULT_BOOKS_FILTER_REDUCER_STATE,
} from "../FilterReducer/types";

interface useBooksTableViewType {
  page: number;
  pageSize: number;
  data: Book[] | undefined;
  count: number | undefined;
  dispatch: Dispatch<BooksFilterActions>;
}

export const useBooksTableView = (): useBooksTableViewType => {
  const { filterState, dispatch } = useBooksListContext();

  const { isEnabled, filter } = useMemo<{
    isEnabled: boolean;
    filter: BooksFilterState;
  }>(() => {
    if (
      filterState.applyTimestamp &&
      filterState.tableData &&
      filterState.selectedFilters
    ) {
      return {
        isEnabled: true,
        filter: {
          tableData: { ...filterState.tableData },
          selectedFilters: { ...filterState.selectedFilters },
        },
        // page: filterState.tableData.page,
        // pageSize: filterState.tableData.pageSize,
        // authors: filterState.extendedFilters.dropdownFilters.selectedAuthors,
        // categories:
        //   filterState.extendedFilters.dropdownFilters.selectedCategories,
        // publicationGroup:
        //   filterState.extendedFilters.switchFilters.publicationGroup,
      };
    }

    return {
      isEnabled: false,
      filter: DEFAULT_BOOKS_FILTER_REDUCER_STATE,
    };
  }, [filterState.applyTimestamp, filterState.tableData]);

  const { data } = useBookTableData(isEnabled, filter);

  const { data: count } = useBookCount(isEnabled, filter.selectedFilters);

  return {
    data,
    count,
    page: filter.tableData?.page || DEFAULT_PAGE,
    pageSize: filter.tableData?.pageSize || DEFAULT_PAGE_SIZE,
    dispatch,
  };
};
