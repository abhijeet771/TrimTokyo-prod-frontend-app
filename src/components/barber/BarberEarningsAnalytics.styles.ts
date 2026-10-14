import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    gap: 12,
  },

  dateSelector: {
    minHeight: 42,
    paddingHorizontal: 11,
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

  pageTitle: {
    fontSize: 17,
    fontWeight: "700",
    color: "#171A35",
  },

  selectedPeriod: {
    paddingHorizontal: 9,
    paddingVertical: 7,
    borderWidth: 1,
    borderColor: "#E7E2FF",
    borderRadius: 9,
    backgroundColor: "#FFFFFF",
  },

  selectedPeriodText: {
    fontSize: 10,
    fontWeight: "600",
    color: "#6554F0",
  },

  card: {
    padding: 12,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#ECEEF7",
    borderRadius: 15,
    gap: 12,
  },

  cardHeading: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
  },

  headingIcon: {
    width: 27,
    height: 27,
    borderRadius: 9,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F0EDFF",
  },

  cardTitle: {
    flex: 1,
    fontSize: 12,
    fontWeight: "700",
    color: "#171A35",
  },

  chartContainer: {
    height: 145,
    flexDirection: "row",
    gap: 5,
  },

  yAxis: {
    width: 30,
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingBottom: 21,
  },

  axisLabel: {
    fontSize: 8,
    color: "#64708A",
  },

  chartArea: {
    flex: 1,
    position: "relative",
    justifyContent: "flex-end",
  },

  gridLine: {
    position: "absolute",
    left: 0,
    right: 0,
    borderTopWidth: 1,
    borderTopColor: "#F0F1F8",
  },

  barsRow: {
    flex: 1,
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "space-between",
  },

  barColumn: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 5,
  },

  barAmount: {
    height: 12,
    fontSize: 7,
    fontWeight: "600",
    color: "#64708A",
  },

  barTrack: {
    flex: 1,
    width: "65%",
    justifyContent: "flex-end",
    alignItems: "center",
  },

  bar: {
    width: "100%",
    minHeight: 3,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    backgroundColor: "#8B7CF6",
  },

  barDate: {
    height: 14,
    fontSize: 8,
    color: "#64708A",
  },

  daySummaryRow: {
    flexDirection: "row",
    gap: 8,
  },

  daySummaryCard: {
    flex: 1,
    minWidth: 0,
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
    padding: 8,
    borderRadius: 11,
    backgroundColor: "#F8F8FC",
  },

  summaryIcon: {
    width: 30,
    height: 30,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  highestIcon: {
    backgroundColor: "#FFF0DE",
  },

  lowestIcon: {
    backgroundColor: "#FDEBEC",
  },

  summaryDetails: {
    flex: 1,
    minWidth: 0,
    gap: 3,
  },

  summaryLabel: {
    fontSize: 8,
    color: "#64708A",
  },

  summaryAmount: {
    fontSize: 13,
    fontWeight: "800",
    color: "#171A35",
  },

  summaryDate: {
    fontSize: 8,
    color: "#64708A",
  },

  servicesContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 9,
  },

  donutContainer: {
    width: 105,
    height: 105,
    alignItems: "center",
    justifyContent: "center",
  },

  donutOuter: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    backgroundColor: "#6554F0",
    borderWidth: 8,
    borderColor: "#6554F0",
  },

  donutSegment: {
    position: "absolute",
    width: 100,
    height: 100,
    borderRadius: 50,
    opacity: 0.95,
  },

  donutInner: {
    width: 62,
    height: 62,
    borderRadius: 31,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },

  donutAmount: {
    fontSize: 10,
    fontWeight: "800",
    color: "#171A35",
  },

  donutLabel: {
    fontSize: 7,
    color: "#64708A",
    marginTop: 3,
  },

  serviceList: {
    flex: 1,
    minWidth: 0,
    gap: 10,
  },

  serviceRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },

  serviceDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
  },

  serviceName: {
    flex: 1,
    minWidth: 0,
    fontSize: 8,
    color: "#343B58",
  },

  servicePercentage: {
    width: 25,
    textAlign: "right",
    fontSize: 8,
    color: "#64708A",
  },

  serviceAmount: {
    width: 48,
    textAlign: "right",
    fontSize: 9,
    fontWeight: "700",
    color: "#171A35",
  },

  metricsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },

  metricCard: {
    width: "48%",
    flexGrow: 1,
    minWidth: 0,
    minHeight: 61,
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
    padding: 8,
    backgroundColor: "#F8F8FC",
    borderRadius: 11,
  },

  metricIcon: {
    width: 30,
    height: 30,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  metricContent: {
    flex: 1,
    minWidth: 0,
    gap: 4,
  },

  metricValueRow: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 4,
  },

  metricValue: {
    fontSize: 14,
    fontWeight: "800",
    color: "#171A35",
  },

  metricChange: {
    fontSize: 8,
    fontWeight: "700",
    color: "#16A765",
    backgroundColor: "#E4F9EE",
    overflow: "hidden",
    borderRadius: 5,
    paddingHorizontal: 4,
    paddingVertical: 2,
  },

  metricTitle: {
    fontSize: 8,
    color: "#64708A",
  },
});