import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 24,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 18,
  },

  headingContainer: {
    flex: 1,
    paddingRight: 12,
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#172B4D",
  },

  subtitle: {
    marginTop: 5,
    fontSize: 13,
    lineHeight: 19,
    color: "#71839F",
  },

  countBadge: {
    minWidth: 38,
    height: 38,
    paddingHorizontal: 10,
    borderRadius: 12,
    backgroundColor: "#E8F0FF",
    alignItems: "center",
    justifyContent: "center",
  },

  countText: {
    fontSize: 15,
    fontWeight: "700",
    color: "#1769FF",
  },

  summaryCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E6ECF5",
    borderRadius: 16,
    padding: 14,
    marginBottom: 16,
    gap: 10,
  },

  summaryIcon: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: "#EAF1FF",
    alignItems: "center",
    justifyContent: "center",
  },

  summaryTextContainer: {
    flex: 1,
  },

  summaryTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#172B4D",
  },

  summaryDescription: {
    marginTop: 4,
    fontSize: 11,
    lineHeight: 16,
    color: "#71839F",
  },

  clearButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    paddingHorizontal: 9,
    paddingVertical: 9,
    borderRadius: 9,
    backgroundColor: "#FEF2F2",
  },

  clearButtonText: {
    fontSize: 11,
    fontWeight: "700",
    color: "#DC2626",
  },

  emptyCard: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E6ECF5",
    borderRadius: 18,
    paddingHorizontal: 24,
    paddingVertical: 38,
    alignItems: "center",
  },

  emptyIconContainer: {
    width: 76,
    height: 76,
    borderRadius: 24,
    backgroundColor: "#EAF1FF",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 18,
  },

  emptyTitle: {
    fontSize: 17,
    fontWeight: "700",
    color: "#172B4D",
    textAlign: "center",
  },

  emptyDescription: {
    marginTop: 9,
    fontSize: 13,
    lineHeight: 21,
    color: "#71839F",
    textAlign: "center",
  },

  slotList: {
    gap: 14,
  },

  slotCard: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E6ECF5",
    borderRadius: 16,
    padding: 15,
  },

  slotTopRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 9,
    paddingBottom: 13,
    borderBottomWidth: 1,
    borderBottomColor: "#EEF2F8",
  },

  slotNumberContainer: {
    width: 34,
    height: 34,
    borderRadius: 10,
    backgroundColor: "#EAF1FF",
    alignItems: "center",
    justifyContent: "center",
  },

  slotNumber: {
    fontSize: 12,
    fontWeight: "700",
    color: "#1769FF",
  },

  dateContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },

  dateText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#425573",
  },

  availableBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 20,
    backgroundColor: "#EAFBF1",
  },

  availableDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#16A34A",
  },

  availableText: {
    fontSize: 10,
    fontWeight: "700",
    color: "#15803D",
  },

  slotDetails: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 16,
    gap: 8,
  },

  timeContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    flex: 1,
  },

  timeIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: "#F0F5FF",
    alignItems: "center",
    justifyContent: "center",
  },

  timeTextContainer: {
    flex: 1,
  },

  timeLabel: {
    fontSize: 11,
    color: "#71839F",
    marginBottom: 4,
  },

  timeText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#172B4D",
  },

  durationContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    paddingHorizontal: 9,
    paddingVertical: 8,
    backgroundColor: "#F5F8FC",
    borderRadius: 9,
  },

  durationText: {
    fontSize: 11,
    fontWeight: "600",
    color: "#526580",
  },

  slotFooter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderTopColor: "#EEF2F8",
    paddingTop: 12,
  },

  slotFooterText: {
    fontSize: 11,
    color: "#8A9AB2",
  },

  deleteButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 8,
    backgroundColor: "#FEF2F2",
  },

  deleteButtonText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#DC2626",
  },
});