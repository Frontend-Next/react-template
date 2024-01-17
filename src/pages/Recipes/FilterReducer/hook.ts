import { useRecipeDataForFilters } from "api/recipes/hook";
import { Dispatch, useEffect, useReducer } from "react";
import { recipeFilterReducer } from "./reducer";
import {
  DEFAULT_RECIPE_FILTER_REDUCER_STATE,
  RecipeFilterActionType,
  RecipeFilterActions,
  RecipeFilterReducer,
  RecipeFilterReducerState,
} from "./types";

interface UseRecipeFilterReducerType {
  state: RecipeFilterReducerState;
  dispatch: Dispatch<RecipeFilterActions>;
}

export const useRecipeFilterReducer = (): UseRecipeFilterReducerType => {
  const { data } = useRecipeDataForFilters();

  useEffect(() => {
    if (data)
      dispatch({ type: RecipeFilterActionType.SetFiltersData, payload: data });
  });

  const [state, dispatch] = useReducer<RecipeFilterReducer>(
    recipeFilterReducer,
    DEFAULT_RECIPE_FILTER_REDUCER_STATE,
  );

  return { state, dispatch };
};
