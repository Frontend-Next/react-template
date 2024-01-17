import { FilterRow } from "common/types/FilterRow";
import { BookUtils } from "common/utils/BookUtils";
import {
  AuthorChangeAction,
  BookFilterReducerState,
} from "pages/Books/FilterReducer/types";

export const authorChange = (
  state: BookFilterReducerState,
  action: AuthorChangeAction,
): BookFilterReducerState => {
  if (
    !state.filterData?.dataForFilters ||
    !state.selectedFilters?.dropdownFilters
  )
    return { ...state };

  const newSelectedBookFilterDataByAuthor =
    state.filterData.dataForFilters.filter((book) =>
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
      selectedFilterData: newSelectedBookFilterDataByAuthor,
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
