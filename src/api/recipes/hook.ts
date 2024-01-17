import { useQuery } from "@tanstack/react-query";
import { RecipeFilterState } from "api/recipes";
import { RecipeQuery } from "api/recipes/query";
import { DataTableReducerState } from "common/reducers/DataTableReducer/types";

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
