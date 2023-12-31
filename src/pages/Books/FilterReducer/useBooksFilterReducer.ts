import { useBookFiltersData } from "api/book";
import { Book } from "models/book";
import { useReducer } from "react";
import { booksReducerInitializerFunction } from "./initializer";
import { booksFilterReducer } from "./reducer";
import { BooksFilterReducer } from "./types";

export const useBooksFilterReducer = () => {
  const { data } = useBookFiltersData();

  const [state, dispatch] = useReducer<BooksFilterReducer, Book[]>(
    booksFilterReducer,
    data,
    booksReducerInitializerFunction,
  );

  return { state, dispatch };
};
