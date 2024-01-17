import { filteredDataTableReducer } from "common/reducers/FilteredDataTableReducer/reducer";
import { BookFilterReducerActions } from "pages/Books/FilterReducer/actions";
import {
  BookFilterActionTypes,
  BookFilterReducer,
} from "pages/Books/FilterReducer/types";

export const bookFilterReducer: BookFilterReducer = (state, action) => {
  switch (action.type) {
    case BookFilterActionTypes.SetFiltersData:
      return BookFilterReducerActions.setFiltersData(action);

    case BookFilterActionTypes.AuthorChange:
      return BookFilterReducerActions.authorChange(state, action);

    case BookFilterActionTypes.CategoryChange:
      return BookFilterReducerActions.categoryChange(state, action);

    case BookFilterActionTypes.PublicationGroupChange:
      if (!state.selectedFilters?.switchFilters) return { ...state };

      return {
        ...state,
        selectedFilters: {
          ...state.selectedFilters,
          switchFilters: {
            ...state.selectedFilters.switchFilters,
            publicationGroup: action.payload,
          },
        },
        tableData: { ...state.tableData, page: 0 },
        applyTimestamp: Date.now(),
      };

    case BookFilterActionTypes.Apply:
      return {
        ...state,
        tableData: { ...state.tableData, page: 0 },
        applyTimestamp: Date.now(),
      };

    default:
      return { ...state, ...filteredDataTableReducer(state, action) };
  }
};
