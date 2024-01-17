import { Book, BookFilterState } from "api/book";
import { PublicationGroup } from "common/constants/PublicationGroup";
import { DEFAULT_DATA_TABLE_REDUCER_STATE } from "common/reducers/DataTableReducer/types";
import {
  FilteredDataTableActionTypes,
  FilteredDataTableReducerActions,
  FilteredDataTableReducerState,
} from "common/reducers/FilteredDataTableReducer/types";
import { FilterRow } from "common/types/FilterRow";

export interface BookFilterDataReducerState {
  dataForFilters: Book[];
  selectedFilterData: Book[];

  allAuthors: FilterRow[];
  allCategories: FilterRow[];
}

export type BookFilterReducerState = FilteredDataTableReducerState<
  BookFilterState,
  BookFilterDataReducerState
>;

export const DEFAULT_BOOK_FILTER_REDUCER_STATE: BookFilterReducerState = {
  tableData: { ...DEFAULT_DATA_TABLE_REDUCER_STATE },
  selectedFilters: {
    dropdownFilters: {
      selectedAuthors: [],
      selectedCategories: [],
    },
  },
};

enum BookFilterActionsEnum {
  AuthorChange = "AUTHOR_CHANGE",
  CategoryChange = "CATEGORY_CHANGE",
  PublicationGroupChange = "PUBLICATION_GROUP_CHANGE",
}

export const BookFilterActionTypes = {
  ...FilteredDataTableActionTypes,
  ...BookFilterActionsEnum,
};
type BookFilterActionType = typeof BookFilterActionTypes;

export type AuthorChangeAction = {
  type: BookFilterActionType["AuthorChange"];
  payload: number[];
};

export type CategoryChangeAction = {
  type: BookFilterActionType["CategoryChange"];
  payload: number[];
};

export type PublicationGroupChangeAction = {
  type: BookFilterActionType["PublicationGroupChange"];
  payload: PublicationGroup;
};

export type BookFilterActions =
  | FilteredDataTableReducerActions
  | AuthorChangeAction
  | CategoryChangeAction
  | PublicationGroupChangeAction;

export type BookFilterReducer = (
  state: BookFilterReducerState,
  action: BookFilterActions,
) => BookFilterReducerState;
