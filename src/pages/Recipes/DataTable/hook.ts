import { Recipe, RecipeFilterState } from "api/recipes";
import { useRecipeDataCount, useRecipePageData } from "api/recipes/hook";
import { DataTableReducerState } from "common/reducers/DataTableReducer/types";
import { useMemo } from "react";
import { RecipeListContextType } from "../Context";
import { useRecipeListContext } from "../Context/hook";
import { DEFAULT_RECIPE_FILTER_REDUCER_STATE } from "../FilterReducer/types";

interface UseRecipesTableViewType extends RecipeListContextType {
  pageData: Recipe[] | undefined;
  dataCount: number | undefined;
}

export const useRecipesTableView = (): UseRecipesTableViewType => {
  const { filterState, dispatch } = useRecipeListContext();

  const { isPageDataLoadEnabled, tableData, selectedFilters } = useMemo<{
    isPageDataLoadEnabled: boolean;
    tableData: DataTableReducerState;
    selectedFilters: RecipeFilterState;
  }>(() => {
    if (filterState.applyTimestamp && filterState.selectedFilters) {
      return {
        isPageDataLoadEnabled: true,
        tableData: { ...filterState.tableData },
        selectedFilters: { ...filterState.selectedFilters },
      };
    }

    return {
      isPageDataLoadEnabled: false,
      tableData: {
        ...DEFAULT_RECIPE_FILTER_REDUCER_STATE.tableData,
      },
      selectedFilters: {
        ...DEFAULT_RECIPE_FILTER_REDUCER_STATE.selectedFilters,
      },
    };
  }, [filterState.applyTimestamp, filterState.tableData]);

  const { data: pageData } = useRecipePageData(
    isPageDataLoadEnabled,
    tableData,
    selectedFilters,
  );

  const { data: dataCount } = useRecipeDataCount(
    isPageDataLoadEnabled,
    selectedFilters,
  );

  return { filterState, dispatch, pageData, dataCount };
};
