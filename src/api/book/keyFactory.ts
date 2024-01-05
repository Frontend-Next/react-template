export const BookKeyFactory = {
  all: { domain: "book" } as const,
  list: () => ({ ...BookKeyFactory.all, type: "list" }) as const,
  element: () => ({ ...BookKeyFactory.all, type: "element" }) as const,
  dataForFilters: () =>
    [{ ...BookKeyFactory.list, name: "data-for-filters" }] as const,
  tableData: (
    page: number,
    pageSize: number,
    authors: number[],
    categories: number[],
  ) =>
    [
      {
        ...BookKeyFactory.list,
        name: "table-data",
        page,
        pageSize,
        authors,
        categories,
      },
    ] as const,
  bookById: (id: number) =>
    [{ ...BookKeyFactory.element, name: "book-by-id", id }] as const,
};
