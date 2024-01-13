import { UseQueryOptions } from "@tanstack/react-query";
import { Pet } from ".";
import { PetClient } from "./client";
import { PetKeyFactory } from "./keyFactory";
import { DataTableReducerState } from "common/reducers/DataTableReducer/types";

const pageDataQuery = (filter: DataTableReducerState): UseQueryOptions<Pet[]> => ({
  queryKey: PetKeyFactory.pageData(filter),
  queryFn: PetClient.fetchPageData,
});

const countQuery = (): UseQueryOptions<number> => ({
  queryKey: PetKeyFactory.count(),
  queryFn: PetClient.fetchCount,
});

export const PetQuery = {
  pageDataQuery,
  countQuery,
};
