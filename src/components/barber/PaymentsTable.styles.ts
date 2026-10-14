import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    gap: 12,
    padding: 12,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#ECEEF7",
    borderRadius: 16,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 9,
  },

  headerIcon: {
    width: 38,
    height: 38,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F0EDFF",
  },

  headerTextContainer: {
    flex: 1,
    gap: 3,
  },

  title: {
    fontSize: 15,
    fontWeight: "800",
    color: "#171A35",
  },

  subtitle: {
    fontSize: 10,
    color: "#77819D",
  },

  searchContainer: {
    minHeight: 43,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#E5E8F2",
    borderRadius: 11,
    backgroundColor: "#FFFFFF",
  },

  searchInput: {
    flex: 1,
    minWidth: 0,
    paddingVertical: 9,
    fontSize: 11,
    color: "#202443",
    outlineStyle: "none",
  } as any,

  filterLabel: {
    fontSize: 10,
    fontWeight: "700",
    color: "#59627E",
    marginBottom: -5,
  },

  filterList: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingVertical: 2,
  },

  filterChip: {
    paddingHorizontal: 11,
    paddingVertical: 8,
    borderRadius: 9,
    borderWidth: 1,
    borderColor: "#E5E8F2",
    backgroundColor: "#FFFFFF",
  },

  activeFilterChip: {
    backgroundColor: "#6554F0",
    borderColor: "#6554F0",
  },

  filterChipText: {
    fontSize: 10,
    fontWeight: "600",
    color: "#64708A",
  },

  activeFilterChipText: {
    color: "#FFFFFF",
  },

  methodFilters: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 6,
  },

  methodChip: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    paddingHorizontal: 9,
    paddingVertical: 8,
    borderRadius: 9,
    borderWidth: 1,
    borderColor: "#E5E8F2",
    backgroundColor: "#FFFFFF",
  },

  activeMethodChip: {
    backgroundColor: "#F0EDFF",
    borderColor: "#D8D0FF",
  },

  methodChipText: {
    fontSize: 10,
    fontWeight: "600",
    color: "#64708A",
  },

  activeMethodChipText: {
    color: "#5145E5",
  },

  clearButton: {
    marginLeft: "auto",
    paddingHorizontal: 8,
    paddingVertical: 7,
  },

  clearButtonText: {
    fontSize: 10,
    fontWeight: "600",
    color: "#6554F0",
  },

  resultsHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
    paddingTop: 3,
  },

  resultsText: {
    fontSize: 10,
    fontWeight: "600",
    color: "#59627E",
  },

  pageIndicator: {
    fontSize: 10,
    color: "#77819D",
  },

  tableScrollContent: {
    paddingBottom: 3,
  },

  table: {
    minWidth: 850,
    borderWidth: 1,
    borderColor: "#E8EAF3",
    borderRadius: 10,
    overflow: "hidden",
  },

  tableHeader: {
    flexDirection: "row",
    alignItems: "center",
    minHeight: 42,
    backgroundColor: "#F7F8FC",
    borderBottomWidth: 1,
    borderBottomColor: "#E8EAF3",
  },

  headerCell: {
    paddingHorizontal: 8,
    fontSize: 9,
    fontWeight: "700",
    color: "#59627E",
  },

  tableRow: {
    flexDirection: "row",
    alignItems: "center",
    minHeight: 64,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F1F7",
    backgroundColor: "#FFFFFF",
  },

  cell: {
    minHeight: 64,
    justifyContent: "center",
    paddingHorizontal: 8,
    paddingVertical: 7,
  },

  idColumn: {
    width: 105,
  },

  customerColumn: {
    width: 105,
  },

  dateColumn: {
    width: 112,
  },

  methodColumn: {
    width: 83,
  },

  amountColumn: {
    width: 88,
    alignItems: "flex-end",
  },

  statusColumn: {
    width: 94,
  },

  confirmedColumn: {
    width: 105,
  },

  actionColumn: {
    width: 118,
    alignItems: "flex-start",
  },

  primaryCellText: {
    fontSize: 10,
    fontWeight: "600",
    color: "#202443",
  },

  secondaryCellText: {
    fontSize: 9,
    color: "#77819D",
  },

  amountCellText: {
    fontSize: 10,
    fontWeight: "800",
    color: "#171A35",
  },

  methodValue: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },

  statusBadge: {
    alignSelf: "flex-start",
    paddingHorizontal: 7,
    paddingVertical: 5,
    borderRadius: 7,
  },

  statusBadgeText: {
    fontSize: 9,
    fontWeight: "700",
  },

  confirmButton: {
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: "#6554F0",
  },

  confirmButtonText: {
    fontSize: 9,
    fontWeight: "700",
    color: "#FFFFFF",
  },

  noActionText: {
    fontSize: 12,
    color: "#A4A9C0",
  },

  emptyState: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 28,
    gap: 8,
  },

  emptyTitle: {
    fontSize: 13,
    fontWeight: "700",
    color: "#202443",
  },

  emptyDescription: {
    fontSize: 10,
    color: "#77819D",
    textAlign: "center",
  },

  resetEmptyButton: {
    marginTop: 4,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 9,
    backgroundColor: "#F0EDFF",
  },

  resetEmptyButtonText: {
    fontSize: 10,
    fontWeight: "700",
    color: "#6554F0",
  },

  pagination: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 8,
    paddingTop: 3,
  },

  rowsSelector: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },

  rowsLabel: {
    fontSize: 9,
    color: "#77819D",
  },

  rowsOption: {
    minWidth: 25,
    minHeight: 25,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 7,
  },

  activeRowsOption: {
    backgroundColor: "#6554F0",
  },

  rowsOptionText: {
    fontSize: 9,
    fontWeight: "600",
    color: "#64708A",
  },

  activeRowsOptionText: {
    color: "#FFFFFF",
  },

  paginationButtons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  pageButton: {
    width: 29,
    height: 29,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E5E8F2",
    backgroundColor: "#FFFFFF",
  },

  disabledPageButton: {
    backgroundColor: "#F7F8FC",
    borderColor: "#F0F1F7",
  },

  currentPageText: {
    minWidth: 28,
    textAlign: "center",
    fontSize: 10,
    fontWeight: "600",
    color: "#59627E",
  },
});