import { uniqueFilterRowFromBookArrayByKey } from "models/book";
import { booksReducerInitializerFunction } from "./initializer";
import {
  BooksFilterActionType,
  BooksFilterActions,
  BooksFilterReducer,
  BooksFilterState,
} from "./types";

export const booksFilterReducer: BooksFilterReducer = (
  state: BooksFilterState,
  action: BooksFilterActions,
): BooksFilterState => {
  switch (action.type) {
    case BooksFilterActionType.SetFiltersData:
      return booksReducerInitializerFunction(action.payload);

    case BooksFilterActionType.SelectAll:
      if (!state.dropdownFilters) return { ...state };

      return booksReducerInitializerFunction(
        state.dropdownFilters?.bookDataForFilters,
      );

    case BooksFilterActionType.PageChange:
      return { ...state, tableData: { ...state.tableData, ...action.payload } };

    case BooksFilterActionType.AuthorChange:
      if (!state.dropdownFilters) return { ...state };

      const newSelectedBookFilterDataByAuthor =
        state.dropdownFilters.bookDataForFilters?.filter((book) =>
          action.payload.some((value) => value === book.author_id),
        );

      const categories: FilterRow[] = uniqueFilterRowFromBookArrayByKey(
        newSelectedBookFilterDataByAuthor || [],
        "category_id",
        "category",
      );

      return {
        ...state,
        dropdownFilters: {
          ...state.dropdownFilters,
          selectedBookFilterData: newSelectedBookFilterDataByAuthor,
          selectedAuthors: action.payload,
          allCategories: categories,
          selectedCategories: [...categories.map((element) => element.id)],
        },
      };

    case BooksFilterActionType.CategoryChange:
      if (!state.dropdownFilters) return { ...state };

      const newSelectedBookFilterDataByCategory =
        state.dropdownFilters.bookDataForFilters.filter((book) =>
          action.payload.some((value) => value === book.category_id),
        );

      const authors = uniqueFilterRowFromBookArrayByKey(
        newSelectedBookFilterDataByCategory || [],
        "author_id",
        "author",
      );

      return {
        ...state,
        dropdownFilters: {
          ...state.dropdownFilters,
          selectedBookFilterData: newSelectedBookFilterDataByCategory,
          allAuthors: authors,
          selectedAuthors: [...authors.map((element) => element.id)],
          selectedCategories: action.payload,
        },
      };

    case BooksFilterActionType.PublicationGroupChange:
      if (!state.switchFilters) return { ...state };

      return {
        ...state,
        switchFilters: {
          ...state.switchFilters,
          publicationGroup: action.payload,
        },
        applyTimestamp: Date.now(),
      };

    case BooksFilterActionType.Apply:
      return {
        ...state,
        applyTimestamp: Date.now(),
      };

    default:
      return state;
  }
};
