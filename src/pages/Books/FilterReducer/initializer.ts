import { Book } from "api/book";
import { PublicationGroup } from "common/constants/PublicationGroup";
import {
  DEFAULT_PAGE,
  DEFAULT_PAGE_SIZE,
} from "common/constants/TableDefaults";
import { BookUtils } from "common/utils/BookUtils";
import { BooksFilterReducerState } from "./types";

export const booksReducerInitializerFunction = (
  books: Book[],
): BooksFilterReducerState => {
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
      bookDataForFilters: books,
      selectedBookFilterData: books,
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
