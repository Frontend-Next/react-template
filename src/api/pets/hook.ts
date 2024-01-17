import { useQuery } from "@tanstack/react-query";
import { PetQuery } from "api/pets/query";
import { DataTableReducerState } from "common/reducers/DataTableReducer/types";

export const usePetPageData = (filter: DataTableReducerState) =>
  useQuery(PetQuery.pageDataQuery(filter));

export const usePetCount = () => useQuery(PetQuery.countQuery());
