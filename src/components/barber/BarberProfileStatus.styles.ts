import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    gap: 16,
  },

  statusBanner: {
    padding: 17,
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 13,
  },

  statusIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 14,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },

  statusTextContainer: {
    flex: 1,
    gap: 5,
  },

  statusTitle: {
    fontSize: 17,
    fontWeight: "800",
  },

  statusSubtitle: {
    fontSize: 12,
    lineHeight: 19,
    color: "#56647F",
  },

  submittedAt: {
    marginTop: 3,
    fontSize: 11,
    lineHeight: 17,
    color: "#68748E",
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E3E9F4",
    borderRadius: 17,
    padding: 17,
    gap: 17,
    shadowColor: "#25345D",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.04,
    shadowRadius: 12,
    elevation: 2,
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: "800",
    color: "#202744",
  },

  timeline: {
    gap: 0,
  },

  timelineItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 12,
    minHeight: 55,
  },

  timelineDot: {
    width: 33,
    height: 33,
    borderRadius: 17,
    alignItems: "center",
    justifyContent: "center",
  },

  timelineCompleted: {
    backgroundColor: "#6558D3",
  },

  timelineCurrent: {
    backgroundColor: "#D97706",
  },

  timelineRejected: {
    backgroundColor: "#DC2626",
  },

  timelineUpcoming: {
    backgroundColor: "#E8ECF4",
  },

  timelineConnector: {
    width: 2,
    height: 20,
    backgroundColor: "#D8DDEF",
    marginLeft: 15,
    marginVertical: 2,
  },

  timelineText: {
    flex: 1,
    paddingTop: 1,
    gap: 4,
  },

  timelineTitle: {
    fontSize: 13,
    fontWeight: "800",
    color: "#202744",
  },

  timelineSubtitle: {
    fontSize: 12,
    lineHeight: 18,
    color: "#7180A5",
  },

  infoBanner: {
    backgroundColor: "#EAF4FF",
    borderRadius: 13,
    padding: 15,
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 11,
  },

  infoTextContainer: {
    flex: 1,
    gap: 5,
  },

  infoTitle: {
    fontSize: 13,
    fontWeight: "800",
    color: "#234A84",
  },

  infoDescription: {
    fontSize: 12,
    lineHeight: 19,
    color: "#345783",
  },

  rejectionCard: {
    backgroundColor: "#FFF0F0",
    borderWidth: 1,
    borderColor: "#F6CCCC",
    borderRadius: 13,
    padding: 15,
    gap: 7,
  },

  rejectionTitle: {
    fontSize: 13,
    fontWeight: "800",
    color: "#B91C1C",
  },

  rejectionText: {
    fontSize: 12,
    lineHeight: 19,
    color: "#7F1D1D",
  },

  detailsHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  detailsIcon: {
    width: 45,
    height: 45,
    borderRadius: 12,
    backgroundColor: "#EFEDFF",
    alignItems: "center",
    justifyContent: "center",
  },

  detailsHeadingText: {
    flex: 1,
    gap: 4,
  },

  detailsSubtitle: {
    fontSize: 11,
    lineHeight: 17,
    color: "#7180A5",
  },

  detailsList: {
    borderTopWidth: 1,
    borderTopColor: "#E9EDF5",
  },

  detailRow: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#E9EDF5",
    gap: 5,
  },

  detailLabel: {
    fontSize: 11,
    fontWeight: "700",
    color: "#68789E",
  },

  detailValue: {
    fontSize: 13,
    lineHeight: 19,
    color: "#202744",
  },

  emptyCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 17,
    borderWidth: 1,
    borderColor: "#E5EAF4",
    padding: 25,
    alignItems: "center",
    gap: 12,
  },

  emptyIconContainer: {
    width: 62,
    height: 62,
    borderRadius: 18,
    backgroundColor: "#EFEDFF",
    alignItems: "center",
    justifyContent: "center",
  },

  emptyTitle: {
    fontSize: 17,
    fontWeight: "800",
    color: "#202744",
    textAlign: "center",
  },

  emptyDescription: {
    fontSize: 13,
    lineHeight: 20,
    color: "#7180A5",
    textAlign: "center",
  },
});