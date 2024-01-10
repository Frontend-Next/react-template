import { PublicationGroup } from "constants/PublicationGroup";
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
  switchFilters?: {
    publicationGroup: PublicationGroup;
  };
  dataFilters?: {
    title: string;
  };
  applyTimestamp?: number;
}

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

type SetFiltersDataAction = {
  type: BooksFilterActionType.SetFiltersData;
  payload: Book[];
};

type PageChangeAction = {
  type: BooksFilterActionType.PageChange;
  payload: {page: number, pageSize: number};
};

type AuthorChangeAction = {
  type: BooksFilterActionType.AuthorChange;
  payload: number[];
};

type CategoryChangeAction = {
  type: BooksFilterActionType.CategoryChange;
  payload: number[];
};

type PublicationGroupChangeAction = {
  type: BooksFilterActionType.PublicationGroupChange;
  payload: PublicationGroup;
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
  | PageChangeAction
  | AuthorChangeAction
  | CategoryChangeAction
  | PublicationGroupChangeAction
  | SelectAllAction
  | ClearAction
  | ApplyAction;
