import { BookUtils } from "common/utils/BookUtils";
import { AuthorChangeAction, BooksFilterReducerState } from "../types";

export const authorChange = (
  state: BooksFilterReducerState,
  action: AuthorChangeAction,
): BooksFilterReducerState => {
  if (
    !state.filterData?.bookDataForFilters ||
    !state.selectedFilters?.dropdownFilters
  )
    return { ...state };

  const newSelectedBookFilterDataByAuthor =
    state.filterData.bookDataForFilters.filter((book) =>
      action.payload.some((value) => value === book.author_id),
    );

  const categories: FilterRow[] = BookUtils.uniqueFilterRowFromBookArrayByKey(
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
};
