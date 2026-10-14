import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#ECEEF7",
    paddingHorizontal: 12,
    paddingTop: 13,
    paddingBottom: 4,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
    gap: 6,
  },

  headingLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    gap: 7,
  },

  headingIcon: {
    width: 29,
    height: 29,
    borderRadius: 10,
    backgroundColor: "#F0EDFF",
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontSize: 13,
    fontWeight: "700",
    color: "#171A35",
    flexShrink: 1,
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

  earningRow: {
    minHeight: 66,
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
    paddingVertical: 10,
  },

  avatar: {
    width: 35,
    height: 35,
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
    flex: 1.1,
    minWidth: 0,
    gap: 3,
  },

  customerName: {
    fontSize: 10,
    fontWeight: "700",
    color: "#202443",
  },

  serviceName: {
    fontSize: 9,
    color: "#64708A",
  },

  dateDetails: {
    flex: 1,
    minWidth: 0,
    gap: 3,
  },

  dateText: {
    fontSize: 9,
    color: "#64708A",
  },

  timeText: {
    fontSize: 9,
    color: "#64708A",
  },

  amountDetails: {
    alignItems: "flex-end",
    gap: 5,
    flexShrink: 0,
  },

  amountText: {
    fontSize: 12,
    fontWeight: "800",
    color: "#171A35",
  },

  statusBadge: {
    paddingHorizontal: 7,
    paddingVertical: 4,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },

  receivedBadge: {
    backgroundColor: "#E4F9EE",
  },

  pendingBadge: {
    backgroundColor: "#FFF1DE",
  },

  statusText: {
    fontSize: 9,
    fontWeight: "600",
  },

  receivedText: {
    color: "#139A59",
  },

  pendingText: {
    color: "#D97706",
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