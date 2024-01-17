import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Skeleton } from "primereact/skeleton";
import { FC } from "react";

export const TableSkeleton: FC = () => {
  const items: { id: number }[] = Array.from({ length: 5 }, (_v, i) => ({
    id: i,
  }));

  return (
    <DataTable value={items} stripedRows showHeaders={false}>
      <Column style={{ width: "25%" }} body={<Skeleton />} />
      <Column style={{ width: "25%" }} body={<Skeleton />} />
      <Column style={{ width: "25%" }} body={<Skeleton />} />
      <Column style={{ width: "25%" }} body={<Skeleton />} />
    </DataTable>
  );
};
