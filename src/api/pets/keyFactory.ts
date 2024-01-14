import { genericDataTableKeyFactory } from "common/api/genericDataTableKeyFactory";

export const PetKeyFactory = {
  ...genericDataTableKeyFactory("book"),
  petById: (id: number) =>
    [{ ...PetKeyFactory.element, name: "pet-by-id", id }] as const,
};
