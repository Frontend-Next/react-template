import { useBookFiltersData } from "api/book";
import { FC } from "react";
import { BooksFilterWrapper } from "./BooksFilterWrapper";

export const BooksList: FC = () => {
  const { data } = useBookFiltersData();

  return (
    <>
      <header>
        <h1>Books</h1>
      </header>

      <main>
        <BooksFilterWrapper />

        <ul>
          {data?.map((element) => <li key={element.id}>{element.title}</li>)}
        </ul>
      </main>
    </>
  );
};
