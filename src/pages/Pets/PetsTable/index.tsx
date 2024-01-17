import { DataTableActionType } from "common/reducers/DataTableReducer/types";
import { usePetsTableView } from "pages/Pets/PetsTable/hook";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { FC } from "react";

export const PetsTable: FC = () => {
  const { page, pageSize, pageData, dataCount, dispatch } = usePetsTableView();

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
