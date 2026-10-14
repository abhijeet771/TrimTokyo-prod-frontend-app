import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    gap: 14,
  },

  dateSelector: {
    minHeight: 43,
    paddingHorizontal: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E7E9F5",
    borderRadius: 12,
  },

  dateText: {
    flex: 1,
    fontSize: 11,
    fontWeight: "500",
    color: "#202443",
  },

  section: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#ECEEF7",
    borderRadius: 16,
    padding: 11,
    gap: 12,
  },

  sectionHeading: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 7,
  },

  headingLeft: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
    minWidth: 0,
  },

  headingIcon: {
    width: 29,
    height: 29,
    borderRadius: 10,
    backgroundColor: "#F0EDFF",
    alignItems: "center",
    justifyContent: "center",
  },

  sectionTitle: {
    flex: 1,
    fontSize: 12,
    fontWeight: "700",
    color: "#171A35",
  },

  periodSelector: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    paddingHorizontal: 8,
    paddingVertical: 7,
    borderWidth: 1,
    borderColor: "#E7E2FF",
    borderRadius: 9,
  },

  periodSelectorText: {
    fontSize: 9,
    fontWeight: "600",
    color: "#6554F0",
  },

  summaryGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 9,
  },

  summaryCard: {
    width: "48%",
    flexGrow: 1,
    minWidth: 0,
    minHeight: 99,
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 8,
    padding: 9,
    borderWidth: 1,
    borderColor: "#ECEEF7",
    borderRadius: 13,
    backgroundColor: "#FFFFFF",
  },

  summaryIcon: {
    width: 34,
    height: 34,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
  },

  summaryContent: {
    flex: 1,
    minWidth: 0,
    gap: 4,
  },

  summaryLabel: {
    fontSize: 9,
    color: "#64708A",
  },

  summaryAmount: {
    fontSize: 15,
    fontWeight: "800",
    color: "#171A35",
  },

  summaryDescription: {
    fontSize: 8,
    color: "#64708A",
  },

  methodList: {
    gap: 12,
  },

  methodRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
  },

  methodIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
  },

  methodDetails: {
    width: 92,
    gap: 4,
  },

  methodTitle: {
    fontSize: 10,
    fontWeight: "600",
    color: "#202443",
  },

  methodSubtitle: {
    fontSize: 8,
    color: "#64708A",
  },

  methodProgressContainer: {
    flex: 1,
    minWidth: 25,
  },

  progressTrack: {
    width: "100%",
    height: 7,
    borderRadius: 6,
    overflow: "hidden",
    backgroundColor: "#ECEEF6",
  },

  progressFill: {
    height: "100%",
    borderRadius: 6,
  },

  methodPercentage: {
    width: 27,
    textAlign: "right",
    fontSize: 9,
    color: "#64708A",
  },

  methodAmount: {
    width: 57,
    textAlign: "right",
    fontSize: 10,
    fontWeight: "700",
    color: "#171A35",
  },

  statusList: {
    gap: 7,
    paddingRight: 2,
  },

  statusCard: {
    width: 105,
    minHeight: 94,
    padding: 9,
    borderRadius: 12,
    justifyContent: "center",
    gap: 5,
  },

  statusHeading: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },

  statusTitle: {
    flex: 1,
    fontSize: 9,
    fontWeight: "600",
  },

  statusCount: {
    fontSize: 16,
    fontWeight: "800",
    color: "#171A35",
  },

  statusAmount: {
    fontSize: 11,
    fontWeight: "600",
    color: "#59627E",
  },
});