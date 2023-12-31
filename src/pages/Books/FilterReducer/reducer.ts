import { uniqueFilterRowFromBookArrayByKey } from "models/book";
import { booksReducerInitializerFunction } from "./initializer";
import {
  BooksFilter,
  BooksFilterActionType,
  BooksFilterActions,
  BooksFilterReducer,
} from "./types";

export const booksFilterReducer: BooksFilterReducer = (
  state: BooksFilter,
  action: BooksFilterActions,
): BooksFilter => {
  switch (action.type) {
    case BooksFilterActionType.AuthorChange:
      const newSelectedBookFilterDataByAuthor = state.bookFilterData.filter(
        (book) => action.payload.some((value) => value === book.author_id),
      );

      const categories: FilterRow[] = uniqueFilterRowFromBookArrayByKey(
        newSelectedBookFilterDataByAuthor,
        "category_id",
        "category",
      );

      console.log("categories", categories);

      return {
        ...state,
        selectedBookFilterData: newSelectedBookFilterDataByAuthor,
        selectedAuthors: action.payload,
        allCategories: categories,
        selectedCategories: [...categories.map((element) => element.id)],
      };

    case BooksFilterActionType.CategoryChange:
      const newSelectedBookFilterDataByCategory = state.bookFilterData.filter(
        (book) => action.payload.some((value) => value === book.category_id),
      );

      const authors = uniqueFilterRowFromBookArrayByKey(
        newSelectedBookFilterDataByCategory,
        "author_id",
        "author",
      );

      return {
        ...state,
        selectedBookFilterData: newSelectedBookFilterDataByCategory,
        allAuthors: authors,
        selectedAuthors: [...authors.map((element) => element.id)],
        selectedCategories: action.payload,
      };

    case BooksFilterActionType.SelectAll:
      return booksReducerInitializerFunction(action.payload);

    default:
      return state;
  }
};
