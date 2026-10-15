import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
  },

  headingContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    marginBottom: 18,
  },

  headingTextContainer: {
    flex: 1,
  },

  heading: {
    fontSize: 20,
    fontWeight: "800",
    color: "#172554",
    marginBottom: 5,
  },

  subtitle: {
    fontSize: 13,
    lineHeight: 19,
    color: "#64748B",
  },

  totalBadge: {
    minWidth: 38,
    height: 38,
    borderRadius: 12,
    backgroundColor: "#E8F0FF",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 8,
  },

  totalBadgeText: {
    fontSize: 14,
    fontWeight: "800",
    color: "#2563EB",
  },

  searchContainer: {
    minHeight: 49,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    borderWidth: 1,
    borderColor: "#DCE3ED",
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 13,
    marginBottom: 15,
  },

  searchInput: {
    flex: 1,
    minWidth: 0,
    paddingVertical: 12,
    fontSize: 13,
    color: "#1E293B",
  },

  filtersContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 23,
  },

  filterButton: {
    minHeight: 35,
    paddingHorizontal: 13,
    paddingVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E2E8F0",
    borderRadius: 9,
  },

  activeFilterButton: {
    backgroundColor: "#2563EB",
    borderColor: "#2563EB",
  },

  filterText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#64748B",
  },

  activeFilterText: {
    color: "#FFFFFF",
  },

  resultsHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 13,
  },

  resultsTitle: {
    fontSize: 15,
    fontWeight: "800",
    color: "#334155",
  },

  resultsCount: {
    fontSize: 12,
    color: "#94A3B8",
  },

  ticketList: {
    gap: 13,
  },

  ticketCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#E5EAF3",
    padding: 15,
  },

  ticketTopRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
    marginBottom: 13,
  },

  ticketIdContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    flexShrink: 1,
  },

  ticketId: {
    fontSize: 12,
    fontWeight: "700",
    color: "#64748B",
  },

  statusBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    borderRadius: 7,
    paddingHorizontal: 9,
    paddingVertical: 6,
    flexShrink: 0,
  },

  statusDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },

  statusText: {
    fontSize: 11,
    fontWeight: "700",
  },

  ticketTitle: {
    fontSize: 15,
    fontWeight: "800",
    lineHeight: 21,
    color: "#1E293B",
    marginBottom: 12,
  },

  metadataRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 13,
    marginBottom: 14,
  },

  metadataItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },

  metadataText: {
    fontSize: 11,
    color: "#64748B",
  },

  ticketDivider: {
    height: 1,
    backgroundColor: "#EDF1F7",
    marginBottom: 13,
  },

  ticketBottomRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 10,
  },

  priorityContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },

  priorityDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
  },

  priorityLabel: {
    fontSize: 11,
    color: "#64748B",
  },

  priorityValue: {
    fontSize: 11,
    fontWeight: "800",
  },

  viewButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
    paddingVertical: 5,
  },

  viewButtonText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#2563EB",
  },

  emptyState: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E5EAF3",
    borderRadius: 15,
    paddingHorizontal: 22,
    paddingVertical: 32,
    alignItems: "center",
  },

  emptyIcon: {
    width: 62,
    height: 62,
    borderRadius: 19,
    backgroundColor: "#F1F5F9",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
  },

  emptyTitle: {
    fontSize: 16,
    fontWeight: "800",
    color: "#334155",
    marginBottom: 8,
  },

  emptyDescription: {
    fontSize: 12,
    lineHeight: 19,
    color: "#94A3B8",
    textAlign: "center",
    maxWidth: 270,
  },

  clearFiltersButton: {
    marginTop: 17,
    paddingHorizontal: 15,
    paddingVertical: 9,
    borderRadius: 9,
    backgroundColor: "#EFF6FF",
  },

  clearFiltersText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#2563EB",
  },
});