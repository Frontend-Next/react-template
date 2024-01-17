import { QueryFunctionContext } from "@tanstack/react-query";
import { mockedBooks } from "api/book/mockData";
import { Config } from "common/constants/Config";
import { PublicationGroup } from "common/constants/PublicationGroup";
import { axiosInstance } from "common/services/AxiosConfig";
import { Book } from ".";
import { BookKeyFactory } from "./keyFactory";

const provideDataForFilters = async (): Promise<Book[]> => {
  if (Config.USE_MOCKED_DATA) {
    return mockedBooks;
  } else {
    return axiosInstance
      .get<Book[]>("books/filter")
      .then((response) => response.data);
  }
};

const providePageData = async ({
  queryKey,
}: QueryFunctionContext): Promise<Book[]> => {
  const { tableData, filter } = (<ReturnType<typeof BookKeyFactory.pageData>>(
    queryKey
  ))[0];

  if (!filter.dropdownFilters || !filter.switchFilters) return Promise.reject();

  if (Config.USE_MOCKED_DATA) {
    const { publicationGroup } = filter.switchFilters;
    const { selectedAuthors, selectedCategories } = filter.dropdownFilters;

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
  } else {
    const urlParams = new URLSearchParams({
      page: tableData.page.toString(),
      pageSize: tableData.pageSize.toString(),
    });

    return axiosInstance
      .post<Book[]>(`books?${urlParams}`, filter)
      .then((response) => response.data);
  }
};

const provideDataCount = async ({
  queryKey,
}: QueryFunctionContext): Promise<number> => {
  const { filter } = (<ReturnType<typeof BookKeyFactory.dataCount>>queryKey)[0];

  if (!filter.dropdownFilters || !filter.switchFilters) return Promise.reject();

  if (Config.USE_MOCKED_DATA) {
    const { publicationGroup } = filter.switchFilters;
    const { selectedAuthors, selectedCategories } = filter.dropdownFilters;

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
  } else {
    return axiosInstance
      .post<number>("books/count", filter)
      .then((response) => response.data);
  }
};

export const BookClient = {
  provideDataForFilters,
  providePageData,
  provideDataCount,
};
