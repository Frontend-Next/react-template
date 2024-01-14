import { genericFilteredDataTableKeyFactory } from "common/api/genericFilteredDataTableKeyFactory";
import { RecipeFilterState } from ".";

export const RecipeKeyFactory = {
  ...genericFilteredDataTableKeyFactory<RecipeFilterState>("recipe"),
};
