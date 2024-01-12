import { dataTableReducer } from "common/reducers/DataTableReducer/reducer";
import { BookUtils } from "common/utils/BookUtils";
import { BooksFilterReducerActions } from "./actions";
import {
  BooksFilterActionType,
  BooksFilterActions,
  BooksFilterReducer,
  BooksFilterReducerState,
} from "./types";

export const booksFilterReducer: BooksFilterReducer = (
  state: BooksFilterReducerState,
  action: BooksFilterActions,
): BooksFilterReducerState => {
  switch (action.type) {
    case BooksFilterActionType.SetFiltersData:
      console.log("SetFiltersData", action);
      return BooksFilterReducerActions.setFiltersData(action);

    case BooksFilterActionType.SelectAll:
      return BooksFilterReducerActions.selectAll(state);

    // case BooksFilterActionType.PageChange:
    //   return BooksFilterReducerActions.pageChange(state, action);

    case BooksFilterActionType.AuthorChange:
      return BooksFilterReducerActions.authorChange(state, action);

    case BooksFilterActionType.CategoryChange:
      if (
        !state.filterData?.bookDataForFilters ||
        !state.selectedFilters?.dropdownFilters
      )
        return { ...state };

      const newSelectedBookFilterDataByCategory =
        state.filterData.bookDataForFilters.filter((book) =>
          action.payload.some((value) => value === book.category_id),
        );

      const authors = BookUtils.uniqueFilterRowFromBookArrayByKey(
        newSelectedBookFilterDataByCategory || [],
        "author_id",
        "author",
      );

      return {
        ...state,
        filterData: {
          ...state.filterData,
          selectedBookFilterData: newSelectedBookFilterDataByCategory,
          allAuthors: authors,
        },
        selectedFilters: {
          ...state.selectedFilters,
          dropdownFilters: {
            ...state.selectedFilters.dropdownFilters,
            selectedAuthors: [...authors.map((element) => element.id)],
            selectedCategories: action.payload,
          },
        },
      };

    case BooksFilterActionType.PublicationGroupChange:
      if (!state.selectedFilters?.switchFilters) return { ...state };

      return {
        ...state,
        selectedFilters: {
          ...state.selectedFilters,
          switchFilters: {
            ...state.selectedFilters.switchFilters,
            publicationGroup: action.payload,
          },
        },
        tableData: { ...state.tableData, page: 0 },
        applyTimestamp: Date.now(),
      };

    case BooksFilterActionType.Apply:
      return {
        ...state,
        tableData: { ...state.tableData, page: 0 },
        applyTimestamp: Date.now(),
      };

    case BooksFilterActionType.Clear:
      return state;

    default:
      console.log("default");
      return { ...state, ...dataTableReducer(state, action) };
  }
};
