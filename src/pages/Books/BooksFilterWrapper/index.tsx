import { FilterMultiSelect } from "components/FilterMultiSelect";
import { FilterWrapper } from "components/FilterWrapper";
import { FC } from "react";
import { useBooksListContext } from "../Context/hook";
import { BooksFilterActionType } from "../FilterReducer/types";

export const BooksFilterWrapper: FC = () => {
  const { filterState, dispatch } = useBooksListContext();

  const applyHandler = () => {
    dispatch({
      type: BooksFilterActionType.Apply,
    });
  };

  const selectAllHandler = () => {
    dispatch({
      type: BooksFilterActionType.SelectAll
    })
  };

  return (
    <FilterWrapper
      applyHandler={applyHandler}
      selectAllHandler={selectAllHandler}
    >
      <FilterMultiSelect
        placeholder="Select Authors"
        value={filterState.dropdownFilters?.selectedAuthors}
        options={filterState.dropdownFilters?.allAuthors}
        onChangeHandler={(value) =>
          dispatch({
            type: BooksFilterActionType.AuthorChange,
            payload: value,
          })
        }
      />

      <FilterMultiSelect
        placeholder="Select Categories"
        value={filterState.dropdownFilters?.selectedCategories}
        options={filterState.dropdownFilters?.allCategories}
        onChangeHandler={(value) =>
          dispatch({
            type: BooksFilterActionType.CategoryChange,
            payload: value,
          })
        }
      />
    </FilterWrapper>
  );
};
