import { authorChange } from "pages/Books/FilterReducer/actions/authorChange";
import { categoryChange } from "pages/Books/FilterReducer/actions/categoryChange";
import { selectAll } from "pages/Books/FilterReducer/actions/selectAll";
import { setFiltersData } from "pages/Books/FilterReducer/actions/setFiltersData";

export const BookFilterReducerActions = {
  setFiltersData,
  selectAll,
  authorChange,
  categoryChange,
};
