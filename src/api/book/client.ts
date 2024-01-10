import { QueryFunctionContext } from "@tanstack/react-query";
import { Book } from "models/book";
import { axiosInstance } from "services/AxiosConfig";
import { BookKeyFactory } from "./keyFactory";
import { BookMockedClient } from "./mockData";

const mockData: boolean = true;

const fetchDataForFilters = async (): Promise<Book[]> => {
  return axiosInstance
    .get<Book[]>("books/filter")
    .then((response) => response.data);
};

const fetchTableData = async (): Promise<Book[]> => {
  return axiosInstance.get<Book[]>("books").then((response) => response.data);
};

const fetchCount = async (): Promise<number> => {
  return axiosInstance
    .get<number>("books/count")
    .then((response) => response.data);
};

const fetchById = async ({ queryKey }: QueryFunctionContext): Promise<Book> => {
  const { id } = (<ReturnType<typeof BookKeyFactory.bookById>>queryKey)[0];
  return axiosInstance
    .get<Book>(`book/${id}`)
    .then((response) => response.data);
};

export const BookClient = mockData
  ? { ...BookMockedClient }
  : {
      fetchDataForFilters,
      fetchTableData,
      fetchCount,
      fetchById,
    };
