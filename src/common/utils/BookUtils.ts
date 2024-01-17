import { Book } from "api/book";
import { FilterRow } from "common/types/FilterRow";

const uniqueFilterRowFromBookArrayByKey = (
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

export const BookUtils = {
  uniqueFilterRowFromBookArrayByKey,
};
