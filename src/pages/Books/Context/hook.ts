import { BookListContext, BookListContextType } from "pages/Books/Context";
import { useContext } from "react";

export const useBooksListContext = (): BookListContextType => {
  const context = useContext(BookListContext);

  if (!context)
    throw new Error("useBooksListContext must be used within BooksListContext");
  else return context;
};
