import { RecipeListContextProvider } from "pages/Recipes/Context";
import { RecipeFilterWrapper } from "pages/Recipes/FilterWrapper";
import { FC } from "react";

export const RecipesList: FC = () => {
  return (
    <>
      <header>
        <h1>Recipes</h1>
      </header>

      <main>
        <RecipeListContextProvider>
          <RecipeFilterWrapper />

          <RecipesList />
        </RecipeListContextProvider>
      </main>
    </>
  );
};
