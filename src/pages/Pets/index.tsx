import { FC } from "react";
import { PetsTable } from "./PetsTable";

export const PetsList: FC = () => {
  return (
    <>
      <header>
        <h1>Pets</h1>
      </header>

      <main>
        <PetsTable />
      </main>
    </>
  );
};
