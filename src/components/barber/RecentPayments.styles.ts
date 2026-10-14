import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#ECEEF7",
    paddingHorizontal: 11,
    paddingTop: 12,
    paddingBottom: 4,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 6,
    marginBottom: 8,
  },

  headingLeft: {
    flex: 1,
    minWidth: 0,
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
  },

  headingIcon: {
    width: 29,
    height: 29,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F0EDFF",
  },

  title: {
    flex: 1,
    fontSize: 13,
    fontWeight: "700",
    color: "#171A35",
  },

  viewAllButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
    paddingVertical: 5,
  },

  viewAllText: {
    fontSize: 11,
    fontWeight: "600",
    color: "#6554F0",
  },

  paymentRow: {
    minHeight: 68,
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
    paddingVertical: 10,
  },

  avatar: {
    width: 34,
    height: 34,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },

  avatarText: {
    fontSize: 11,
    fontWeight: "700",
    color: "#6554F0",
  },

  customerDetails: {
    flex: 1,
    minWidth: 0,
    gap: 4,
  },

  customerName: {
    fontSize: 10,
    fontWeight: "700",
    color: "#202443",
  },

  orderId: {
    fontSize: 9,
    color: "#7A829B",
  },

  dateDetails: {
    flex: 1,
    minWidth: 0,
    gap: 4,
  },

  dateText: {
    fontSize: 9,
    color: "#64708A",
  },

  timeText: {
    fontSize: 9,
    color: "#64708A",
  },

  methodDetails: {
    width: 48,
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
  },

  methodText: {
    fontSize: 9,
    color: "#59627E",
  },

  amountDetails: {
    alignItems: "flex-end",
    gap: 5,
    flexShrink: 0,
  },

  amountText: {
    fontSize: 11,
    fontWeight: "800",
    color: "#171A35",
  },

  statusBadge: {
    paddingHorizontal: 6,
    paddingVertical: 4,
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center",
  },

  statusText: {
    fontSize: 8,
    fontWeight: "600",
  },

  separator: {
    height: 1,
    backgroundColor: "#F0F1F7",
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
    fontSize: 11,
    color: "#7A829B",
    textAlign: "center",
  },
});
