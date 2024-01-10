import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { FC } from "react";
import { BooksFilterActionType } from "../FilterReducer/types";
import { useBooksTableView } from "./hook";

export const BooksTable: FC = () => {
  const { data, page, pageSize, dispatch } = useBooksTableView();

  return (
    <DataTable
      itemID="id"
      value={data}
      totalRecords={50}
      paginator
      first={page}
      rows={pageSize}
      rowsPerPageOptions={[5, 10, 25, 50]}
      stripedRows
      lazy
      onPage={(event) =>
        dispatch({
          type: BooksFilterActionType.PageChange,
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
