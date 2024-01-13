import { DataTableReducerState } from "common/reducers/DataTableReducer/types";

export const PetKeyFactory = {
  all: { domain: "pet" } as const,
  list: () => ({ ...PetKeyFactory.all, type: "list" }) as const,
  element: () => ({ ...PetKeyFactory.all, type: "element" }) as const,
  pageData: (filter: DataTableReducerState) =>
    [{ ...PetKeyFactory.list, name: "page-data", filter }] as const,
  count: () => [{ ...PetKeyFactory.list, name: "count" }] as const,
  petById: (id: number) =>
    [{ ...PetKeyFactory.element, name: "pet-by-id", id }] as const,
};
