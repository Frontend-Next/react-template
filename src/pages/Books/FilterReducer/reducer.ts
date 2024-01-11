import { BookUtils } from "utils/BookUtils";
import { BooksFilterReducerActions } from "./actions";
import { booksReducerInitializerFunction } from "./initializer";
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
      return BooksFilterReducerActions.setFiltersData(action);

    case BooksFilterActionType.SelectAll:
      if (!state.filterData?.bookDataForFilters) return { ...state };
      return booksReducerInitializerFunction(
        state.filterData.bookDataForFilters,
      );

    case BooksFilterActionType.PageChange:
      return { ...state, tableData: { ...state.tableData, ...action.payload } };

    case BooksFilterActionType.AuthorChange:
      if (
        !state.filterData?.bookDataForFilters ||
        !state.selectedFilters?.dropdownFilters
      )
        return { ...state };

      const newSelectedBookFilterDataByAuthor =
        state.filterData.bookDataForFilters.filter((book) =>
          action.payload.some((value) => value === book.author_id),
        );

      const categories: FilterRow[] =
        BookUtils.uniqueFilterRowFromBookArrayByKey(
          newSelectedBookFilterDataByAuthor || [],
          "category_id",
          "category",
        );

      return {
        ...state,
        filterData: {
          ...state.filterData,
          selectedBookFilterData: newSelectedBookFilterDataByAuthor,
          allCategories: categories,
        },
        selectedFilters: {
          ...state.selectedFilters,
          dropdownFilters: {
            ...state.selectedFilters.dropdownFilters,
            selectedAuthors: action.payload,
            selectedCategories: [...categories.map((element) => element.id)],
          },
        },
      };

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

    default:
      return state;
  }
};
