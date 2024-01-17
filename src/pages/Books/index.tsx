import { FC } from "react";
import { BookListContextProvider } from "./Context";
import { BooksTable } from "./DataTable";
import { BooksFilterWrapper } from "./FilterWrapper";

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
