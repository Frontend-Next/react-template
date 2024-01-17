import { useRecipeFilterReducer } from "pages/Recipes/FilterReducer/hook";
import {
  RecipeFilterActions,
  RecipeFilterReducerState,
} from "pages/Recipes/FilterReducer/types";
import { Dispatch, FC, PropsWithChildren, createContext, useMemo } from "react";

export interface RecipeListContextType {
  filterState: RecipeFilterReducerState;
  dispatch: Dispatch<RecipeFilterActions>;
}

export const RecipeListContext = createContext<
  RecipeListContextType | undefined
>(undefined);

export const RecipeListContextProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const { state, dispatch } = useRecipeFilterReducer();

  const value = useMemo(
    () => ({
      filterState: state,
      dispatch,
    }),
    [state, dispatch],
  );

  return (
    <RecipeListContext.Provider value={value}>
      {children}
    </RecipeListContext.Provider>
  );
};
