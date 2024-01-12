import { QueryFunctionContext } from "@tanstack/react-query";
import { PublicationGroup } from "common/constants/PublicationGroup";
import { Book } from ".";
import { BookKeyFactory } from "./keyFactory";

const fetchDataForFilters = async (): Promise<Book[]> => {
  return Promise.resolve(mockedBooks);
};

const fetchTableData = async ({
  queryKey,
}: QueryFunctionContext): Promise<Book[]> => {
  const { tableData, selectedFilters } = (<
    ReturnType<typeof BookKeyFactory.tableData>
  >queryKey)[0];

  if (!selectedFilters.dropdownFilters || !selectedFilters.switchFilters)
    return Promise.reject();

  const { publicationGroup } = selectedFilters.switchFilters;
  const { selectedAuthors, selectedCategories } =
    selectedFilters.dropdownFilters;

  return Promise.resolve(
    mockedBooks
      .filter((element) => {
        return (
          selectedAuthors.some((id) => element.author_id === id) &&
          selectedCategories.some((id) => element.category_id === id) &&
          (publicationGroup === PublicationGroup.ONLY_LATEST
            ? +element.publication_date > 2000
            : publicationGroup === PublicationGroup.ONLY_OLD
            ? +element.publication_date < 1900
            : true)
        );
      })
      .slice(tableData.page, tableData.page + tableData.pageSize),
  );
};

const fetchCount = async ({
  queryKey,
}: QueryFunctionContext): Promise<number> => {
  const { dropdownFilters, switchFilters } = (<
    ReturnType<typeof BookKeyFactory.count>
  >queryKey)[0];

  if (!dropdownFilters || !switchFilters) return Promise.reject();

  const { publicationGroup } = switchFilters;
  const { selectedAuthors, selectedCategories } = dropdownFilters;

  return Promise.resolve(
    mockedBooks.filter((element) => {
      return (
        selectedAuthors.some((id) => element.author_id === id) &&
        selectedCategories.some((id) => element.category_id === id) &&
        (publicationGroup === PublicationGroup.ONLY_LATEST
          ? +element.publication_date > 2000
          : publicationGroup === PublicationGroup.ONLY_OLD
          ? +element.publication_date < 1900
          : true)
      );
    }).length,
  );
};

const fetchById = async ({ queryKey }: QueryFunctionContext): Promise<Book> => {
  const { id } = (<ReturnType<typeof BookKeyFactory.bookById>>queryKey)[0];
  return Promise.resolve(
    mockedBooks.find((element) => element.id === id) || mockedBooks[0],
  );
};

export const BookMockedClient = {
  fetchDataForFilters,
  fetchTableData,
  fetchCount,
  fetchById,
};

