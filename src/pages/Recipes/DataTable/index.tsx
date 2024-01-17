import { useRecipesTableView } from "pages/Recipes/DataTable/hook";
import { RecipeFilterActionTypes } from "pages/Recipes/FilterReducer/types";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { FC } from "react";

export const RecipesTable: FC = () => {
  const {
    pageData,
    dataCount,
    filterState: {
      tableData: { page, pageSize },
    },
    dispatch,
  } = useRecipesTableView();

  return (
    <DataTable
      itemID="id"
      value={pageData}
      totalRecords={dataCount}
      paginator
      first={page}
      rows={pageSize}
      rowsPerPageOptions={[5, 10, 25, 50]}
      stripedRows
      lazy
      onPage={(event) =>
        dispatch({
          type: RecipeFilterActionTypes.PageChange,
          payload: { page: event.first, pageSize: event.rows },
        })
      }
    >
      <Column field="name" header="Title" />
      <Column field="category" header="Category" />
      <Column field="author" header="Author" />
      <Column field="publication_date" header="Pub. Date" />
      <Column field="rating" header="Rating" />
      <Column field="ingredients" header="Ingredients" />
    </DataTable>
  );
};
