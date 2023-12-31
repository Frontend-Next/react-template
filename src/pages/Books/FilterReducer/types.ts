import { Book } from "models/book";

export type BooksFilterReducer = (
  state: BooksFilter,
  action: BooksFilterActions,
) => BooksFilter;

export interface BooksFilter {
  bookFilterData: Book[];
  selectedBookFilterData: Book[];
  allAuthors: FilterRow[];
  selectedAuthors: number[];
  allCategories: FilterRow[];
  selectedCategories: number[];
  title: string;
}

export enum BooksFilterActionType {
  AuthorChange,
  CategoryChange,
  SelectAll,
  Clear,
}

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
  payload: Book[];
};

type ClearAction = {
  type: BooksFilterActionType.Clear;
};

export type BooksFilterActions =
  // | SetFiltersDataAction
  AuthorChangeAction | CategoryChangeAction | SelectAllAction | ClearAction;
