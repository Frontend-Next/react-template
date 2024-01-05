import { useBookDataForFilters } from "api/book/hook";
import { Book } from "models/book";
import { useReducer } from "react";
import { booksFilterReducer } from "./reducer";
import { BooksFilterActionType, BooksFilterReducer } from "./types";

export const useBooksFilterReducer = () => {
  const {} = useBookDataForFilters((books: Book[]) => {
    console.log("useBookDataForFilters selector", books);
    dispatch({ type: BooksFilterActionType.SetFiltersData, payload: books });
    return books;
  });

  const [state, dispatch] = useReducer<BooksFilterReducer>(
    booksFilterReducer,
    {},
  );

  return { state, dispatch };
};
