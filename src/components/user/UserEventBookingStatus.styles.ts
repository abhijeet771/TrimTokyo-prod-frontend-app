import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F9FF",
  },

  heading: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 12,
  },

  title: {
    fontSize: 25,
    fontWeight: "800",
    color: "#111827",
  },

  subtitle: {
    marginTop: 5,
    fontSize: 14,
    lineHeight: 20,
    color: "#687386",
  },

  filtersScroll: {
    flexGrow: 0,
    flexShrink: 0,
  },

  filtersContainer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    gap: 8,
  },

  filterButton: {
    minHeight: 40,
    paddingHorizontal: 15,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#DCE5EE",
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },

  filterButtonActive: {
    backgroundColor: "#111827",
    borderColor: "#111827",
  },

  filterText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#374151",
  },

  filterTextActive: {
    color: "#FFFFFF",
  },

  bookingList: {
    flex: 1,
    minHeight: 0,
  },

  bookingListContent: {
    paddingHorizontal: 15,
    paddingTop: 2,
    paddingBottom: 24,
    gap: 14,
  },

  bookingCard: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 12,
    padding: 12,
    backgroundColor: "#FFFFFF",
    borderRadius: 21,
    borderWidth: 1,
    borderColor: "#E7EDF5",
  },

  eventImage: {
    width: 100,
    height: 135,
    borderRadius: 14,
    backgroundColor: "#E5E7EB",
  },

  bookingContent: {
    flex: 1,
    minWidth: 0,
  },

  bookingTopRow: {
    marginBottom: 7,
  },

  eventName: {
    fontSize: 15,
    lineHeight: 20,
    fontWeight: "800",
    color: "#111827",
  },

  statusBadge: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    paddingHorizontal: 9,
    paddingVertical: 5,
    borderRadius: 12,
    marginBottom: 8,
  },

  statusText: {
    fontSize: 11,
    fontWeight: "700",
  },

  bookingId: {
    fontSize: 10,
    lineHeight: 15,
    color: "#7B8798",
    marginBottom: 7,
  },

  detailRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginBottom: 6,
  },

  detailText: {
    flex: 1,
    fontSize: 11,
    lineHeight: 15,
    color: "#687386",
  },

  cardFooter: {
    marginTop: 5,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: "#EDF1F5",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 4,
  },

  eventType: {
    fontSize: 11,
    fontWeight: "700",
    color: "#344054",
  },

  viewDetails: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },

  viewDetailsText: {
    fontSize: 10,
    fontWeight: "700",
    color: "#1769F5",
  },

  emptyState: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 25,
    paddingVertical: 55,
  },

  emptyTitle: {
    marginTop: 13,
    fontSize: 17,
    fontWeight: "800",
    color: "#111827",
  },

  emptySubtitle: {
    marginTop: 6,
    fontSize: 13,
    lineHeight: 19,
    color: "#687386",
    textAlign: "center",
  },
});