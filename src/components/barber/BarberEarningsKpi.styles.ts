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

  sectionHeading: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#171A35",
  },

  periodBadge: {
    minHeight: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    paddingHorizontal: 9,
    borderWidth: 1,
    borderColor: "#E8E4FF",
    borderRadius: 9,
    backgroundColor: "#FFFFFF",
  },

  periodBadgeText: {
    fontSize: 10,
    fontWeight: "600",
    color: "#6554F0",
  },

  metricsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },

  metricCard: {
    width: "48%",
    flexGrow: 1,
    minWidth: 0,
    minHeight: 94,
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 8,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ECEEF7",
    borderRadius: 14,
    backgroundColor: "#FFFFFF",
  },

  metricIcon: {
    width: 31,
    height: 31,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },

  metricContent: {
    flex: 1,
    minWidth: 0,
  },

  metricTitle: {
    fontSize: 9,
    color: "#64708A",
    marginBottom: 4,
  },

  metricAmount: {
    fontSize: 16,
    fontWeight: "800",
    color: "#171A35",
    marginBottom: 5,
  },

  changeRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },

  changeText: {
    flex: 1,
    fontSize: 8,
    color: "#16A765",
  },

  chartCard: {
    padding: 12,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#ECEEF7",
    borderRadius: 16,
    gap: 14,
  },

  chartHeading: {
    gap: 10,
  },

  chartTitleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
  },

  chartIcon: {
    width: 27,
    height: 27,
    borderRadius: 9,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F0EDFF",
  },

  chartTitle: {
    fontSize: 13,
    fontWeight: "700",
    color: "#171A35",
  },

  periodOptions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },

  periodButton: {
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderWidth: 1,
    borderColor: "#E7E9F5",
    borderRadius: 9,
    backgroundColor: "#FFFFFF",
  },

  activePeriodButton: {
    backgroundColor: "#6554F0",
    borderColor: "#6554F0",
  },

  periodButtonText: {
    fontSize: 10,
    color: "#64708A",
    fontWeight: "500",
  },

  activePeriodButtonText: {
    color: "#FFFFFF",
    fontWeight: "700",
  },

  chartPlaceholder: {
    height: 125,
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "space-between",
    paddingTop: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#E7E9F5",
  },

  chartColumn: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 6,
  },

  barArea: {
    width: "60%",
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#F0F1F8",
  },

  chartBar: {
    width: "100%",
    minHeight: 5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    backgroundColor: "#B7AEFF",
  },

  highlightedBar: {
    backgroundColor: "#6554F0",
  },

  chartDay: {
    fontSize: 9,
    color: "#64708A",
    marginBottom: 5,
  },

  performanceRow: {
    flexDirection: "row",
    alignItems: "stretch",
    paddingVertical: 10,
    paddingHorizontal: 2,
    borderRadius: 12,
    backgroundColor: "#F8F8FF",
  },

  performanceItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
    paddingHorizontal: 3,
  },

  performanceIcon: {
    width: 30,
    height: 30,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ECE8FF",
  },

  performanceValue: {
    fontSize: 15,
    fontWeight: "800",
    color: "#171A35",
  },

  performanceLabel: {
    fontSize: 8,
    color: "#64708A",
    textAlign: "center",
  },

  performanceChange: {
    fontSize: 10,
    fontWeight: "700",
    color: "#16A765",
  },

  performanceDivider: {
    width: 1,
    backgroundColor: "#E1E3F0",
    marginVertical: 5,
  },
});