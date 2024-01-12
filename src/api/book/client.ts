import { QueryFunctionContext } from "@tanstack/react-query";
import { Config } from "common/constants/Config";
import { axiosInstance } from "common/services/AxiosConfig";
import { Book } from ".";
import { BookKeyFactory } from "./keyFactory";
import { BookMockedClient } from "./mockData";

const fetchDataForFilters = async (): Promise<Book[]> => {
  return axiosInstance
    .get<Book[]>("books/filter")
    .then((response) => response.data);
};

const fetchTableData = async ({
  queryKey,
}: QueryFunctionContext): Promise<Book[]> => {
  const { tableData, selectedFilters } = (<
    ReturnType<typeof BookKeyFactory.tableData>
  >queryKey)[0];
  return axiosInstance
    .post<Book[]>("books", {
      page: tableData?.page,
      pageSize: tableData?.pageSize,
      ...selectedFilters,
    })
    .then((response) => response.data);
};

const fetchCount = async ({
  queryKey,
}: QueryFunctionContext): Promise<number> => {
  const { dataFilters, dropdownFilters, switchFilters } = (<
    ReturnType<typeof BookKeyFactory.count>
  >queryKey)[0];
  return axiosInstance
    .post<number>("books/count", {
      ...dataFilters,
      ...dropdownFilters,
      ...switchFilters,
    })
    .then((response) => response.data);
};

const fetchById = async ({ queryKey }: QueryFunctionContext): Promise<Book> => {
  const { id } = (<ReturnType<typeof BookKeyFactory.bookById>>queryKey)[0];
  return axiosInstance
    .get<Book>(`book/${id}`)
    .then((response) => response.data);
};

export const BookClient = Config.USE_MOCKED_DATA
  ? { ...BookMockedClient }
  : {
      fetchDataForFilters,
      fetchTableData,
      fetchCount,
      fetchById,
    };
