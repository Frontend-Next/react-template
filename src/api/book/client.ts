import { QueryFunctionContext } from "@tanstack/react-query";
import { Book } from "models/book";
import { axiosInstance } from "services/AxiosConfig";
import { BookKeyFactory } from "./keyFactory";

export const fetchBookDataForFilters = async (): Promise<Book[]> => {
  return axiosInstance
    .get<Book[]>("books/filter")
    .then((response) => response.data);
};

export const fetchBookTableData = async (): Promise<Book[]> => {
  return axiosInstance.get<Book[]>("books").then((response) => response.data);
};

export const fetchBookById = async ({
  queryKey,
}: QueryFunctionContext): Promise<Book> => {
  const { id } = (<ReturnType<typeof BookKeyFactory.bookById>>queryKey)[0];
  return axiosInstance
    .get<Book>(`book/${id}`)
    .then((response) => response.data);
};

export const BookClient = {
  fetchBookDataForFilters,
  fetchBookTableData,
  fetchBookById,
};
