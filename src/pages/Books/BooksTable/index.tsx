import { useBookTableData } from "api/book/hook";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { FC, useMemo } from "react";
import { useBooksListContext } from "../Context/hook";

export const BooksTable: FC = () => {
  const { filterState } = useBooksListContext();

  const { isEnabled, page, pageSize, authors, categories } = useMemo(() => {
    if (
      filterState.applyTimestamp &&
      filterState.tableData &&
      filterState.dropdownFilters
    ) {
      console.log("filterState.applyTimestamp", filterState.applyTimestamp);
      return {
        isEnabled: true,
        page: filterState.tableData.page,
        pageSize: filterState.tableData.pageSize,
        authors: filterState.dropdownFilters.selectedAuthors,
        categories: filterState.dropdownFilters.selectedCategories,
      };
    }

    return {
      isEnabled: false,
      page: 0,
      pageSize: 50,
      authors: [],
      categories: [],
    };
  }, [filterState.applyTimestamp]);

  const { data } = useBookTableData(
    isEnabled,
    page,
    pageSize,
    authors,
    categories,
  );

  return (
    <DataTable itemID="id" value={data} stripedRows>
      <Column field="title" header="Title" />
      <Column field="author" header="Author" />
      <Column field="category" header="Category" />
      <Column field="publication_date" header="Pub. Date" />
      <Column field="rating" header="Rating" />
    </DataTable>
  );
};
