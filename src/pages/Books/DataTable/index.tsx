import { useBooksTableView } from "pages/Books/DataTable/hook";
import { BookFilterActionTypes } from "pages/Books/FilterReducer/types";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { FC } from "react";

export const BooksTable: FC = () => {
  const {
    pageData,
    dataCount,
    filterState: {
      tableData: { page, pageSize },
    },
    dispatch,
  } = useBooksTableView();

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
          type: BookFilterActionTypes.PageChange,
          payload: { page: event.first, pageSize: event.rows },
        })
      }
    >
      <Column field="title" header="Title" />
      <Column field="author" header="Author" />
      <Column field="category" header="Category" />
      <Column field="publication_date" header="Pub. Date" />
      <Column field="rating" header="Rating" />
    </DataTable>
  );
};
