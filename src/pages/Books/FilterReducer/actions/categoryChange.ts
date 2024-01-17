import { BookUtils } from "common/utils/BookUtils";
import { BookFilterReducerState, CategoryChangeAction } from "../types";

export const categoryChange = (
  state: BookFilterReducerState,
  action: CategoryChangeAction,
): BookFilterReducerState => {
  if (
    !state.filterData?.dataForFilters ||
    !state.selectedFilters?.dropdownFilters
  )
    return { ...state };

  const newSelectedFilterDataByCategory =
    state.filterData.dataForFilters.filter((book) =>
      action.payload.some((value) => value === book.category_id),
    );

  const authors: FilterRow[] = BookUtils.uniqueFilterRowFromBookArrayByKey(
    newSelectedFilterDataByCategory || [],
    "author_id",
    "author",
  );

  return {
    ...state,
    filterData: {
      ...state.filterData,
      selectedFilterData: newSelectedFilterDataByCategory,
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
};
