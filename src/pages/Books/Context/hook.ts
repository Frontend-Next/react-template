import { useContext } from "react";
import { BookListContext, BookListContextType } from ".";

export const useBooksListContext = (): BookListContextType => {
  const context = useContext(BookListContext);

  if (!context)
    throw new Error("useBooksListContext must be used within BooksListContext");
  else return context;
};
