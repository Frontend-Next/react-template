import { useQuery } from "@tanstack/react-query";
import { PetQuery } from "./query";
import { DataTableReducerState } from "common/reducers/DataTableReducer/types";

export const usePetPageData = (filter: DataTableReducerState) => useQuery(PetQuery.pageDataQuery(filter));

export const usePetCount = () => useQuery(PetQuery.countQuery());
