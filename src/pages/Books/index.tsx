import { BookListContextProvider } from "pages/Books/Context";
import { BooksTable } from "pages/Books/DataTable";
import { BooksFilterWrapper } from "pages/Books/FilterWrapper";
import { FC } from "react";

export const BooksList: FC = () => {
  return (
    <>
      <header>
        <h1>Books</h1>
      </header>

      <main>
        <BookListContextProvider>
          <BooksFilterWrapper />

          <BooksTable />
        </BookListContextProvider>
      </main>
    </>
  );
};
