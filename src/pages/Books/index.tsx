import { FC } from "react";
import { BooksFilterWrapper } from "./BooksFilterWrapper";
import { BooksTable } from "./BooksTable";
import { BooksListContextProvider } from "./Context";

export const BooksList: FC = () => {
  return (
    <>
      <header>
        <h1>Books</h1>
      </header>

      <main>
        <BooksListContextProvider>
          <BooksFilterWrapper />

          <BooksTable />
        </BooksListContextProvider>
      </main>
    </>
  );
};
