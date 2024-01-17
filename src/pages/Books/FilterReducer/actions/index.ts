import { categoryChange } from "pages/Books/FilterReducer/actions/categoryChange";
import { authorChange } from "./authorChange";
// import { pageChange } from "./pageChange";
import { selectAll } from "./selectAll";
import { setFiltersData } from "./setFiltersData";

export const BookFilterReducerActions = {
  setFiltersData,
  selectAll,
  // pageChange,
  authorChange,
  categoryChange,
};
