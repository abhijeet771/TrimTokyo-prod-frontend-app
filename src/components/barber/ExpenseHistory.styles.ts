
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    gap: 16,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
  },

  headerTextContainer: {
    flex: 1,
    gap: 4,
  },

  title: {
    fontSize: 19,
    fontWeight: "800",
    color: "#0F172A",
  },

  subtitle: {
    fontSize: 12,
    lineHeight: 18,
    color: "#64748B",
  },

  addButton: {
    minHeight: 42,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    paddingHorizontal: 12,
    borderRadius: 10,
    backgroundColor: "#5145E5",
  },

  addButtonText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#FFFFFF",
  },

  searchContainer: {
    minHeight: 46,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
  },

  searchInput: {
    flex: 1,
    minHeight: 44,
    fontSize: 13,
    color: "#0F172A",
    paddingVertical: 8,
    outlineStyle: "none",
  } as any,

  filtersContainer: {
    gap: 12,
  },

  filtersScroll: {
    gap: 10,
  },

  filterGroup: {
    gap: 7,
  },

  filterLabel: {
    fontSize: 11,
    fontWeight: "700",
    color: "#64748B",
  },

  filterSelectWrapper: {
    flexDirection: "row",
  },

  filterOptions: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "nowrap",
    gap: 7,
  },

  filterChip: {
    minHeight: 32,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 11,
    borderRadius: 9,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    backgroundColor: "#FFFFFF",
  },

  filterChipActive: {
    borderColor: "#5145E5",
    backgroundColor: "#EEF2FF",
  },

  filterChipText: {
    fontSize: 11,
    color: "#64748B",
  },

  filterChipTextActive: {
    color: "#5145E5",
    fontWeight: "700",
  },

  resetButton: {
    alignSelf: "flex-start",
    minHeight: 32,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    paddingHorizontal: 8,
  },

  resetButtonText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#5145E5",
  },

  tableCard: {
    borderWidth: 1,
    borderColor: "#E2E8F0",
    borderRadius: 14,
    overflow: "hidden",
    backgroundColor: "#FFFFFF",
  },

  tableScrollContent: {
    flexGrow: 1,
  },

  table: {
    minWidth: 1160,
  },

  tableRow: {
    minHeight: 64,
    flexDirection: "row",
    alignItems: "stretch",
    borderBottomWidth: 1,
    borderBottomColor: "#F1F5F9",
  },

  tableHeaderRow: {
    minHeight: 44,
    backgroundColor: "#F8FAFC",
  },

  headerCell: {
    justifyContent: "center",
    paddingHorizontal: 10,
    paddingVertical: 12,
    fontSize: 11,
    fontWeight: "700",
    color: "#64748B",
    textAlignVertical: "center",
  },

  bodyCell: {
    justifyContent: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
    fontSize: 11,
    color: "#334155",
  },

  nameColumn: {
    width: 150,
  },

  categoryColumn: {
    width: 140,
  },

  dateColumn: {
    width: 105,
  },

  amountColumn: {
    width: 100,
    fontWeight: "700",
    color: "#0F172A",
  },

  paidColumn: {
    width: 95,
    fontWeight: "600",
    color: "#334155",
  },

  statusColumn: {
    width: 125,
  },

  methodColumn: {
    width: 110,
  },

  vendorColumn: {
    width: 145,
  },

  actionsColumn: {
    width: 115,
  },

  expenseName: {
    fontSize: 12,
    fontWeight: "700",
    lineHeight: 17,
    color: "#0F172A",
  },

  expenseId: {
    marginTop: 4,
    fontSize: 10,
    color: "#94A3B8",
  },

  categoryBadge: {
    alignSelf: "flex-start",
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 7,
  },

  categoryBadgeText: {
    fontSize: 10,
    fontWeight: "600",
  },

  statusBadge: {
    alignSelf: "flex-start",
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 7,
  },

  statusBadgeText: {
    fontSize: 10,
    fontWeight: "700",
  },

  actions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },

  actionButton: {
    width: 29,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    backgroundColor: "#F8FAFC",
  },

  emptyState: {
    minHeight: 190,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 28,
    gap: 8,
  },

  emptyTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#334155",
  },

  emptyDescription: {
    maxWidth: 260,
    fontSize: 12,
    lineHeight: 18,
    textAlign: "center",
    color: "#64748B",
  },

  pagination: {
    minHeight: 64,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },

  paginationInfo: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 10,
  },

  paginationText: {
    fontSize: 11,
    color: "#64748B",
  },

  rowsPerPageContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },

  pageSizeButton: {
    minWidth: 27,
    height: 27,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 5,
    borderRadius: 6,
  },

  pageSizeButtonActive: {
    backgroundColor: "#EEF2FF",
  },

  pageSizeText: {
    fontSize: 10,
    color: "#64748B",
  },

  pageSizeTextActive: {
    fontWeight: "700",
    color: "#5145E5",
  },

  paginationActions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 9,
  },

  paginationButton: {
    width: 32,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    backgroundColor: "#FFFFFF",
  },

  paginationButtonDisabled: {
    backgroundColor: "#F8FAFC",
    borderColor: "#F1F5F9",
  },

  pageNumber: {
    minWidth: 42,
    fontSize: 11,
    fontWeight: "600",
    color: "#334155",
    textAlign: "center",
  },
});
