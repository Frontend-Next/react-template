import { useContext } from "react";
import { RecipeListContext, RecipeListContextType } from ".";

export const useRecipeListContext = (): RecipeListContextType => {
  const context = useContext(RecipeListContext);

  if (!context)
    throw new Error(
      "useRecipeListContext must be used within RecipeListContext",
    );
  else return context;
};
