import { FilterMultiSelect } from "common/components/FilterMultiSelect";
import { FilterWrapper } from "common/components/FilterWrapper";
import { FilterWrapperRow } from "common/components/FilterWrapper/row";
import { LatestBooksFilterButton } from "common/components/LatestBooksFilterButton";
import { useBooksListContext } from "pages/Books/Context/hook";
import { BookFilterActionTypes } from "pages/Books/FilterReducer/types";
import { Skeleton } from "primereact/skeleton";
import { FC } from "react";

export const BooksFilterWrapper: FC = () => {
  const {
    filterState: { filterData, selectedFilters },
    dispatch,
  } = useBooksListContext();

  const applyHandler = () => {
    dispatch({
      type: BookFilterActionTypes.Apply,
    });
  };

  const selectAllHandler = () => {
    dispatch({
      type: BookFilterActionTypes.SelectAll,
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
          value={selectedFilters?.dropdownFilters?.selectedAuthors}
          options={filterData?.allAuthors}
          onChangeHandler={(value) =>
            dispatch({
              type: BookFilterActionTypes.AuthorChange,
              payload: value,
            })
          }
        />

        <FilterMultiSelect
          placeholder="Select Categories"
          value={selectedFilters?.dropdownFilters?.selectedCategories}
          options={filterData?.allCategories}
          onChangeHandler={(value) =>
            dispatch({
              type: BookFilterActionTypes.CategoryChange,
              payload: value,
            })
          }
        />
      </FilterWrapperRow>

      <FilterWrapperRow>
        {!selectedFilters?.switchFilters ? (
          <Skeleton className="h-3rem w-20rem" />
        ) : (
          <LatestBooksFilterButton
            currentValue={selectedFilters?.switchFilters.publicationGroup}
            onValueChangeHandler={(newValue) =>
              dispatch({
                type: BookFilterActionTypes.PublicationGroupChange,
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
