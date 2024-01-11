import { Book, BooksFilterState } from "api/book";
import { PublicationGroup } from "constants/PublicationGroup";
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from "constants/TableDefaults";

export interface BooksFilterReducerState extends BooksFilterState {
  filterData?: {
    bookDataForFilters: Book[];
    selectedBookFilterData: Book[];

    allAuthors: FilterRow[];
    allCategories: FilterRow[];
  };
}

export const DEFAULT_BOOKS_FILTER_REDUCER_STATE: BooksFilterReducerState = {
  tableData: {
    page: DEFAULT_PAGE,
    pageSize: DEFAULT_PAGE_SIZE,
  },
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

export enum BooksFilterActionType {
  SetFiltersData,
  PageChange,
  AuthorChange,
  CategoryChange,
  PublicationGroupChange,
  SelectAll,
  Clear,
  Apply,
}

export type SetFiltersDataAction = {
  type: BooksFilterActionType.SetFiltersData;
  payload: Book[];
};

export type PageChangeAction = {
  type: BooksFilterActionType.PageChange;
  payload: { page: number; pageSize: number };
};

export type AuthorChangeAction = {
  type: BooksFilterActionType.AuthorChange;
  payload: number[];
};

export type CategoryChangeAction = {
  type: BooksFilterActionType.CategoryChange;
  payload: number[];
};

export type PublicationGroupChangeAction = {
  type: BooksFilterActionType.PublicationGroupChange;
  payload: PublicationGroup;
};

export type SelectAllAction = {
  type: BooksFilterActionType.SelectAll;
};

export type ClearAction = {
  type: BooksFilterActionType.Clear;
};

export type ApplyAction = {
  type: BooksFilterActionType.Apply;
};

export type BooksFilterActions =
  | SetFiltersDataAction
  | PageChangeAction
  | AuthorChangeAction
  | CategoryChangeAction
  | PublicationGroupChangeAction
  | SelectAllAction
  | ClearAction
  | ApplyAction;
