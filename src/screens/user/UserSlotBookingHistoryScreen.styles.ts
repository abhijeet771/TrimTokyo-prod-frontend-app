import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#F2F9FF",
  },

  header: {
    minHeight: 78,
    paddingHorizontal: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#DDF4FF",
  },

  backButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },

  headerTitle: {
    flex: 1,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "800",
    color: "#101828",
  },

  headerSpacer: {
    width: 42,
  },

  filterContainer: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 12,
  },

  filterContent: {
    paddingHorizontal: 16,
    gap: 9,
  },

  filterButton: {
    minWidth: 92,
    height: 44,
    paddingHorizontal: 17,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    backgroundColor: "#EAF5FF",
  },

  filterButtonActive: {
    backgroundColor: "#1769F5",
  },

  filterText: {
    fontSize: 13,
    fontWeight: "700",
    color: "#526581",
  },

  filterTextActive: {
    color: "#FFFFFF",
  },

  bookingList: {
    flex: 1,
    minHeight: 0,
  },

  bookingListContent: {
    paddingHorizontal: 14,
    paddingTop: 14,
    paddingBottom: 24,
    gap: 14,
  },

  bookingCard: {
    padding: 13,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#E4EDF7",
  },

  bookingMain: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 12,
  },

  serviceImage: {
    width: 100,
    height: 112,
    borderRadius: 13,
    backgroundColor: "#E8F1FA",
  },

  bookingInfo: {
    flex: 1,
    minWidth: 0,
    gap: 7,
  },

  serviceName: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "800",
    color: "#101828",
  },

  barberName: {
    fontSize: 13,
    lineHeight: 18,
    fontWeight: "700",
    color: "#526581",
  },

  barberRole: {
    fontWeight: "400",
    color: "#647794",
  },

  detailRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },

  detailText: {
    flexShrink: 1,
    fontSize: 12,
    color: "#647794",
  },

  bookingFooter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 13,
    gap: 10,
  },

  statusBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 11,
    paddingVertical: 8,
    borderRadius: 14,
  },

  upcomingBadge: {
    backgroundColor: "#DDF8EB",
  },

  completedBadge: {
    backgroundColor: "#E2F2FF",
  },

  cancelledBadge: {
    backgroundColor: "#FFE7E9",
  },

  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },

  statusText: {
    fontSize: 12,
    fontWeight: "800",
  },

  upcomingText: {
    color: "#07865D",
  },

  completedText: {
    color: "#1769F5",
  },

  cancelledText: {
    color: "#D92121",
  },

  price: {
    fontSize: 18,
    fontWeight: "900",
    color: "#101828",
  },

  actionRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 9,
    marginTop: 13,
  },

  secondaryButton: {
    minHeight: 43,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 8,
    borderWidth: 1.3,
    borderColor: "#1769F5",
    borderRadius: 13,
    backgroundColor: "#FFFFFF",
  },

  secondaryButtonText: {
    fontSize: 12,
    fontWeight: "800",
    color: "#1769F5",
  },

  primaryButton: {
    minHeight: 43,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 8,
    borderRadius: 13,
    backgroundColor: "#1769F5",
  },

  primaryButtonText: {
    fontSize: 12,
    fontWeight: "800",
    color: "#FFFFFF",
  },

  emptyState: {
    alignItems: "center",
    paddingHorizontal: 25,
    paddingVertical: 65,
  },

  emptyIcon: {
    width: 76,
    height: 76,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 38,
    backgroundColor: "#DDF0FF",
  },

  emptyTitle: {
    marginTop: 18,
    fontSize: 18,
    fontWeight: "800",
    color: "#101828",
  },

  emptyDescription: {
    marginTop: 8,
    fontSize: 13,
    lineHeight: 20,
    textAlign: "center",
    color: "#647794",
  },

  emptyButton: {
    marginTop: 18,
    paddingHorizontal: 22,
    paddingVertical: 12,
    borderRadius: 13,
    backgroundColor: "#1769F5",
  },

  emptyButtonText: {
    fontSize: 13,
    fontWeight: "800",
    color: "#FFFFFF",
  },

  bottomNavigation: {
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#E7EDF3",
  },
});
