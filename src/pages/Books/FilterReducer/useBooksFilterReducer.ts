import { useBookDataForFilters } from "api/book/hook";
import { useEffect, useReducer } from "react";
import { booksFilterReducer } from "./reducer";
import {
  BooksFilterActionType,
  BooksFilterReducer,
  DEFAULT_BOOKS_FILTER_REDUCER_STATE,
} from "./types";

export const useBooksFilterReducer = () => {
  const { data } = useBookDataForFilters();

  useEffect(() => {
    if (data)
      dispatch({ type: BooksFilterActionType.SetFiltersData, payload: data });
  }, [data]);

  const [state, dispatch] = useReducer<BooksFilterReducer>(
    booksFilterReducer,
    DEFAULT_BOOKS_FILTER_REDUCER_STATE,
  );

  return { state, dispatch };
};
