import { useBookDataForFilters } from "api/book/hook";
import { bookFilterReducer } from "pages/Books/FilterReducer/reducer";
import {
  BookFilterActionType,
  BookFilterReducer,
  DEFAULT_BOOK_FILTER_REDUCER_STATE,
} from "pages/Books/FilterReducer/types";
import { useEffect, useReducer } from "react";

export const useBookFilterReducer = () => {
  const { data } = useBookDataForFilters();

  useEffect(() => {
    if (data)
      dispatch({ type: BookFilterActionType.SetFiltersData, payload: data });
  }, [data]);

  const [state, dispatch] = useReducer<BookFilterReducer>(
    bookFilterReducer,
    DEFAULT_BOOK_FILTER_REDUCER_STATE,
  );

  return { state, dispatch };
};
