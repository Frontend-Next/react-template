import { useBookDataForFilters } from "api/book/hook";
import { bookFilterReducer } from "pages/Books/FilterReducer/reducer";
import {
  BookFilterActionTypes,
  BookFilterReducer,
  DEFAULT_BOOK_FILTER_REDUCER_STATE,
} from "pages/Books/FilterReducer/types";
import { useEffect, useReducer } from "react";

export const useBookFilterReducer = () => {
  const { data } = useBookDataForFilters();
  const [state, dispatch] = useReducer<BookFilterReducer>(
    bookFilterReducer,
    DEFAULT_BOOK_FILTER_REDUCER_STATE,
  );

  useEffect(() => {
    if (data)
      dispatch({ type: BookFilterActionTypes.SetFiltersData, payload: data });
  }, [data]);

  return { state, dispatch };
};
