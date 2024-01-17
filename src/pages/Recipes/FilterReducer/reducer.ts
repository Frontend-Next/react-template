import { filteredDataTableReducer } from "common/reducers/FilteredDataTableReducer/reducer";
import { RecipeFilterActionType, RecipeFilterReducer } from "./types";

export const recipeFilterReducer: RecipeFilterReducer = (state, action) => {
  switch (action.type) {
    case RecipeFilterActionType.AuthorChange:
      return state;

    case RecipeFilterActionType.CategoryChange:
      return state;

    case RecipeFilterActionType.IngredientsChange:
      return state;

    default:
      return { ...state, ...filteredDataTableReducer(state, action) };
  }
};
