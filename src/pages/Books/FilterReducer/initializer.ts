import { PublicationGroup } from "constants/PublicationGroup";
import { Book, uniqueFilterRowFromBookArrayByKey } from "models/book";
import { BooksFilterState } from "./types";

export const booksReducerInitializerFunction = (
  books: Book[],
): BooksFilterState => {
  const authors = uniqueFilterRowFromBookArrayByKey(
    books,
    "author_id",
    "author",
  );

  const categories: FilterRow[] = uniqueFilterRowFromBookArrayByKey(
    books,
    "category_id",
    "category",
  );

  return {
    tableData: {
      page: 0,
      pageSize: 10, // TODO: set to some default const
    },
    dropdownFilters: {
      bookDataForFilters: books,
      selectedBookFilterData: books,
      allAuthors: authors,
      selectedAuthors: [...authors.map((element) => element.id)],
      allCategories: categories,
      selectedCategories: [...categories.map((element) => element.id)],
    },
    dataFilters: {
      title: "",
    },
    switchFilters: {
      publicationGroup: PublicationGroup.ALL,
    },
    applyTimestamp: Date.now(),
  };
};
