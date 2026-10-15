
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FC",
  },

  pageHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  headerText: {
    flex: 1,
    paddingRight: 10,
  },

  pageTitle: {
    fontSize: 25,
    fontWeight: "700",
    color: "#20243A",
    letterSpacing: -0.4,
  },

  pageSubtitle: {
    fontSize: 12,
    color: "#858A9B",
    marginTop: 5,
    lineHeight: 18,
  },

  addButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#6558D3",
    paddingHorizontal: 13,
    minHeight: 42,
    borderRadius: 12,
    gap: 5,
  },

  addButtonText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#FFFFFF",
  },

  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E6E8F0",
    borderRadius: 13,
    paddingHorizontal: 13,
    minHeight: 49,
    marginBottom: 15,
    gap: 9,
  },

  searchInput: {
    flex: 1,
    fontSize: 13,
    color: "#252940",
    paddingVertical: 10,
  },

  filtersContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 9,
    paddingBottom: 17,
  },

  filterChip: {
    paddingHorizontal: 15,
    paddingVertical: 9,
    borderRadius: 22,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E5E7EF",
  },

  filterChipSelected: {
    backgroundColor: "#6558D3",
    borderColor: "#6558D3",
  },

  filterChipText: {
    fontSize: 11,
    fontWeight: "600",
    color: "#68718A",
  },

  filterChipTextSelected: {
    color: "#FFFFFF",
  },

  resultsHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 13,
  },

  resultsTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#252940",
  },

  resultsSubtitle: {
    fontSize: 11,
    color: "#858A9B",
  },

  servicesList: {
    gap: 13,
  },

  serviceCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#ECEEF5",
    padding: 12,
    overflow: "hidden",
  },

  serviceMain: {
    flexDirection: "row",
    alignItems: "flex-start",
  },

  serviceImage: {
    width: 91,
    height: 105,
    borderRadius: 12,
    backgroundColor: "#E9E9ED",
  },

  serviceInfo: {
    flex: 1,
    marginLeft: 12,
    paddingTop: 2,
  },

  serviceTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#252940",
    marginBottom: 6,
  },

  serviceMeta: {
    fontSize: 12,
    fontWeight: "700",
    color: "#6558D3",
    marginBottom: 7,
  },

  serviceDescription: {
    fontSize: 11,
    color: "#858A9B",
    lineHeight: 16,
  },

  serviceGender: {
    alignSelf: "flex-start",
    fontSize: 10,
    fontWeight: "600",
    color: "#68718A",
    backgroundColor: "#F1F2F7",
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginTop: 7,
  },

  serviceFooter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderTopColor: "#F0F1F6",
    marginTop: 12,
    paddingTop: 10,
  },

  statusBadge: {
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
  },

  statusText: {
    fontSize: 9,
    fontWeight: "800",
    letterSpacing: 0.3,
  },

  moreButton: {
    width: 35,
    height: 35,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F7F7FB",
  },

  actionMenu: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E8EAF2",
    borderRadius: 12,
    marginTop: 9,
    overflow: "hidden",
  },

  actionItem: {
    flexDirection: "row",
    alignItems: "center",
    minHeight: 43,
    paddingHorizontal: 13,
    gap: 10,
  },

  actionText: {
    fontSize: 12,
    fontWeight: "500",
    color: "#42475D",
  },

  deleteActionText: {
    color: "#DC2626",
  },

  emptyState: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 17,
    borderWidth: 1,
    borderColor: "#ECEEF5",
    paddingHorizontal: 20,
    paddingVertical: 38,
  },

  emptyIcon: {
    width: 58,
    height: 58,
    borderRadius: 19,
    backgroundColor: "#EFEDFF",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 14,
  },

  emptyTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#252940",
  },

  emptyDescription: {
    fontSize: 12,
    color: "#858A9B",
    textAlign: "center",
    marginTop: 7,
    lineHeight: 18,
  },

  pagination: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
    paddingBottom: 12,
  },

  pageButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    minHeight: 38,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: "#EFEDFF",
  },

  pageButtonDisabled: {
    backgroundColor: "#F0F1F5",
  },

  pageButtonText: {
    fontSize: 11,
    fontWeight: "600",
    color: "#6558D3",
  },

  pageButtonTextDisabled: {
    color: "#AEB2BF",
  },

  pageIndicator: {
    fontSize: 12,
    fontWeight: "700",
    color: "#68718A",
  },
});
