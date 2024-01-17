import { Book } from "api/book";
import { PublicationGroup } from "common/constants/PublicationGroup";
import {
  DEFAULT_PAGE,
  DEFAULT_PAGE_SIZE,
} from "common/constants/TableDefaults";
import { FilterRow } from "common/types/FilterRow";
import { BookUtils } from "common/utils/BookUtils";
import { BookFilterReducerState } from "pages/Books/FilterReducer/types";

export const booksReducerInitializerFunction = (
  books: Book[],
): BookFilterReducerState => {
  const authors = BookUtils.uniqueFilterRowFromBookArrayByKey(
    books,
    "author_id",
    "author",
  );

  const categories: FilterRow[] = BookUtils.uniqueFilterRowFromBookArrayByKey(
    books,
    "category_id",
    "category",
  );

  return {
    filterData: {
      dataForFilters: books,
      selectedFilterData: books,
      allAuthors: authors,
      allCategories: categories,
    },
    tableData: {
      page: DEFAULT_PAGE,
      pageSize: DEFAULT_PAGE_SIZE,
    },
    selectedFilters: {
      dropdownFilters: {
        selectedAuthors: [...authors.map((element) => element.id)],
        selectedCategories: [...categories.map((element) => element.id)],
      },
      dataFilters: {
        title: "",
      },
      switchFilters: {
        publicationGroup: PublicationGroup.ALL,
      },
    },
    applyTimestamp: Date.now(),
  };
};
