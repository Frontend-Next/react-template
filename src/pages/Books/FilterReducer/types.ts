import { Book, BooksFilterState } from "api/book";
import { PublicationGroup } from "common/constants/PublicationGroup";
import {
  DEFAULT_DATA_TABLE_REDUCER_STATE,
  DataTableActionType,
  DataTableReducerActions,
  DataTableReducerState,
} from "common/reducers/DataTableReducer/types";

export interface BooksFilterReducerState
  extends DataTableReducerState,
    BooksFilterState {
  filterData?: {
    bookDataForFilters: Book[];
    selectedBookFilterData: Book[];

    allAuthors: FilterRow[];
    allCategories: FilterRow[];
  };
}

export const DEFAULT_BOOKS_FILTER_REDUCER_STATE: BooksFilterReducerState = {
  ...DEFAULT_DATA_TABLE_REDUCER_STATE,
  selectedFilters: {
    dropdownFilters: {
      selectedAuthors: [],
      selectedCategories: [],
    },
  },
};

export type BooksFilterReducer = (
  state: BooksFilterReducerState,
  action: BooksFilterActions,
) => BooksFilterReducerState;

export enum BooksFilterActionsEnum {
  SetFiltersData = "SET_FILTERS_DATA",
  AuthorChange = "AUTHOR_CHANGE",
  CategoryChange = "CATEGORY_CHANGE",
  PublicationGroupChange = "PUBLICATION_GROUP_CHANGE",
  SelectAll = "SELECT_ALL",
  Clear = "CLEAR",
  Apply = "APPLY",
}

export const BooksFilterActionType = {
  ...DataTableActionType,
  ...BooksFilterActionsEnum,
};
export type BooksFilterActionType = typeof BooksFilterActionType;

export type SetFiltersDataAction = {
  type: BooksFilterActionType["SetFiltersData"];
  payload: Book[];
};

export type AuthorChangeAction = {
  type: BooksFilterActionType["AuthorChange"];
  payload: number[];
};

export type CategoryChangeAction = {
  type: BooksFilterActionType["CategoryChange"];
  payload: number[];
};

export type PublicationGroupChangeAction = {
  type: BooksFilterActionType["PublicationGroupChange"];
  payload: PublicationGroup;
};

export type SelectAllAction = {
  type: BooksFilterActionType["SelectAll"];
};

export type ClearAction = {
  type: BooksFilterActionType["Clear"];
};

export type ApplyAction = {
  type: BooksFilterActionType["Apply"];
};

export type BooksFilterActions =
  | DataTableReducerActions
  | SetFiltersDataAction
  | AuthorChangeAction
  | CategoryChangeAction
  | PublicationGroupChangeAction
  | SelectAllAction
  | ClearAction
  | ApplyAction;
