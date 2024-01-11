import { Dispatch, FC, PropsWithChildren, createContext, useMemo } from "react";
import {
  BooksFilterActions,
  BooksFilterReducerState,
} from "../FilterReducer/types";
import { useBooksFilterReducer } from "../FilterReducer/useBooksFilterReducer";

export interface BooksListContextType {
  filterState: BooksFilterReducerState;
  dispatch: Dispatch<BooksFilterActions>;
}

export const BooksListContext = createContext<BooksListContextType | undefined>(
  undefined,
);

export const BooksListContextProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const { state, dispatch } = useBooksFilterReducer();

  const value = useMemo(
    () => ({
      filterState: state,
      dispatch,
    }),
    [state, dispatch],
  );

  return (
    <BooksListContext.Provider value={value}>
      {children}
    </BooksListContext.Provider>
  );
};
