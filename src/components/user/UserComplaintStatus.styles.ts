import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 0,
    backgroundColor: "#F2F9FF",
  },

  intro: {
    paddingHorizontal: 16,
    paddingTop: 18,
    paddingBottom: 14,
  },

  heading: {
    fontSize: 23,
    fontWeight: "800",
    color: "#101828",
  },

  subtitle: {
    marginTop: 6,
    fontSize: 13,
    lineHeight: 20,
    color: "#647794",
  },

  filterScroll: {
    flexGrow: 0,
    flexShrink: 0,
    backgroundColor: "#F2F9FF",
  },

  filterContent: {
    paddingHorizontal: 16,
    paddingBottom: 14,
    gap: 8,
  },

  filterButton: {
    minHeight: 39,
    paddingHorizontal: 15,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 13,
    borderWidth: 1,
    borderColor: "#DCE6F0",
    backgroundColor: "#FFFFFF",
  },

  filterButtonActive: {
    backgroundColor: "#1769F5",
    borderColor: "#1769F5",
  },

  filterText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#526581",
  },

  filterTextActive: {
    color: "#FFFFFF",
  },

  complaintList: {
    flex: 1,
    minHeight: 0,
  },

  complaintListContent: {
    paddingHorizontal: 15,
    paddingTop: 2,
    paddingBottom: 24,
    gap: 13,
  },

  complaintCard: {
    padding: 15,
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E4EDF7",
  },

  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  complaintIcon: {
    width: 46,
    height: 46,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E2F2FF",
  },

  headerDetails: {
    flex: 1,
    minWidth: 0,
  },

  complaintTitle: {
    fontSize: 14,
    fontWeight: "800",
    color: "#101828",
  },

  complaintId: {
    marginTop: 5,
    fontSize: 11,
    color: "#647794",
  },

  statusBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    paddingHorizontal: 8,
    paddingVertical: 7,
    borderRadius: 11,
  },

  statusText: {
    fontSize: 10,
    fontWeight: "800",
  },

  pendingBadge: {
    backgroundColor: "#FFF2D8",
  },

  pendingText: {
    color: "#9A6700",
  },

  progressBadge: {
    backgroundColor: "#E2F2FF",
  },

  progressText: {
    color: "#1769F5",
  },

  resolvedBadge: {
    backgroundColor: "#DDF8EB",
  },

  resolvedText: {
    color: "#07865D",
  },

  rejectedBadge: {
    backgroundColor: "#FFE7E9",
  },

  rejectedText: {
    color: "#D92121",
  },

  divider: {
    height: 1,
    backgroundColor: "#E7EDF5",
    marginVertical: 13,
  },

  infoRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 12,
    marginBottom: 11,
  },

  infoLabel: {
    flex: 1,
    fontSize: 12,
    color: "#647794",
  },

  infoValue: {
    flex: 1.2,
    fontSize: 12,
    fontWeight: "700",
    color: "#344054",
    textAlign: "right",
  },

  descriptionBox: {
    marginTop: 3,
    marginBottom: 12,
    padding: 12,
    borderRadius: 13,
    backgroundColor: "#F4F8FD",
  },

  descriptionLabel: {
    fontSize: 12,
    fontWeight: "800",
    color: "#344054",
  },

  descriptionText: {
    marginTop: 6,
    fontSize: 12,
    lineHeight: 19,
    color: "#647794",
  },

  cardFooter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
    marginTop: 3,
  },

  detailsButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    paddingVertical: 8,
  },

  detailsButtonText: {
    fontSize: 12,
    fontWeight: "800",
    color: "#1769F5",
  },

  supportButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    paddingHorizontal: 12,
    paddingVertical: 9,
    borderRadius: 12,
    backgroundColor: "#EAF5FF",
  },

  supportButtonText: {
    fontSize: 12,
    fontWeight: "800",
    color: "#1769F5",
  },

  emptyState: {
    alignItems: "center",
    paddingHorizontal: 24,
    paddingVertical: 55,
  },

  emptyIcon: {
    width: 76,
    height: 76,
    borderRadius: 38,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#DDF0FF",
  },

  emptyTitle: {
    marginTop: 17,
    fontSize: 17,
    fontWeight: "800",
    color: "#101828",
  },

  emptySubtitle: {
    marginTop: 7,
    fontSize: 12,
    lineHeight: 19,
    textAlign: "center",
    color: "#647794",
  },
});
