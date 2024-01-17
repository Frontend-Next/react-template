import {
  RecipeListContext,
  RecipeListContextType,
} from "pages/Recipes/Context";
import { useContext } from "react";

export const useRecipeListContext = (): RecipeListContextType => {
  const context = useContext(RecipeListContext);

  if (!context)
    throw new Error(
      "useRecipeListContext must be used within RecipeListContext",
    );
  else return context;
};
