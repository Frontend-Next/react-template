interface DataTableFilterState<EXTENDED_FILTERS_TYPE = void> {
  tableData: {
    page: number;
    pageSize: number;
  };
  selectedFilters: EXTENDED_FILTERS_TYPE;
  applyTimestamp?: number;
}
