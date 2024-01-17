import { RecipeFilterState } from "api/recipes";
import { genericFilteredDataTableKeyFactory } from "common/api/genericFilteredDataTableKeyFactory";

export const RecipeKeyFactory = {
  ...genericFilteredDataTableKeyFactory<RecipeFilterState>("recipe"),
};
