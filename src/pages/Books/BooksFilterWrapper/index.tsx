import { FilterMultiSelect } from "common/components/FilterMultiSelect";
import { FilterWrapper } from "common/components/FilterWrapper";
import { FilterWrapperRow } from "common/components/FilterWrapper/row";
import { Skeleton } from "primereact/skeleton";
import { FC } from "react";
import { LatestBooksFilterButton } from "../../../common/components/LatestBooksFilterButton";
import { useBooksListContext } from "../Context/hook";
import { BooksFilterActionType } from "../FilterReducer/types";

export const BooksFilterWrapper: FC = () => {
  const { filterState, dispatch } = useBooksListContext();
  const { filterData } = filterState;
  const { dropdownFilters, switchFilters } = filterState.selectedFilters;

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
          value={dropdownFilters?.selectedAuthors}
          options={filterData?.allAuthors}
          onChangeHandler={(value) =>
            dispatch({
              type: BooksFilterActionType.AuthorChange,
              payload: value,
            })
          }
        />

        <FilterMultiSelect
          placeholder="Select Categories"
          value={dropdownFilters?.selectedCategories}
          options={filterData?.allCategories}
          onChangeHandler={(value) =>
            dispatch({
              type: BooksFilterActionType.CategoryChange,
              payload: value,
            })
          }
        />
      </FilterWrapperRow>

      <FilterWrapperRow>
        {!switchFilters ? (
          <Skeleton className="h-3rem w-20rem" />
        ) : (
          <LatestBooksFilterButton
            currentValue={switchFilters.publicationGroup}
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
