import { FilterMultiSelect } from "components/FilterMultiSelect";
import { FilterWrapper } from "components/FilterWrapper";
import { FilterWrapperRow } from "components/FilterWrapper/row";
import { Skeleton } from "primereact/skeleton";
import { FC } from "react";
import { useBooksListContext } from "../Context/hook";
import { BooksFilterActionType } from "../FilterReducer/types";
import { LatestBooksFilterButton } from "../../../components/LatestBooksFilterButton";

export const BooksFilterWrapper: FC = () => {
  const { filterState, dispatch } = useBooksListContext();

  const applyHandler = () => {
    dispatch({
      type: BooksFilterActionType.Apply,
    });
  };

  const selectAllHandler = () => {
    dispatch({
      type: BooksFilterActionType.SelectAll,
    });
  };

  return (
    <FilterWrapper
      applyHandler={applyHandler}
      selectAllHandler={selectAllHandler}
    >
      <FilterWrapperRow>
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
      </FilterWrapperRow>

      <FilterWrapperRow>
        {!filterState.switchFilters ? (
          <Skeleton className="h-3rem w-20rem" />
        ) : (
          <LatestBooksFilterButton
            currentValue={filterState.switchFilters.publicationGroup}
            onValueChangeHandler={(newValue) =>
              dispatch({
                type: BooksFilterActionType.PublicationGroupChange,
                payload: newValue,
              })
            }
          />
        )}
      </FilterWrapperRow>
      {/* THIRD ROW <FilterWrapperRow></FilterWrapperRow> */}
    </FilterWrapper>
  );
};
