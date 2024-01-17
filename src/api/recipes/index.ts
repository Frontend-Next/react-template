export interface Recipe {
  id: number;
  name: string;
  categoryId: number;
  category: string;
  authorId: number;
  author: string;
  publication_date: string;
  rating: number;
  ingredients: string[];
}

// for selected filters and count query
export interface RecipeFilterState {
  dropdownFilters?: {
    selectedAuthors: number[];
    selectedCategories: number[];
    selectedIngredients: string[];
  };
}