const mockedBooks: Book[] = [
  {
    id: 1,
    title: "Pride and Prejudice",
    category_id: 1,
    author_id: 1,
    category: "Fiction",
    author: "Jane Austen",
    publication_date: "1813",
    rating: 4.5,
  },
  {
    id: 2,
    title: "1984",
    category_id: 1,
    author_id: 2,
    category: "Fiction",
    author: "George Orwell",
    publication_date: "1949",
    rating: 4.6,
  },
  {
    id: 3,
    title: "Harry Potter and the Sorcerer's Stone",
    category_id: 5,
    author_id: 3,
    category: "Fantasy",
    author: "J.K. Rowling",
    publication_date: "1997",
    rating: 4.8,
  },
  {
    id: 4,
    title: "The Shining",
    category_id: 2,
    author_id: 4,
    category: "Science Fiction",
    author: "Stephen King",
    publication_date: "1977",
    rating: 4.2,
  },
  {
    id: 5,
    title: "Murder on the Orient Express",
    category_id: 3,
    author_id: 5,
    category: "Mystery",
    author: "Agatha Christie",
    publication_date: "1934",
    rating: 4.3,
  },
  {
    id: 6,
    title: "To Kill a Mockingbird",
    category_id: 1,
    author_id: 6,
    category: "Fiction",
    author: "Harper Lee",
    publication_date: "1960",
    rating: 4.7,
  },
  {
    id: 7,
    title: "The Adventures of Huckleberry Finn",
    category_id: 1,
    author_id: 7,
    category: "Fiction",
    author: "Mark Twain",
    publication_date: "1885",
    rating: 4.4,
  },
  {
    id: 8,
    title: "The Great Gatsby",
    category_id: 1,
    author_id: 8,
    category: "Fiction",
    author: "F. Scott Fitzgerald",
    publication_date: "1925",
    rating: 4.6,
  },
  {
    id: 9,
    title: "The Hobbit",
    category_id: 5,
    author_id: 9,
    category: "Fantasy",
    author: "Tolkien",
    publication_date: "1937",
    rating: 4.5,
  },
  {
    id: 10,
    title: "War and Peace",
    category_id: 1,
    author_id: 10,
    category: "Fiction",
    author: "J.R.R. Tolkien",
    publication_date: "1869",
    rating: 4.4,
  },
  {
    id: 11,
    title: "Moby-Dick",
    category_id: 2,
    author_id: 11,
    category: "Science Fiction",
    author: "Herman Melville",
    publication_date: "1851",
    rating: 4.3,
  },
  {
    id: 12,
    title: "A Tale of Two Cities",
    category_id: 1,
    author_id: 12,
    category: "Fiction",
    author: "Charles Dickens",
    publication_date: "1859",
    rating: 4.7,
  },
  {
    id: 13,
    title: "One Hundred Years of Solitude",
    category_id: 1,
    author_id: 13,
    category: "Fiction",
    author: "Gabriel Garcia Marquez",
    publication_date: "1967",
    rating: 4.8,
  },
  {
    id: 14,
    title: "Beloved",
    category_id: 1,
    author_id: 15,
    category: "Fiction",
    author: "Toni Morrison",
    publication_date: "1987",
    rating: 4.4,
  },
  {
    id: 15,
    title: "The Catcher in the Rye",
    category_id: 1,
    author_id: 16,
    category: "Fiction",
    author: "J.D. Salinger",
    publication_date: "1951",
    rating: 4.6,
  },
  {
    id: 16,
    title: "Crime and Punishment",
    category_id: 1,
    author_id: 17,
    category: "Fiction",
    author: "Fyodor Dostoevsky",
    publication_date: "1866",
    rating: 4.3,
  },
  {
    id: 17,
    title: "The Handmaid's Tale",
    category_id: 6,
    author_id: 18,
    category: "Non-Fiction",
    author: "Margaret Atwood",
    publication_date: "1985",
    rating: 4.5,
  },
  {
    id: 18,
    title: "American Gods",
    category_id: 6,
    author_id: 19,
    category: "Non-Fiction",
    author: "Neil Gaiman",
    publication_date: "2001",
    rating: 4.2,
  },
  {
    id: 19,
    title: "Do Androids Dream of Electric Sheep?",
    category_id: 2,
    author_id: 20,
    category: "Science Fiction",
    author: "Philip K. Dick",
    publication_date: "1968",
    rating: 4.4,
  },
  {
    id: 20,
    title: "Sense and Sensibility",
    category_id: 1,
    author_id: 1,
    category: "Fiction",
    author: "Jane Austen",
    publication_date: "1811",
    rating: 4.6,
  },
  {
    id: 21,
    title: "Animal Farm",
    category_id: 1,
    author_id: 2,
    category: "Fiction",
    author: "George Orwell",
    publication_date: "1945",
    rating: 4.7,
  },
  {
    id: 22,
    title: "Harry Potter and the Chamber of Secrets",
    category_id: 5,
    author_id: 3,
    category: "Fantasy",
    author: "J.K. Rowling",
    publication_date: "1998",
    rating: 4.9,
  },
  {
    id: 23,
    title: "The Stand",
    category_id: 2,
    author_id: 4,
    category: "Science Fiction",
    author: "Stephen King",
    publication_date: "1978",
    rating: 4.1,
  },
  {
    id: 24,
    title: "And Then There Were None",
    category_id: 3,
    author_id: 5,
    category: "Mystery",
    author: "Agatha Christie",
    publication_date: "1939",
    rating: 4.3,
  },
  {
    id: 25,
    title: "Go Set a Watchman",
    category_id: 1,
    author_id: 6,
    category: "Fiction",
    author: "Harper Lee",
    publication_date: "2015",
    rating: 4.5,
  },
  {
    id: 26,
    title: "The Adventures of Tom Sawyer",
    category_id: 1,
    author_id: 7,
    category: "Fiction",
    author: "Mark Twain",
    publication_date: "1876",
    rating: 4.2,
  },
  {
    id: 27,
    title: "The Catcher in the Rye",
    category_id: 1,
    author_id: 16,
    category: "Fiction",
    author: "J.D. Salinger",
    publication_date: "1951",
    rating: 4.6,
  },
  {
    id: 28,
    title: "The Idiot",
    category_id: 1,
    author_id: 17,
    category: "Fiction",
    author: "Fyodor Dostoevsky",
    publication_date: "1869",
    rating: 4.4,
  },
  {
    id: 29,
    title: "The Testaments",
    category_id: 6,
    author_id: 18,
    category: "Non-Fiction",
    author: "Margaret Atwood",
    publication_date: "2019",
    rating: 4.7,
  },
  {
    id: 30,
    title: "Neverwhere",
    category_id: 6,
    author_id: 19,
    category: "Non-Fiction",
    author: "Neil Gaiman",
    publication_date: "1996",
    rating: 4.3,
  },
  {
    id: 31,
    title: "A Scanner Darkly",
    category_id: 2,
    author_id: 20,
    category: "Science Fiction",
    author: "Philip K. Dick",
    publication_date: "1977",
    rating: 4.2,
  },
  {
    id: 32,
    title: "The Lord of the Rings: The Fellowship of the Ring",
    category_id: 5,
    author_id: 9,
    category: "Fantasy",
    author: "Tolkien",
    publication_date: "1954",
    rating: 4.8,
  },
  {
    id: 33,
    title: "The Hunger Games",
    category_id: 5,
    author_id: 21,
    category: "Fantasy",
    author: "Suzanne Collins",
    publication_date: "2008",
    rating: 4.1,
  },
  {
    id: 34,
    title: "The Catcher in the Rye",
    category_id: 1,
    author_id: 16,
    category: "Fiction",
    author: "J.D. Salinger",
    publication_date: "1951",
    rating: 4.6,
  },
  {
    id: 35,
    title: "The Old Man and the Sea",
    category_id: 1,
    author_id: 22,
    category: "Fiction",
    author: "Ernest Hemingway",
    publication_date: "1952",
    rating: 4.4,
  },
  {
    id: 36,
    title: "The Hobbit",
    category_id: 5,
    author_id: 9,
    category: "Fantasy",
    author: "Tolkien",
    publication_date: "1937",
    rating: 4.5,
  },
  {
    id: 37,
    title: "The Road",
    category_id: 1,
    author_id: 23,
    category: "Fiction",
    author: "Cormac McCarthy",
    publication_date: "2006",
    rating: 4.3,
  },
  {
    id: 38,
    title: "The Stand",
    category_id: 2,
    author_id: 4,
    category: "Science Fiction",
    author: "Stephen King",
    publication_date: "1978",
    rating: 4.1,
  },
  {
    id: 39,
    title: "The Martian",
    category_id: 2,
    author_id: 24,
    category: "Science Fiction",
    author: "Andy Weir",
    publication_date: "2011",
    rating: 4.7,
  },
  {
    id: 40,
    title: "The Da Vinci Code",
    category_id: 3,
    author_id: 25,
    category: "Mystery",
    author: "Dan Brown",
    publication_date: "2003",
    rating: 4.5,
  },
  {
    id: 41,
    title: "The Alchemist",
    category_id: 7,
    author_id: 26,
    category: "Philosophy",
    author: "Paulo Coelho",
    publication_date: "1988",
    rating: 4.6,
  },
  {
    id: 42,
    title: "Brave New World",
    category_id: 2,
    author_id: 27,
    category: "Science Fiction",
    author: "Aldous Huxley",
    publication_date: "1932",
    rating: 4.4,
  },
  {
    id: 43,
    title: "The Odyssey",
    category_id: 1,
    author_id: 28,
    category: "Fiction",
    author: "Homer",
    publication_date: "8th century BCE",
    rating: 4.5,
  },
  {
    id: 44,
    title: "The Road Not Taken",
    category_id: 8,
    author_id: 29,
    category: "Poetry",
    author: "Robert Frost",
    publication_date: "1916",
    rating: 4.8,
  },
  {
    id: 45,
    title: "A Brief History of Time",
    category_id: 9,
    author_id: 30,
    category: "Science",
    author: "Stephen Hawking",
    publication_date: "1988",
    rating: 4.7,
  },
  {
    id: 46,
    title: "The Hitchhiker's Guide to the Galaxy",
    category_id: 2,
    author_id: 31,
    category: "Science Fiction",
    author: "Douglas Adams",
    publication_date: "1979",
    rating: 4.6,
  },
  {
    id: 47,
    title: "The Girl with the Dragon Tattoo",
    category_id: 3,
    author_id: 32,
    category: "Mystery",
    author: "Stieg Larsson",
    publication_date: "2005",
    rating: 4.4,
  },
  {
    id: 48,
    title: "The Road",
    category_id: 1,
    author_id: 23,
    category: "Fiction",
    author: "Cormac McCarthy",
    publication_date: "2006",
    rating: 4.3,
  },
  {
    id: 49,
    title: "The Silent Patient",
    category_id: 3,
    author_id: 33,
    category: "Mystery",
    author: "Alex Michaelides",
    publication_date: "2019",
    rating: 4.5,
  },
  {
    id: 50,
    title: "The Road Less Traveled",
    category_id: 7,
    author_id: 34,
    category: "Philosophy",
    author: "M. Scott Peck",
    publication_date: "1978",
    rating: 4.2,
  },
];
