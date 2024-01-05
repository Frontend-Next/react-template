import { useContext } from "react";
import { BooksListContext, BooksListContextType } from ".";

export const useBooksListContext = (): BooksListContextType => {
  const context = useContext(BooksListContext);

  if (!context)
    throw new Error("useBooksListContext must be used within BooksListContext");
  else return context;
};
