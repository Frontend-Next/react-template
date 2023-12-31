export interface Book {
  id: number;
  title: string;
  category_id: number;
  author_id: number;
  category: string;
  author: string;
  publication_date: string;
  rating: number;
}

export const uniqueFilterRowFromBookArrayByKey = (
  array: Book[],
  key: keyof Book,
  value: keyof Book,
): FilterRow[] => [
  ...new Map(
    array.map((item) => [
      item[key],
      {
        id: +item[key],
        value: `${item[value]}`,
      },
    ]),
  ).values(),
];
