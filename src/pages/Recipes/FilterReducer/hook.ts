import { useRecipeDataForFilters } from "api/recipes/hook";
import { recipeFilterReducer } from "pages/Recipes/FilterReducer/reducer";
import {
  DEFAULT_RECIPE_FILTER_REDUCER_STATE,
  RecipeFilterActionTypes,
  RecipeFilterActions,
  RecipeFilterReducer,
  RecipeFilterReducerState,
} from "pages/Recipes/FilterReducer/types";
import { Dispatch, useEffect, useReducer } from "react";

interface UseRecipeFilterReducerType {
  state: RecipeFilterReducerState;
  dispatch: Dispatch<RecipeFilterActions>;
}

export const useRecipeFilterReducer = (): UseRecipeFilterReducerType => {
  const { data } = useRecipeDataForFilters();
  const [state, dispatch] = useReducer<RecipeFilterReducer>(
    recipeFilterReducer,
    DEFAULT_RECIPE_FILTER_REDUCER_STATE,
  );

  useEffect(() => {
    if (data)
      dispatch({ type: RecipeFilterActionTypes.SetFiltersData, payload: data });
  });

  return { state, dispatch };
};
