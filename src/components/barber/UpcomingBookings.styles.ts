import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginTop: 12,
    marginBottom: 24,
  },

  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
    marginBottom: 15,
  },

  title: {
    fontSize: 19,
    fontWeight: "800",
    color: "#101D46",
  },

  subtitle: {
    marginTop: 5,
    fontSize: 12,
    color: "#71839F",
  },

  viewAllButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
    paddingVertical: 8,
  },

  viewAllText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#1769FF",
  },

  bookingList: {
    gap: 12,
  },

  bookingCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 19,
    padding: 15,
    borderWidth: 1,
    borderColor: "#E8EFF9",
    shadowColor: "#1C5DB5",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.04,
    shadowRadius: 10,
    elevation: 2,
  },

  bookingTopRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  customerAvatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#EAF3FF",
    alignItems: "center",
    justifyContent: "center",
  },

  customerInfo: {
    flex: 1,
    minWidth: 0,
  },

  customerName: {
    fontSize: 14,
    fontWeight: "800",
    color: "#101D46",
  },

  service: {
    fontSize: 12,
    color: "#71839F",
    marginTop: 4,
  },

  statusBadge: {
    paddingHorizontal: 9,
    paddingVertical: 6,
    borderRadius: 20,
  },

  confirmedBadge: {
    backgroundColor: "#E2F9EF",
  },

  pendingBadge: {
    backgroundColor: "#FFF2E4",
  },

  statusText: {
    fontSize: 10,
    fontWeight: "700",
  },

  confirmedText: {
    color: "#13864F",
  },

  pendingText: {
    color: "#C77917",
  },

  divider: {
    height: 1,
    backgroundColor: "#EDF2F8",
    marginVertical: 13,
  },

  bookingDetails: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 16,
  },

  detailItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },

  detailText: {
    fontSize: 11,
    color: "#526684",
  },

  bookingFooter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 14,
  },

  durationContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },

  durationText: {
    fontSize: 11,
    color: "#71839F",
  },

  amount: {
    fontSize: 17,
    fontWeight: "800",
    color: "#1769FF",
  },

  emptyCard: {
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#E8EFF9",
  },

  emptyIcon: {
    width: 62,
    height: 62,
    borderRadius: 31,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EAF3FF",
    marginBottom: 14,
  },

  emptyTitle: {
    fontSize: 16,
    fontWeight: "800",
    color: "#101D46",
  },

  emptyDescription: {
    marginTop: 7,
    fontSize: 12,
    lineHeight: 18,
    textAlign: "center",
    color: "#71839F",
  },
});