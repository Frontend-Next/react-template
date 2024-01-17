import { Recipe, RecipeFilterState } from "api/recipes";
import { useRecipeDataCount, useRecipePageData } from "api/recipes/hook";
import { DataTableReducerState } from "common/reducers/DataTableReducer/types";
import { RecipeListContextType } from "pages/Recipes/Context";
import { useRecipeListContext } from "pages/Recipes/Context/hook";
import { DEFAULT_RECIPE_FILTER_REDUCER_STATE } from "pages/Recipes/FilterReducer/types";
import { useMemo } from "react";

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
    // only recalculate memo after timestamp or tableData change
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
