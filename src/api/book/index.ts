import { PublicationGroup } from "constants/PublicationGroup";

export interface Book {
  id: number;
  title: string;
  category_id: number;
  author_id: number;
  category: string;
  author: string;
  publication_date: string;
  rating: number;
}

export type BooksFilterState = DataTableFilterState<BooksExtendedFilterState>;

export interface BooksExtendedFilterState {
  dropdownFilters?: {
    selectedAuthors: number[];
    selectedCategories: number[];
  };
  switchFilters?: {
    publicationGroup: PublicationGroup;
  };
  dataFilters?: {
    title: string;
  };
}
