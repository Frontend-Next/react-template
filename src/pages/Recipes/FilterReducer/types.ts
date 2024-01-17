import { Recipe, RecipeFilterState } from "api/recipes";
import { DEFAULT_DATA_TABLE_REDUCER_STATE } from "common/reducers/DataTableReducer/types";
import {
  FilteredDataTableActionTypes,
  FilteredDataTableReducerActions,
  FilteredDataTableReducerState,
} from "common/reducers/FilteredDataTableReducer/types";
import { FilterRow } from "common/types/FilterRow";

export interface RecipeFilterDataReducerState {
  dataForFilters: Recipe[];

  allAuthors: FilterRow[];
  allCategories: FilterRow[];
  allIngredients: FilterRow[];
}

export type RecipeFilterReducerState = FilteredDataTableReducerState<
  RecipeFilterState,
  RecipeFilterDataReducerState
>;

export const DEFAULT_RECIPE_FILTER_REDUCER_STATE: RecipeFilterReducerState = {
  tableData: { ...DEFAULT_DATA_TABLE_REDUCER_STATE },
  selectedFilters: {
    dropdownFilters: {
      selectedAuthors: [],
      selectedCategories: [],
      selectedIngredients: [],
    },
  },
};

enum RecipeFilterActionsEnum {
  AuthorChange = "AUTHOR_CHANGE",
  CategoryChange = "CATEGORY_CHANGE",
  IngredientsChange = "INGREDIENTS_CHANGE",
}

export const RecipeFilterActionTypes = {
  ...FilteredDataTableActionTypes,
  ...RecipeFilterActionsEnum,
};
type RecipeFilterActionType = typeof RecipeFilterActionTypes;

type AuthorChangeAction = {
  type: RecipeFilterActionType["AuthorChange"];
  payload: number[];
};

type CategoryChangeAction = {
  type: RecipeFilterActionType["CategoryChange"];
  payload: number[];
};

type IngredientsChangeAction = {
  type: RecipeFilterActionType["IngredientsChange"];
  payload: number[];
};

export type RecipeFilterActions =
  | FilteredDataTableReducerActions
  | AuthorChangeAction
  | CategoryChangeAction
  | IngredientsChangeAction;

export type RecipeFilterReducer = (
  state: RecipeFilterReducerState,
  action: RecipeFilterActions,
) => RecipeFilterReducerState;
