import { filteredDataTableReducer } from "common/reducers/FilteredDataTableReducer/reducer";
import {
  RecipeFilterActionTypes,
  RecipeFilterReducer,
} from "pages/Recipes/FilterReducer/types";

export const recipeFilterReducer: RecipeFilterReducer = (state, action) => {
  switch (action.type) {
    case RecipeFilterActionTypes.AuthorChange:
      return state;

    case RecipeFilterActionTypes.CategoryChange:
      return state;

    case RecipeFilterActionTypes.IngredientsChange:
      return state;

    default:
      return { ...state, ...filteredDataTableReducer(state, action) };
  }
};
