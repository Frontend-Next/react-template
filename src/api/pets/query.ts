import { UseQueryOptions } from "@tanstack/react-query";
import { Pet } from "api/pets";
import { PetClient } from "api/pets/client";
import { PetKeyFactory } from "api/pets/keyFactory";
import { DataTableReducerState } from "common/reducers/DataTableReducer/types";

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
