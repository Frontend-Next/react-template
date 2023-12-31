import { QueryFunctionContext, useSuspenseQuery } from "@tanstack/react-query";
import { bookKeysFactory } from "api/keyFactories/bookKeysFactory";
import { Book } from "models/book";
import { axiosInstance } from "services/AxiosConfig";

export const fetchBookFilters = async ({}: QueryFunctionContext<
  ReturnType<(typeof bookKeysFactory)["filter"]>
>): Promise<Book[]> => {
  return axiosInstance.get("books/filter").then((response) => response.data);
};

export const useBookFiltersData = () => {
  return useSuspenseQuery({
    queryKey: bookKeysFactory.filter(),
    queryFn: fetchBookFilters,
    staleTime: Infinity,
  });
};
