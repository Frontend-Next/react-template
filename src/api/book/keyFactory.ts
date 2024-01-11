import { BooksExtendedFilterState, BooksFilterState } from ".";

export const BookKeyFactory = {
  all: { domain: "book" } as const,
  list: () => ({ ...BookKeyFactory.all, type: "list" }) as const,
  element: () => ({ ...BookKeyFactory.all, type: "element" }) as const,
  dataForFilters: () =>
    [{ ...BookKeyFactory.list, name: "data-for-filters" }] as const,
  tableData: (filter: BooksFilterState) =>
    [
      {
        ...BookKeyFactory.list,
        name: "table-data",
        ...filter,
      },
    ] as const,
  count: (extendedFilter: BooksExtendedFilterState) =>
    [
      {
        ...BookKeyFactory.list,
        name: "count",
        ...extendedFilter,
      },
    ] as const,
  bookById: (id: number) =>
    [{ ...BookKeyFactory.element, name: "book-by-id", id }] as const,
};
