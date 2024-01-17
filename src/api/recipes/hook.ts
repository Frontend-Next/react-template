import { useQuery } from "@tanstack/react-query";
import { DataTableReducerState } from "common/reducers/DataTableReducer/types";
import { RecipeFilterState } from ".";
import { RecipeQuery } from "./query";

export const useRecipeDataForFilters = () =>
  useQuery(RecipeQuery.dataForFiltersQuery());

export const useRecipePageData = (
  isEnabled: boolean,
  dataTable: DataTableReducerState,
  filter: RecipeFilterState,
) => useQuery(RecipeQuery.pageDataQuery(isEnabled, dataTable, filter));

export const useRecipeDataCount = (
  isEnabled: boolean,
  filter: RecipeFilterState,
) => useQuery(RecipeQuery.dataCountQuery(isEnabled, filter));
