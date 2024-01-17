import { genericKeyFactory } from "common/api/genericKeyFactory";
import { DataTableReducerState } from "common/reducers/DataTableReducer/types";

export const genericDataTableKeyFactory = (domain: string) => ({
  ...genericKeyFactory(domain),
  pageData: (filter: DataTableReducerState) =>
    [
      { ...genericKeyFactory(domain).list(), name: "page-data", filter },
    ] as const,
  dataCount: () =>
    [{ ...genericKeyFactory(domain).list(), name: "data-count" }] as const,
});
