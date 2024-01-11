import { Book } from "api/book";
import { useBookDataForFilters } from "api/book/hook";
import { useReducer } from "react";
import { booksFilterReducer } from "./reducer";
import {
  BooksFilterActionType,
  BooksFilterReducer,
  DEFAULT_BOOKS_FILTER_REDUCER_STATE,
} from "./types";

export const useBooksFilterReducer = () => {
  const {} = useBookDataForFilters((books: Book[]) => {
    dispatch({ type: BooksFilterActionType.SetFiltersData, payload: books });
    return books;
  });

  const [state, dispatch] = useReducer<BooksFilterReducer>(
    booksFilterReducer,
    DEFAULT_BOOKS_FILTER_REDUCER_STATE,
  );

  return { state, dispatch };
};
