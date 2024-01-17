import { useBookFilterReducer } from "pages/Books/FilterReducer/hook";
import { Dispatch, FC, PropsWithChildren, createContext, useMemo } from "react";
import {
  BookFilterActions,
  BookFilterReducerState,
} from "../FilterReducer/types";

export interface BookListContextType {
  filterState: BookFilterReducerState;
  dispatch: Dispatch<BookFilterActions>;
}

export const BookListContext = createContext<BookListContextType | undefined>(
  undefined,
);

export const BookListContextProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const { state, dispatch } = useBookFilterReducer();

  const value = useMemo(
    () => ({
      filterState: state,
      dispatch,
    }),
    [state, dispatch],
  );

  return (
    <BookListContext.Provider value={value}>
      {children}
    </BookListContext.Provider>
  );
};
