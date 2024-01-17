import { FilterMultiSelect } from "common/components/FilterMultiSelect";
import { FilterWrapper } from "common/components/FilterWrapper";
import { FilterWrapperRow } from "common/components/FilterWrapper/row";
import { Skeleton } from "primereact/skeleton";
import { FC } from "react";
import { LatestBooksFilterButton } from "../../../common/components/LatestBooksFilterButton";
import { useBooksListContext } from "../Context/hook";
import { BookFilterActionType } from "../FilterReducer/types";

export const BooksFilterWrapper: FC = () => {
  const {
    filterState: { filterData, selectedFilters },
    dispatch,
  } = useBooksListContext();

  const applyHandler = () => {
    dispatch({
      type: BookFilterActionType.Apply,
    });
  };

  const selectAllHandler = () => {
    dispatch({
      type: BookFilterActionType.SelectAll,
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
              type: BookFilterActionType.AuthorChange,
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
              type: BookFilterActionType.CategoryChange,
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
                type: BookFilterActionType.PublicationGroupChange,
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
