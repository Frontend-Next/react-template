import { filteredDataTableReducer } from "common/reducers/FilteredDataTableReducer/reducer";
import { BookFilterReducerActions } from "pages/Books/FilterReducer/actions";
import {
  BookFilterActionType,
  BookFilterReducer,
} from "pages/Books/FilterReducer/types";

export const bookFilterReducer: BookFilterReducer = (state, action) => {
  switch (action.type) {
    case BookFilterActionType.SetFiltersData:
      return BookFilterReducerActions.setFiltersData(action);

    case BookFilterActionType.AuthorChange:
      return BookFilterReducerActions.authorChange(state, action);

    case BookFilterActionType.CategoryChange:
      return BookFilterReducerActions.categoryChange(state, action);

    case BookFilterActionType.PublicationGroupChange:
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

    case BookFilterActionType.Apply:
      return {
        ...state,
        tableData: { ...state.tableData, page: 0 },
        applyTimestamp: Date.now(),
      };

    default:
      return { ...state, ...filteredDataTableReducer(state, action) };
  }
};
