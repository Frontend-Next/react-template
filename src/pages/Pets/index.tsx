import { PetsTable } from "pages/Pets/PetsTable";
import { FC } from "react";

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
