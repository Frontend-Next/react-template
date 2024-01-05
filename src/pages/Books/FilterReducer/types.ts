import { Book } from "models/book";

export type BooksFilterReducer = (
  state: BooksFilterState,
  action: BooksFilterActions,
) => BooksFilterState;

export interface BooksFilterState {
  tableData?: {
    page: number;
    pageSize: number;
  };
  dropdownFilters?: {
    bookDataForFilters: Book[];
    selectedBookFilterData: Book[];
    allAuthors: FilterRow[];
    selectedAuthors: number[];
    allCategories: FilterRow[];
    selectedCategories: number[];
  };
  dataFilters?: {
    title: string;
  };
  applyTimestamp?: number;
}

export enum BooksFilterActionType {
  SetFiltersData,
  AuthorChange,
  CategoryChange,
  SelectAll,
  Clear,
  Apply,
}

type SetFiltersDataAction = {
  type: BooksFilterActionType.SetFiltersData;
  payload: Book[];
};

type AuthorChangeAction = {
  type: BooksFilterActionType.AuthorChange;
  payload: number[];
};

type CategoryChangeAction = {
  type: BooksFilterActionType.CategoryChange;
  payload: number[];
};

type SelectAllAction = {
  type: BooksFilterActionType.SelectAll;
};

type ClearAction = {
  type: BooksFilterActionType.Clear;
};

type ApplyAction = {
  type: BooksFilterActionType.Apply;
};

export type BooksFilterActions =
  | SetFiltersDataAction
  | AuthorChangeAction
  | CategoryChangeAction
  | SelectAllAction
  | ClearAction
  | ApplyAction;
