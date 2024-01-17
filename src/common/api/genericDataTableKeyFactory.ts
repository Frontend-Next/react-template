import { DataTableReducerState } from "common/reducers/DataTableReducer/types";
import { genericKeyFactory } from "./genericKeyFactory";

export const genericDataTableKeyFactory = (domain: string) => ({
  ...genericKeyFactory(domain),
  pageData: (filter: DataTableReducerState) =>
    [
      { ...genericKeyFactory(domain).list(), name: "page-data", filter },
    ] as const,
  dataCount: () =>
    [{ ...genericKeyFactory(domain).list(), name: "data-count" }] as const,
});
