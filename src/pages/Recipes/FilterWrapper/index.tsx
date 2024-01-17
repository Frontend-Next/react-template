import { FilterMultiSelect } from "common/components/FilterMultiSelect";
import { FilterWrapper } from "common/components/FilterWrapper";
import { FilterWrapperRow } from "common/components/FilterWrapper/row";
import { useRecipeListContext } from "pages/Recipes/Context/hook";
import { RecipeFilterActionTypes } from "pages/Recipes/FilterReducer/types";
import { FC } from "react";

export const RecipeFilterWrapper: FC = () => {
  const {
    filterState: { filterData, selectedFilters },
    dispatch,
  } = useRecipeListContext();

  const applyHandler = () => {};

  const selectAllHandler = () => {};

  return (
    <FilterWrapper
      applyHandler={applyHandler}
      selectAllHandler={selectAllHandler}
    >
      <FilterWrapperRow>
        <FilterMultiSelect
          placeholder="Select Authors"
          value={selectedFilters?.dropdownFilters?.selectedAuthors}
          options={filterData?.allAuthors}
          onChangeHandler={(value) =>
            dispatch({
              type: RecipeFilterActionTypes.AuthorChange,
              payload: value,
            })
          }
        />
      </FilterWrapperRow>
    </FilterWrapper>
  );
};
