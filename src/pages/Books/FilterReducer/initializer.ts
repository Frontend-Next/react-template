import { Book, uniqueFilterRowFromBookArrayByKey } from "models/book";
import { BooksFilter } from "./types";

export const booksReducerInitializerFunction = (books: Book[]): BooksFilter => {
  console.log("booksReducerInitializerFunction", books);

  const authors = uniqueFilterRowFromBookArrayByKey(
    books,
    "author_id",
    "author",
  );
  console.log("booksReducerInitializerFunction authors", authors);

  const categories: FilterRow[] = uniqueFilterRowFromBookArrayByKey(
    books,
    "category_id",
    "category",
  );
  console.log("booksReducerInitializerFunction categories", categories);

  return {
    bookFilterData: books,
    selectedBookFilterData: books,
    allAuthors: authors,
    selectedAuthors: [...authors.map((element) => element.id)],
    allCategories: categories,
    selectedCategories: [...categories.map((element) => element.id)],
    title: "",
  };
};
