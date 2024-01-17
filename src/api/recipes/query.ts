import { UseQueryOptions } from "@tanstack/react-query";
import { Recipe, RecipeFilterState } from "api/recipes";
import { RecipeClient } from "api/recipes/client";
import { RecipeKeyFactory } from "api/recipes/keyFactory";
import { DataTableReducerState } from "common/reducers/DataTableReducer/types";

const dataForFiltersQuery = (): UseQueryOptions<Recipe[]> => ({
  queryKey: RecipeKeyFactory.dataForFilters(),
  queryFn: RecipeClient.provideDataForFilters,
  staleTime: Infinity,
});

const pageDataQuery = (
  isEnabled: boolean,
  dataTable: DataTableReducerState,
  filter: RecipeFilterState,
): UseQueryOptions<Recipe[]> => ({
  queryKey: RecipeKeyFactory.pageData(dataTable, filter),
  queryFn: RecipeClient.providePageData,
  enabled: isEnabled,
});

const dataCountQuery = (
  isEnabled: boolean,
  filter: RecipeFilterState,
): UseQueryOptions<number> => ({
  queryKey: RecipeKeyFactory.dataCount(filter),
  queryFn: RecipeClient.provideDataCount,
  enabled: isEnabled,
});

export const RecipeQuery = {
  dataForFiltersQuery,
  pageDataQuery,
  dataCountQuery,
};
