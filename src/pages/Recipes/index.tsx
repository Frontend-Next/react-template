import { FC } from "react";
import { RecipeListContextProvider } from "./Context";
import { RecipeFilterWrapper } from "./FilterWrapper";

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
