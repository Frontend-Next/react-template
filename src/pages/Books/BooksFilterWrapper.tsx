import { FilterMultiSelect } from "components/FilterMultiSelect";
import { FilterWrapper } from "components/FilterWrapper";
import { FC, Suspense } from "react";
import { BooksFilterActionType } from "./FilterReducer/types";
import { useBooksFilterReducer } from "./FilterReducer/useBooksFilterReducer";

export const BooksFilterWrapper: FC = () => {
  const { state, dispatch } = useBooksFilterReducer();

  const applyHandler = () => console.log("applyHandler");
  const selectAllHandler = () =>
    dispatch({
      type: BooksFilterActionType.SelectAll,
      payload: state.bookFilterData,
    });

  return (
    <Suspense>
      <FilterWrapper
        applyHandler={applyHandler}
        selectAllHandler={selectAllHandler}
      >
        <FilterMultiSelect
          placeholder="Select Authors"
          value={state.selectedAuthors}
          options={state.allAuthors}
          onChangeHandler={(value) =>
            dispatch({
              type: BooksFilterActionType.AuthorChange,
              payload: value,
            })
          }
        />

        <FilterMultiSelect
          placeholder="Select Categories"
          value={state.selectedCategories}
          options={state.allCategories}
          onChangeHandler={(value) =>
            dispatch({
              type: BooksFilterActionType.CategoryChange,
              payload: value,
            })
          }
        />
      </FilterWrapper>
    </Suspense>
  );
};
