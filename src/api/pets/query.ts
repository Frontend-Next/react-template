import { UseQueryOptions } from "@tanstack/react-query";
import { DataTableReducerState } from "common/reducers/DataTableReducer/types";
import { Pet } from ".";
import { PetClient } from "./client";
import { PetKeyFactory } from "./keyFactory";

const pageDataQuery = (
  filter: DataTableReducerState,
): UseQueryOptions<Pet[]> => ({
  queryKey: PetKeyFactory.pageData(filter),
  queryFn: PetClient.fetchPageData,
});

const countQuery = (): UseQueryOptions<number> => ({
  queryKey: PetKeyFactory.dataCount(),
  queryFn: PetClient.fetchCount,
});

export const PetQuery = {
  pageDataQuery,
  countQuery,
};
