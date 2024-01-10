import { useBookTableData } from "api/book/hook";
import { PublicationGroup } from "constants/PublicationGroup";
import { Book } from "models/book";
import { Dispatch, useMemo } from "react";
import { useBooksListContext } from "../Context/hook";
import { BooksFilterActions } from "../FilterReducer/types";

interface useBooksTableViewType {
  page: number;
  pageSize: number;
  data: Book[] | undefined;
  dispatch: Dispatch<BooksFilterActions>;
}

export const useBooksTableView = (): useBooksTableViewType => {
  const { filterState, dispatch } = useBooksListContext();

  const { isEnabled, page, pageSize, authors, categories, publicationGroup } =
    useMemo(() => {
      if (
        filterState.applyTimestamp &&
        filterState.tableData &&
        filterState.dropdownFilters &&
        filterState.switchFilters
      ) {
        return {
          isEnabled: true,
          page: filterState.tableData.page,
          pageSize: filterState.tableData.pageSize,
          authors: filterState.dropdownFilters.selectedAuthors,
          categories: filterState.dropdownFilters.selectedCategories,
          publicationGroup: filterState.switchFilters.publicationGroup,
        };
      }

      return {
        isEnabled: false,
        page: 0,
        pageSize: 50,
        authors: [],
        categories: [],
        publicationGroup: PublicationGroup.ALL,
      };
    }, [filterState.applyTimestamp, filterState.tableData]);

  const { data } = useBookTableData(
    isEnabled,
    page,
    pageSize,
    authors,
    categories,
    publicationGroup,
  );

  return { data, page, pageSize, dispatch };
};
