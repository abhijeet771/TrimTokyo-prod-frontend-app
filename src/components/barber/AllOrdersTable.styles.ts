import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 24,
  },

  heading: {
    marginBottom: 16,
  },

  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#172B4D",
  },

  subtitle: {
    marginTop: 5,
    fontSize: 12,
    color: "#8290A5",
    lineHeight: 18,
  },

  tableCard: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E4EAF3",
    borderRadius: 15,
    overflow: "hidden",
  },

  tableInfo: {
    paddingHorizontal: 13,
    paddingVertical: 12,
    gap: 7,
    borderBottomWidth: 1,
    borderBottomColor: "#EEF2F8",
  },

  recordCount: {
    fontSize: 12,
    fontWeight: "600",
    color: "#334155",
  },

  scrollHint: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },

  scrollHintText: {
    fontSize: 10,
    color: "#8290A5",
  },

  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#F5F7FC",
    borderBottomWidth: 1,
    borderBottomColor: "#E4EAF3",
  },

  headerCell: {
    minHeight: 46,
    paddingHorizontal: 12,
    justifyContent: "center",
  },

  headerText: {
    fontSize: 11,
    fontWeight: "700",
    color: "#64748B",
  },

  tableRow: {
    flexDirection: "row",
    minHeight: 70,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#EEF2F8",
  },

  cell: {
    paddingHorizontal: 12,
    paddingVertical: 12,
    justifyContent: "center",
  },

  orderId: {
    fontSize: 12,
    fontWeight: "700",
    color: "#5145FF",
  },

  customerCell: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  avatar: {
    width: 34,
    height: 34,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EDE9FE",
  },

  avatarText: {
    fontSize: 10,
    fontWeight: "700",
    color: "#5145FF",
  },

  customerInfo: {
    flex: 1,
    minWidth: 0,
  },

  customerName: {
    fontSize: 12,
    fontWeight: "600",
    color: "#172B4D",
  },

  phone: {
    marginTop: 4,
    fontSize: 10,
    color: "#8290A5",
  },

  serviceName: {
    fontSize: 12,
    fontWeight: "500",
    color: "#334155",
    lineHeight: 17,
  },

  quantity: {
    marginTop: 4,
    fontSize: 10,
    color: "#8290A5",
  },

  cellText: {
    fontSize: 12,
    color: "#475569",
  },

  statusBadge: {
    alignSelf: "flex-start",
    paddingHorizontal: 9,
    paddingVertical: 6,
    borderRadius: 8,
  },

  statusText: {
    fontSize: 10,
    fontWeight: "700",
  },

  amount: {
    fontSize: 12,
    fontWeight: "700",
    color: "#172B4D",
  },

  pagination: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
    marginTop: 14,
  },

  pageSizeContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
  },

  pageSizeLabel: {
    fontSize: 11,
    color: "#64748B",
  },

  pageSizeButton: {
    minWidth: 55,
    height: 36,
    paddingHorizontal: 9,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 5,
    borderWidth: 1,
    borderColor: "#E4EAF3",
    borderRadius: 9,
    backgroundColor: "#FFFFFF",
  },

  pageSizeValue: {
    fontSize: 12,
    fontWeight: "600",
    color: "#334155",
  },

  pageControls: {
    flexDirection: "row",
    alignItems: "center",
    gap: 9,
  },

  pageButton: {
    width: 35,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#E4EAF3",
    borderRadius: 9,
    backgroundColor: "#FFFFFF",
  },

  disabledPageButton: {
    backgroundColor: "#F5F7FA",
    borderColor: "#EDF0F5",
  },

  pageText: {
    fontSize: 11,
    fontWeight: "600",
    color: "#475569",
  },

  pageSizeOptions: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginTop: 10,
  },

  pageSizeOption: {
    paddingHorizontal: 12,
    paddingVertical: 9,
    borderWidth: 1,
    borderColor: "#E4EAF3",
    borderRadius: 9,
    backgroundColor: "#FFFFFF",
  },

  selectedPageSizeOption: {
    backgroundColor: "#5145FF",
    borderColor: "#5145FF",
  },

  pageSizeOptionText: {
    fontSize: 11,
    color: "#475569",
  },

  selectedPageSizeOptionText: {
    fontWeight: "700",
    color: "#FFFFFF",
  },

  emptyCard: {
    alignItems: "center",
    paddingHorizontal: 24,
    paddingVertical: 36,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#E4EAF3",
    backgroundColor: "#FFFFFF",
  },

  emptyTitle: {
    marginTop: 13,
    fontSize: 16,
    fontWeight: "700",
    color: "#172B4D",
  },

  emptyDescription: {
    marginTop: 7,
    fontSize: 12,
    lineHeight: 19,
    textAlign: "center",
    color: "#8290A5",
  },
});