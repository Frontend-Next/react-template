import { DataTableActionType } from "common/reducers/DataTableReducer/types";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { FC } from "react";
import { usePetsTableView } from "./hook";

export const PetsTable: FC = () => {
  const { page, pageSize, pageData, count, isLoading, dispatch } =
    usePetsTableView();

  return (
    <DataTable
      lazy
      paginator
      first={page}
      rows={pageSize}
      rowsPerPageOptions={[5, 10, 25, 50]}
      loading={isLoading}
      stripedRows
      itemID="id"
      value={pageData}
      totalRecords={count}
      onPage={(event) =>
        dispatch({
          type: DataTableActionType.PageChange,
          payload: { page: event.first, pageSize: event.rows },
        })
      }
    >
      <Column field="name" header="Name" />
      <Column field="breed" header="Breed" />
      <Column field="race" header="Race" />
      <Column field="dateOfBirth" header="Date of birth" />
    </DataTable>
  );
};
